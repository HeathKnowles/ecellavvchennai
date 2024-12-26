import { NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

// Function to clean the private key
function cleanPrivateKey(key: string): string {
  return key.replace(/\\n/g, '\n').replace(/"/g, '')
}

// Initialize auth - use service account
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: cleanPrivateKey(process.env.GOOGLE_PRIVATE_KEY || ''),
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
})

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth)

export async function POST(request: Request) {
  const body = await request.json()

  try {
    // Load the document properties and sheets
    await doc.loadInfo()

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]

    // Append a new row
    const newRow = await sheet.addRow({
      Name: body.name,
      'Registration No': body.registrationNo,
      'Email': body.email,
      'Preferred Team': body.team,
      'Extra Notes': body.notes,
      'Timestamp': new Date().toISOString()
    })

    return NextResponse.json({ 
      message: 'Application submitted successfully', 
      rowNumber: newRow.rowNumber 
    }, { status: 200 })
  } catch (error) {
    console.error('Error adding record to Google Sheets:', error)
    return NextResponse.json({ message: 'Error submitting application' }, { status: 500 })
  }
}

