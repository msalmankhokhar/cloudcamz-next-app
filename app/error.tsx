'use client';

import { PrimaryButton } from "@/components/Button";
import Logo from "@/components/Logo";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-secondary-1000 to-brandDark-900 flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <Logo />

                <h1 className="mt-8 text-6xl font-bold text-white">
                    5<span className="text-brandLight-400">0</span>0
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-white">
                    Internal Server Error
                </h2>

                <p className="mt-4 text-gray-400 max-w-md mx-auto">
                    We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
                </p>

                <div className="mt-8 flex gap-4 justify-center">
                    <PrimaryButton onClick={() => reset()}>
                        Try Again
                    </PrimaryButton>
                    <PrimaryButton href="/">
                        Back to Home
                    </PrimaryButton>
                </div>
            </div>

            {/* Background Pattern */}
            <div
                className="fixed inset-0 -z-10"
                style={{
                    backgroundImage: `
            linear-gradient(90deg, rgb(131 189 213 / 0.02) 1px, transparent 0),
            linear-gradient(rgb(131 189 213 / 0.02) 1px, transparent 0)
          `,
                    backgroundSize: '24px 24px'
                }}
            />
        </div>
    );
}
