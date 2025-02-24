import type { Metadata } from "next";
import { DM_Sans as Font } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = Font({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "CloudCamz - Cloud Storage for CCTV Camera Recordings | Secure Backup Solution",
  description: "Store your CCTV camera recordings securely in the cloud. Long-term video storage, easy access, and automated backup solution for surveillance systems. Try CloudCamz today!",
  icons: {
    apple: [
      { url: '/appicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    icon: [
      { url: '/appicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/appicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  },
  manifest: '/appicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${font.className} antialiased`}>
        <ClerkProvider>
        <div className="relative min-h-screen bg-gradient-to-b from-secondary-1000 to-brandDark-900">
          {children}
        </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
