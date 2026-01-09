import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio Website',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="antialiased bg-black text-white overflow-x-hidden">
                {children}
            </body>
        </html>
    )
}
