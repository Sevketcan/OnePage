'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { countries, difficultySettings, type Difficulty, type Country } from '@/data/countries'
import Image from 'next/image'

export default function FlagGame() {
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null)
  const [options, setOptions] = useState<Country[]>([])
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [message, setMessage] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('easy')
  const [gameStarted, setGameStarted] = useState(false)

  const generateOptions = (correctCountry: Country) => {
    const otherCountries = countries
      .filter(c => c.code !== correctCountry.code && c.difficulty === selectedDifficulty)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    
    const allOptions = [...otherCountries, correctCountry]
    return allOptions.sort(() => Math.random() - 0.5)
  }

  const startNewRound = () => {
    const difficultyCountries = countries.filter(c => c.difficulty === selectedDifficulty)
    const randomCountry = difficultyCountries[Math.floor(Math.random() * difficultyCountries.length)]
    setCurrentCountry(randomCountry)
    setOptions(generateOptions(randomCountry))
    setShowResult(false)
    setMessage('')
  }

  const startGame = () => {
    setGameStarted(true)
    startNewRound()
  }

  const checkAnswer = (selectedCountry: Country) => {
    if (selectedCountry.code === currentCountry?.code) {
      const points = difficultySettings[selectedCountry.difficulty].points
      setScore(score + points)
      setMessage(`Correct! 🎉 +${points} points`)
    } else {
      setMessage(`Wrong! The correct answer was ${currentCountry?.name}`)
    }
    setShowResult(true)
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Flag Guessing Game</h1>
        
        {!gameStarted ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Select Difficulty</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(difficultySettings).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedDifficulty(key as Difficulty)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedDifficulty === key
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{value.name}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                  <p className="text-primary font-medium mt-2">+{value.points} points per correct answer</p>
                </button>
              ))}
            </div>
            <button
              onClick={startGame}
              className="btn btn-primary w-full mt-6"
            >
              Start Game
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-sm text-gray-500">Difficulty:</span>
                <span className="ml-2 font-semibold text-primary">
                  {difficultySettings[selectedDifficulty].name}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Score:</span>
                <span className="ml-2 font-semibold text-primary">{score}</span>
              </div>
            </div>

            <div className="bg-gray-100 flex-1 flex flex-col items-center justify-center p-6 rounded-lg">
              {currentCountry && (
                <div className="relative w-[400px] h-[300px] mb-8">
                  <Image
                    src={`https://flagcdn.com/w640/${currentCountry.code}.png`}
                    alt={`Flag of ${currentCountry.name}`}
                    fill
                    className="object-contain"
                    sizes="400px"
                    priority
                  />
                </div>
              )}
              <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                {options.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => checkAnswer(country)}
                    disabled={showResult}
                    className={`btn ${
                      showResult 
                        ? country.code === currentCountry?.code
                          ? 'bg-green-500 hover:bg-green-500 text-white cursor-not-allowed'
                          : 'bg-gray-300 hover:bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'btn-secondary'
                    }`}
                  >
                    {country.name}
                  </button>
                ))}
              </div>
            </div>

            {!showResult ? (
              <div className="text-center space-y-4 mt-4">
                <p className="text-xl font-semibold">Which country does this flag belong to?</p>
              </div>
            ) : (
              <div className="text-center space-y-4 mt-4">
                <p className={`text-xl ${message.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
                <button onClick={startNewRound} className="btn btn-primary">
                  Next Flag
                </button>
                <button
                  onClick={() => setGameStarted(false)}
                  className="btn btn-secondary block w-full mt-2"
                >
                  Change Difficulty
                </button>
              </div>
            )}
          </div>
        )}

        {/* In-content Ad */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="h-[250px] bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500">Advertisement Space</span>
          </div>
        </div>
      </div>
    </Layout>
  )
} 