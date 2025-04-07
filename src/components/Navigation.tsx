import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-900">Maines</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/#brain-games" className="text-gray-600 hover:text-primary">
              Brain Games
            </Link>
            <Link href="/#fun-quizzes" className="text-gray-600 hover:text-primary">
              Fun Quizzes
            </Link>
            <Link href="/#useful-tools" className="text-gray-600 hover:text-primary">
              Useful Tools
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 