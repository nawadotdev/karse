import type { Metadata } from "next"
import { Inter, Libre_Baskerville } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"
import { CartProvider } from "@/context/CartContext"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "KARŞE | Zamansız Keten Tasarımlar",
    template: "%s | KARŞE",
  },
  description:
    "KARŞE, doğadan ilham alan sürdürülebilir keten gömlekler tasarlayan modern bir giyim markasıdır. Zamansız şıklık, doğal konfor.",
  keywords: [
    "keten gömlek",
    "sürdürülebilir giyim",
    "doğal kumaş",
    "keten giyim",
    "KARŞE",
  ],
  authors: [{ name: "KARŞE Keten Giyim Tekstil Sanayi ve Ticaret A.Ş." }],
  metadataBase: new URL("http://karse.vercel.app/"),
  openGraph: {
    title: "KARŞE | Zamansız Keten Tasarımlar",
    description:
      "Doğadan ilham alan, sürdürülebilir keten gömlek koleksiyonu.",
    url: "http://karse.vercel.app/",
    siteName: "KARŞE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KARŞE Keten Koleksiyonu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body
        className={`${inter.variable} ${libre.variable} antialiased bg-background text-foreground`}
      >
        <CartProvider>
          <Navbar />

          <main className="pt-16">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
