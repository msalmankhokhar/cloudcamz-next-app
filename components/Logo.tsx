import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/" className="flex justify-center items-center gap-2">
            <Image
                src="/appicons/android-chrome-192x192.png"
                alt="CloudCamz Logo"
                width={32}
                height={32}
                className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-brandLight-400">CloudCamz</span>
        </Link>
    )
}
