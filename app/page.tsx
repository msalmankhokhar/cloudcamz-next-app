import Logo from "@/components/Logo";
import { HeroPattern } from "@/components/BackgroundPattern";
import { PrimaryButton, SecondaryButton } from '@/components/Button'
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-secondary-1000 to-brandDark-900">
      {/* Navigation */}
      <nav className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            <div className="flex gap-4">
              <Link 
                href="/login" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative isolate">
        <HeroPattern />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Secure Cloud Storage for Your
              <span className="text-brandLight-400"> CCTV Recordings</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Never lose important footage again. Store your surveillance recordings securely in the cloud with automated backup and easy access.
            </p>
            <div className="flex gap-4 justify-center">
              <PrimaryButton href="/login">
                Get Started
              </PrimaryButton>
              <SecondaryButton href="#features">
                Learn More
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative isolate py-20 bg-brandDark-800/50">
        {/* <FeaturesPattern /> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose CloudCamz?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-brandDark-900 p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-brandLight-400/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-brandLight-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="relative isolate py-20">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full" 
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgb(131 189 213 / 0.03) 1px, transparent 0),
                linear-gradient(rgb(131 189 213 / 0.03) 1px, transparent 0)
              `,
              backgroundSize: '32px 32px'
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Simple 3-Step Setup
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-brandLight-400 rounded-full flex items-center justify-center mx-auto mb-4 text-brandDark-900 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-brandDark-800/50">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Footage?
          </h2>
          <p className="text-gray-400 mb-8">
            Join businesses that trust CloudCamz for their surveillance storage needs.
          </p>
          <PrimaryButton href="/signup">
            Get Started
          </PrimaryButton>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <Logo />
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} CloudCamz. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center">
              Developed with ❤️ by <a href="https://github.com/msalmankhokhar" className="text-brandLight-400 hover:text-brandLight-300 transition-colors">Salman Khokhar</a>
            </p>
            <p className="text-gray-500 text-sm text-center">
              (Under Development)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Secure Storage",
    description: "Enterprise-grade encryption and secure cloud storage for your sensitive footage.",
    icon: LockIcon,
  },
  {
    title: "Easy Access",
    description: "Access your recordings anytime, anywhere through our web interface.",
    icon: DeviceIcon,
  },
  {
    title: "Automatic Backup",
    description: "Set and forget - automatic backup of your CCTV recordings.",
    icon: CloudIcon,
  },
];

const steps = [
  {
    title: "Install Desktop Client",
    description: "Download and install our lightweight Windows application.",
  },
  {
    title: "Connect Cameras",
    description: "Connect your CCTV cameras through our simple interface.",
  },
  {
    title: "Start Backing Up",
    description: "Your footage is automatically stored in the cloud.",
  },
];

// Icon components with proper TypeScript interface
interface IconProps {
  className?: string;
}

function LockIcon({ className }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function DeviceIcon({ className }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
  );
}

function CloudIcon({ className }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
    </svg>
  );
}
