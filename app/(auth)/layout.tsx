import Logo from '@/components/Logo'
import React from 'react'

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <main className="bg-secondary-1000 min-h-screen py-10">
      <div className="max-w-md mx-auto px-2 flex h-full flex-col justify-center">
        <div className="bg-brandDark-900 py-8 px-5 border rounded-xl border-gray-700">
          <div className="text-center">
            <Logo />
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}
