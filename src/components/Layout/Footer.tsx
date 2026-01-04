import React from "react"
import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3 grid-cols-1 justify-items-center">
          
          <div className="space-y-4">
            <h2 className="text-2xl tracking-wide text-primary font-heading w-full text-center">
              KARŞE
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground">
              KARŞE Keten Giyim Tekstil Sanayi ve Ticaret A.Ş.
            </p>
            <p className="max-w-sm text-sm text-muted-foreground">
              Merter Mahallesi, Giyimkent Caddesi No:45/3<br />
              34173 Esenler / İstanbul, Türkiye
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground w-full text-center">
              Navigasyon
            </h3>
            <ul className="space-y-2 text-sm">
            <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/#hakkimizda"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/#koleksiyon"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Koleksiyon
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-foreground w-full text-center">
              İletişim
            </h3>

            <div className="flex items-start gap-4 flex-col">
              <a
                href="https://instagram.com/karse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary flex gap-2 items-center"
              >
                <Instagram className="h-5 w-5" />
                <span>@karseketen</span>
              </a>

              <a
                href="mailto:info@karseketengiyim.com"
                className="text-muted-foreground transition-colors hover:text-primary flex gap-2 items-center"
              >
                <Mail className="h-5 w-5" />
                <span>info@karseketengiyim.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <span>
            © {new Date().getFullYear()} KARŞE Keten Giyim Tekstil Sanayi ve Ticaret A.Ş.
          </span>
          <div className="flex gap-4">
            <Link
              href="/kvkk"
              className="transition-colors hover:text-primary"
            >
              KVKK
            </Link>
            <Link
              href="/gizlilik"
              className="transition-colors hover:text-primary"
            >
              Gizlilik
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
