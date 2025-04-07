# Maines - Fun Games, Quizzes & Tools Platform

A modern web platform hosting multiple interactive applications under a single domain. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🧠 Brain Games
  - Flag Guessing Game
  - Find the Country
  - IQ Test

- 🎲 Fun Quizzes
  - Country Quiz
  - Personality Test
  - Knowledge Quiz

- 🛠️ Useful Tools
  - BMI Calculator
  - Password Generator
  - Text Counter

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/maines.git
   cd maines
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── [app]/             # Individual app pages
├── components/            # Shared components
│   ├── Layout.tsx        # Main layout with navigation
│   └── Navigation.tsx    # Navigation component
└── styles/               # Global styles
    └── globals.css       # Tailwind imports
```

## Adding New Apps

1. Create a new directory under `src/app/[app-name]`
2. Create a `page.tsx` file with your app component
3. Add the app to the categories array in `src/app/page.tsx`

## Ad Integration

The platform is designed to integrate with Google AdSense. Ad spaces are available in:
- Top banner
- Sidebar
- In-content areas

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
