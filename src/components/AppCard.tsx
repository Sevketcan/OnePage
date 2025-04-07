'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface AppCardProps {
  name: string
  path: string
  description: string
}

export default function AppCard({ name, path, description }: AppCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={path}>
        <div className="card h-full">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
} 