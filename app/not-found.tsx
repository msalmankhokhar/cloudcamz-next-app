import { PrimaryButton } from "@/components/Button";
import Logo from "@/components/Logo";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-secondary-1000 to-brandDark-900 flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <Logo />

                <h1 className="mt-8 text-6xl font-bold text-white">
                    4<span className="text-brandLight-400">0</span>4
                </h1>

                <h2 className="mt-4 text-2xl font-semibold text-white">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-400 max-w-md mx-auto">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. Perhaps you&apos;ve mistyped the URL or the page has been moved.
                </p>

                <div className="mt-8">
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
