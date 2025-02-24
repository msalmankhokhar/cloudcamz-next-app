'use client';

import Navbar from '@/components/dashboard/Navbar';
import { PrimaryButton } from '@/components/Button';
import { FaWindows } from 'react-icons/fa';

interface NavigatorUAData {
    platform: string;
}

export default function Download() {
    console.log(window.navigator.userAgent);
    const isWindows = typeof window !== 'undefined' && (
        // Check using userAgent as primary method
        window.navigator.userAgent.toLowerCase().includes('windows') ||
        // Also check userAgentData if available (modern browsers)
        ('userAgentData' in window.navigator &&
            ((window.navigator).userAgentData as NavigatorUAData)?.platform === 'Windows')
    );

    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold text-white mb-6">
                    CloudCamz Desktop Client
                </h1>

                {isWindows ? (
                    <div className="bg-brandDark-800 p-6 rounded-lg">
                        <h2 className="text-xl text-white mb-4">Download for Windows</h2>
                        <p className="text-gray-400 mb-6">
                            To use CloudCamz, you need to install our desktop client. This software connects your cameras to our cloud storage.
                        </p>
                        <PrimaryButton className='flex items-center flex-row gap-3 w-fit' href="/downloads/cloudcamz-setup.exe">
                            <FaWindows />
                            <span>Download for Windows</span>
                        </PrimaryButton>
                    </div>
                ) : (
                    <div className="bg-red-900/30 border border-red-800 p-6 rounded-lg">
                        <h2 className="text-xl text-white mb-4">Operating System Not Supported</h2>
                        <p className="text-gray-400">
                            Currently, CloudCamz is only available for Windows. Support for other operating systems is coming soon.
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
