import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "KVKK",
    description:
        "KARŞE Keten Giyim Tekstil Sanayi ve Ticaret A.Ş. KVKK Aydınlatma Metni.",
}

const KvkkPage = () => {
    return (
        <main className="bg-background py-32">
            <div className="mx-auto max-w-3xl px-6">
                <h1 className="mb-8 text-3xl text-primary font-heading">
                    KVKK Aydınlatma Metni
                </h1>

                <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                    <p>
                        KARŞE Keten Giyim Tekstil Sanayi ve Ticaret A.Ş. (“KARŞE”), 6698 sayılı
                        Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel
                        verilerinizin güvenliğine önem vermekte ve veri sorumlusu sıfatıyla
                        aşağıda belirtilen esaslar çerçevesinde işlemektedir.
                    </p>

                    <h2 className="text-foreground font-medium">
                        1. İşlenen Kişisel Veriler
                    </h2>
                    <p>
                        İletişim formları, e-posta yazışmaları ve site kullanımı sırasında
                        ad, soyad, e-posta adresi ve iletişim bilgileriniz işlenebilmektedir.
                    </p>

                    <h2 className="text-foreground font-medium">
                        2. Kişisel Verilerin İşlenme Amaçları
                    </h2>
                    <p>
                        Kişisel verileriniz; iletişim süreçlerinin yürütülmesi, taleplerin
                        yanıtlanması, hizmet kalitesinin artırılması ve yasal yükümlülüklerin
                        yerine getirilmesi amaçlarıyla işlenmektedir.
                    </p>

                    <h2 className="text-foreground font-medium">
                        3. Kişisel Verilerin Aktarılması
                    </h2>
                    <p>
                        Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle
                        paylaşılmamaktadır.
                    </p>

                    <h2 className="text-foreground font-medium">
                        4. KVKK Kapsamındaki Haklarınız
                    </h2>
                    <p>
                        KVKK’nın 11. maddesi uyarınca; kişisel verilerinizin işlenip
                        işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme
                        haklarına sahipsiniz.
                    </p>

                    <p>
                        Taleplerinizi{" "}
                        <a
                            href="mailto:info@karseketengiyim.com"
                            className="text-primary hover:underline"
                        >
                            info@karseketengiyim.com
                        </a>{" "}
                        adresi üzerinden iletebilirsiniz.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default KvkkPage
