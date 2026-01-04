import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Gizlilik",
    description:
      "KARŞE Keten Giyim Tekstil Sanayi ve Ticaret A.Ş. KVKK Aydınlatma Metni.",
  }

const GizlilikPage = () => {
  return (
    <main className="bg-background py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl text-primary font-heading">
          Gizlilik Politikası
        </h1>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <p>
            KARŞE Keten Giyim Tekstil Sanayi ve Ticaret A.Ş. (“KARŞE”), web sitesini
            ziyaret eden kullanıcıların gizliliğine saygı duyar ve kişisel
            bilgilerin korunmasını öncelik olarak kabul eder.
          </p>

          <h2 className="text-foreground font-medium">
            1. Toplanan Bilgiler
          </h2>
          <p>
            Web sitemiz üzerinden yalnızca kullanıcı tarafından gönüllü olarak
            paylaşılan iletişim bilgileri toplanmaktadır.
          </p>

          <h2 className="text-foreground font-medium">
            2. Bilgilerin Kullanımı
          </h2>
          <p>
            Toplanan bilgiler; kullanıcı taleplerine yanıt vermek, iletişim
            sağlamak ve hizmetlerimizi geliştirmek amacıyla kullanılmaktadır.
          </p>

          <h2 className="text-foreground font-medium">
            3. Bilgi Güvenliği
          </h2>
          <p>
            Kişisel bilgileriniz, yetkisiz erişime karşı korunmakta ve gerekli
            teknik ve idari tedbirler alınmaktadır.
          </p>

          <h2 className="text-foreground font-medium">
            4. Çerezler (Cookies)
          </h2>
          <p>
            Web sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerezler
            kullanılabilir. Tarayıcı ayarlarınızdan çerezleri kontrol
            edebilirsiniz.
          </p>
          <p>
            Gizlilik politikamız hakkında sorularınız için{" "}
            <a
              href="mailto:info@karseketengiyim.com"
              className="text-primary hover:underline"
            >
              info@karseketengiyim.com
            </a>{" "}
            adresinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </main>
  )
}

export default GizlilikPage
