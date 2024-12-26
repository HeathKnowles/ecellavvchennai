'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const teamMembers = [
  { 
    name: 'Shuddhasattwa Majumder ', 
    role: 'President',
    image: '/images/shudh.jpg',
    bio: 'Redefining entrepreneurship, championing sustainability, and crafting intelligent solutions.',
    linkedin: 'https://www.linkedin.com/in/shuddhasattwa-majumder/', 
    email: 'majumder2705@gmail.com' 
  },
  { 
    name: 'Srivathsan S',
    role: 'Vice President',
    image: '/images/srivathsan.jpg',
    linkedin: 'https://www.linkedin.com/in/srivathsan-s-309a5a28a/',
    bio: 'Driving strategic growth and fostering innovation to achieve organizational excellence.',
    email: 'Srivathsan1834@gmail.com' 
  },
  { 
    name: 'Abhinav Krishnakumar',
    role: 'Marketing Head',
    image: '/images/abhinav.png',
    linkedin: 'https://www.linkedin.com/in/abhinav-krishnakumar-1b9b13286/',
    bio: 'Leading marketing efforts, driving sponsorships, and crafting impactful content to foster innovation and entrepreneurship',
    email: 'abhinavkrish2004@gmail.com' 
  },
  { 
    name: 'Mimansa',
    role: 'Social Media Head',
    image: '/images/mimansa.jpg',
    linkedin: 'https://www.linkedin.com/in/mimansa-939432288/',
    bio: 'Curating meaningful conversations, amplifying visibility, and fostering a thriving community through the power of strategic and impactful digital  storytelling.',
    email: 'ikmimansa@gmail.com' 
  },
  { 
    name: 'Yash Yashuday',
    role: 'Technical Lead', 
    image: '/images/yash.jpeg', 
    linkedin: 'https://linkedin.com/in/yash-yashuday',
    bio: 'If there is anything you need that is related to computers then hit me up!', 
    email: 'yyashuday13@gmail.com' },
  { 
    name: 'Sanjay Sree S',
    role: 'Event Management Head',
    image: '/images/sanjay.jpg',
    linkedin: 'https://www.linkedin.com/in/sanjay-sree-s-85125a2b4/',
    bio: 'Orchestrating impactful events to inspire and empower budding entrepreneurs.',
    email: 'sanjay72318228@gmail.com' },
  { 
    name: 'Acchute Kashyap',
    role: 'Corporate Relations Head',
    image: '/images/acchute.jpg',
    linkedin: 'https://www.linkedin.com/in/achukash/',
    bio: 'Passionate about entrepreneurship and building strong industry connections',
    email: 'acchute.kashyap@gmail.com' },
  { 
    name: 'Thanush J',
    role: 'Student Relations Head',
    image: '/images/thanush.jpeg',
    linkedin: 'https://www.linkedin.com/in/thanush-j/',
    bio: 'Fostering strategic alliances, empowering collaborations, and unlocking opportunities for entrepreneurial growth.',
    email: 'ch.en.u4are23018@ch.students.amrita.edu' 
  }
]

interface TeamMember {
  bio: string
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-blue-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image
        src={member.image}
        alt={member.name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">{member.name}</h2>
        <p className="text-blue-200 mb-4">{member.role}</p>
        <p className="text-blue-100 text-sm">{member.bio}</p>
      </div>
      <motion.div
        className="absolute inset-0 bg-blue-900 bg-opacity-90 flex items-center justify-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </motion.a>
        <motion.a
          href={`mailto:${member.email}`}
          className="text-yellow-400 hover:text-yellow-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamPage
