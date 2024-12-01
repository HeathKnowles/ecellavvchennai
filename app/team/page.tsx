"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Elara Quantum",
    role: "Founder & CEO",
    bio: "Pioneering quantum computing solutions for global challenges.",
    image: "/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/elara-quantum",
    email: "elara@futureventures.com",
  },
  {
    name: "Zephyr Nanotech",
    role: "CTO",
    bio: "Pushing the boundaries of nanotechnology and AI integration.",
    image: "/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/zephyr-nanotech",
    email: "zephyr@futureventures.com",
  },
  {
    name: "Nova Starlight",
    role: "Head of AI Research",
    bio: "Developing next-gen AI systems for space exploration and climate solutions.",
    image: "/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/nova-starlight",
    email: "nova@futureventures.com",
  },
  {
    name: "Orion Cyberscape",
    role: "Lead Developer",
    bio: "Architecting secure and scalable systems for the digital frontier.",
    image: "/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/orion-cyberscape",
    email: "orion@futureventures.com",
  },
  {
    name: "Lyra Neuralink",
    role: "UX/UI Designer",
    bio: "Crafting intuitive interfaces for brain-computer interaction.",
    image: "/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/lyra-neuralink",
    email: "lyra@futureventures.com",
  },
  {
    name: "Atlas Robotics",
    role: "Robotics Engineer",
    bio: "Building the next generation of autonomous and adaptive robots.",
    image: "/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/atlas-robotics",
    email: "atlas@futureventures.com",
  },
  {
    name: "Celeste Bioforge",
    role: "Biotech Specialist",
    bio: "Merging biology and technology to solve health and environmental issues.",
    image: "/placeholder.svg",
    linkedin: "https://www.linkedin.com/in/celeste-bioforge",
    email: "celeste@futureventures.com",
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          Meet Our Visionary Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                  {member.name}
                </h2>
                <p className="text-yellow-300 mb-4">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamPage;
