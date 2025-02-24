
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { PrimaryButton } from '../Button'

export default function Navbar() {
    return (
        <nav className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex gap-5 items-center">
                <Logo />
                <SignedIn>
                    <div className='flex items-center gap-5'>
                        <Link className='text-white' href='/dashboard'>Dashboard</Link>
                        <Link className='text-white' href='/dashboard/cameras'>Cameras</Link>
                        <Link className='text-white' href='/dashboard/cameras'>Recordings</Link>
                        <Link className='text-white' href='/dashboard/cameras'>Storage</Link>
                    </div>
                </SignedIn>
            </div>
            <div className="flex items-center gap-4">

              <SignedOut>
                <SignInButton>
                  <span
                    className="text-xs cursor-pointer hover:text-white"
                  >
                    Log In
                  </span>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton />
                <SignOutButton>
                  {/* <span
                    className="cursor-pointer text-white text-sm"
                  >
                    Log Out
                  </span> */}
                  <PrimaryButton>Log Out</PrimaryButton>
                </SignOutButton>
              </SignedIn>

            </div>
          </div>
        </div>
      </nav>
    )
}
