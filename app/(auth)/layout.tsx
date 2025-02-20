import { HeroPattern } from '@/components/BackgroundPattern'
import Logo from '@/components/Logo'
import React from 'react'

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-brandDark-800 flex-col items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <HeroPattern />
          <div className="absolute inset-0 bg-gradient-to-r from-brandDark-900 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <Logo />
          <h2 className="mt-8 text-3xl font-bold text-white">
            Secure Your CCTV Footage in the Cloud
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Access your surveillance recordings anytime, anywhere. Keep your premises secure with automated cloud backup.
          </p>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-brandDark-900/50 rounded-lg border border-gray-700">
              <h3 className="text-brandLight-400 font-semibold">Automated Backup</h3>
              <p className="text-sm text-gray-400 mt-1">Never lose important footage</p>
            </div>
            <div className="p-4 bg-brandDark-900/50 rounded-lg border border-gray-700">
              <h3 className="text-brandLight-400 font-semibold">Easy Access</h3>
              <p className="text-sm text-gray-400 mt-1">View from any device</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <main className="flex-1 bg-secondary-1000 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-brandDark-900 py-8 px-5 border rounded-xl border-gray-700">
            <div className="lg:hidden text-center mb-6">
              <Logo />
            </div>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
