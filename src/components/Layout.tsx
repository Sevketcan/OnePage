import Navigation from './Navigation'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Top Banner Ad */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="h-[90px] bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500">Advertisement Space</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar with Ads */}
          <aside className="lg:col-span-2 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm sticky top-4">
              <div className="h-[250px] bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Sidebar Ad</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-[250px] bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Sidebar Ad</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8">
            {children}
          </div>

          {/* Right Sidebar with Ads */}
          <aside className="lg:col-span-2 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm sticky top-4">
              <div className="h-[250px] bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Sidebar Ad</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-[250px] bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">Sidebar Ad</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p>© {new Date().getFullYear()} Maines. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 