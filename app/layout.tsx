import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { profile } from '@/data/profile'
import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const siteUrl = profile.seo.siteUrl

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: profile.seo.title,
  description: profile.seo.description,
  applicationName: profile.name,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    type: 'profile',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: profile.name,
    images: [
      {
        url: profile.images.hero.src,
        width: 1399,
        height: 1600,
        alt: profile.images.hero.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
    images: [profile.images.hero.src],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${display.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
      </body>
    </html>
  )
}
