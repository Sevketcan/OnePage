import AppCard from '@/components/AppCard'

const categories = [
  {
    title: '🧠 Brain Games',
    apps: [
      { name: 'Flag Guessing Game', path: '/flag-game', description: 'Test your knowledge of country flags! Can you identify the country from its flag?' },
      { name: 'Find the Flag', path: '/find-country', description: 'Challenge yourself to find the correct flag for each country name!' },
      { name: 'IQ Test', path: '/iq-test', description: 'Take a fun IQ test challenge' },
    ],
  },
  {
    title: '🎲 Fun Quizzes',
    apps: [
      { name: 'Country Quiz', path: '/country-quiz', description: 'Which country should you live in?' },
      { name: 'Personality Test', path: '/personality', description: 'Discover your personality type' },
      { name: 'Knowledge Quiz', path: '/knowledge', description: 'Test your general knowledge' },
    ],
  },
  {
    title: '🛠️ Useful Tools',
    apps: [
      { name: 'BMI Calculator', path: '/bmi', description: 'Calculate your Body Mass Index' },
      { name: 'Password Generator', path: '/password', description: 'Generate secure passwords' },
      { name: 'Text Counter', path: '/text-counter', description: 'Count words, characters, and more' },
    ],
  },
]

export default function Home() {
  return (
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Maines</h1>
        <p className="text-xl text-gray-600">Discover fun games, engaging quizzes, and useful tools</p>
      </header>

      <div className="grid gap-8">
        {categories.map((category, index) => (
          <section key={category.title} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.apps.map((app) => (
                <AppCard
                  key={app.path}
                  name={app.name}
                  path={app.path}
                  description={app.description}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
} 