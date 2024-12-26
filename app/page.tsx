'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Lightbulb, Users, Rocket } from 'lucide-react'

const ECellHomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const featureAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />
      
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Innovate, Endeavour, Elate
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-yellow-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let&apos;s build, innovate and grow together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/join" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors duration-300">
              Join E-Cell <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-blue/[0.02] bg-[size:50px_50px]" />
        </div>
      </section>

      <section ref={ref} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400"
            variants={featureAnimation}
            initial="hidden"
            animate={controls}
          >
            Empowering Student Entrepreneurs
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Ideation Workshops", description: "Transform your ideas into viable business concepts" },
              { icon: Users, title: "Networking Events", description: "Connect with like-minded entrepreneurs and industry experts" },
              { icon: Rocket, title: "Platform + Tools", description: "Get a platform for launch of your startup" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-blue-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
                variants={featureAnimation}
                initial="hidden"
                animate={controls}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-blue-900 to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Entrepreneurial Journey?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-200 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join E-Cell Amrita and turn your innovative ideas into successful ventures.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/join" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors duration-300">
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ECellHomePage

