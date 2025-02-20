import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PrimaryButton } from './Button'

interface AuthContentProps {
    type: 'login' | 'signup'
}

export default function AuthContent({ type }: AuthContentProps) {
    return (
        <>
            <h1 className="text-center font-bold text-xl mt-2 mb-2 text-white">
                {
                    type === 'login' ? 'Login to Your Account' : 'Create Your Account'
                }
            </h1>

            {
                type === 'login' ? (
                    <p className="text-center font-light text-sm text-white mb-5">
                        Don&apos;t have an account? <Link href="/signup" className="text-sky-500">Signup here</Link>
                    </p>
                ) : (
                    <p className="text-center font-light text-sm text-white mb-5">
                        Already have an account? <Link href="/login" className="text-sky-500">Login here</Link>
                    </p>
                )
            }

            <form className="flex flex-col gap-3">
                {
                    type === 'signup' && (
                        <div className="flex flex-col gap-1">
                            <label className="text-white text-sm font-light" htmlFor="nameInput">Your Full Name</label>
                            <input className="text-white bg-transparent focus:ring-2 focus:ring-brandLight-300 py-2.5 px-3 outline-none border border-gray-600 rounded-md" type="email" required name="name" id="nameInput" placeholder="John Doe" />
                        </div>
                    )
                }
                <div className="flex flex-col gap-1">
                    <label className="text-white" htmlFor="EmailInput">Your Email</label>
                    <input className="text-white bg-transparent focus:ring-2 focus:ring-brandLight-300 py-2.5 px-3 outline-none border border-gray-600 rounded-md" type="email" required name="email" id="emailInput" placeholder="name@example.com" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-white" htmlFor="passwordInput">Password</label>
                    <input className="text-white bg-transparent focus:ring-2 focus:ring-brandLight-300 py-2.5 px-3 outline-none border border-gray-600 rounded-md" type="password" required name="email" id="passwordInput" placeholder="******" />
                </div>
            </form>

            <div className="mt-1">
                <PrimaryButton type="submit" className="w-full py-2.5 text-sm px-4 mt-3">
                    {
                        type === 'login' ? 'Login' : 'Create Account'
                    }
                </PrimaryButton>

                <div className="relative my-5">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-brandDark-900 px-2 text-gray-400">OR</span>
                    </div>
                </div>

                <button className="flex items-center justify-center gap-3 w-full border border-gray-600 text-white hover:bg-brandDark-800 transition-colors duration-200 py-2.5 text-sm px-4 rounded-md font-medium">
                    <Image
                        src="/icons/google.svg"
                        alt="Google Logo"
                        width={24}
                        height={24}
                        priority
                        className="w-5 h-5"
                    />
                    {
                        type === 'login' ? 'Continue with Google' : 'Signup with Google'
                    }
                </button>

                {
                    type === 'login' && (
                        <p className="text-center text-sm text-white mt-5">
                            Forgot password? <Link href="/forgot-password" className="text-sky-500">Reset it here</Link>
                        </p>
                    )
                }
            </div>
        </>
    )
}
