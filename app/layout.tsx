import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ['latin'],
  weight: [ '300', '400', '500', '600', '700', '800' ]
})

export const metadata: Metadata = {
  title: "CloudCamz - Cloud Storage for CCTV Camera Recordings | Secure Backup Solution",
  description: "Store your CCTV camera recordings securely in the cloud. Long-term video storage, easy access, and automated backup solution for surveillance systems. Try CloudCamz today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/appicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/appicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/appicons/favicon-16x16.png" />
        <link rel="manifest" href="/appicons/site.webmanifest" />
      </head>

      <body className={`${font.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
