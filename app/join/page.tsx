'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNo: '',
    email: '',
    team: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', registrationNo: '', email: '', team: '', notes: '' }) // Reset form
        setShowPopup(true)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join E-Cell Amrita
        </motion.h1>
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-blue-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <label className="block text-yellow-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-yellow-300 text-sm font-bold mb-2" htmlFor="registrationNo">
              Registration No
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="registrationNo"
              type="text"
              placeholder="Your Registration Number"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-yellow-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-yellow-300 text-sm font-bold mb-2" htmlFor="team">
              Preferred Team
            </label>
            <select 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="team"
              name="team"
              value={formData.team}
              onChange={handleChange}
              required
            >
              <option value="">Select Team</option>
              <option value="Technical">Technical</option>
              <option value="Marketing">Marketing</option>
              <option value="Event Management">Event Management</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-yellow-300 text-sm font-bold mb-2" htmlFor="notes">
              Extra Notes
            </label>
            <textarea 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="notes"
              placeholder="Any additional information you'd like to share"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button 
              className={`bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-400 text-center">Error submitting application. Please try again.</p>
          )}
        </motion.form>
      </div>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Application Submitted!</h2>
              <p className="text-gray-700 mb-6">Thank you for your interest in joining E-Cell Amrita. Your application has been recorded in our Google Sheet. We'll review it and get back to you soon.</p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default JoinUsPage

