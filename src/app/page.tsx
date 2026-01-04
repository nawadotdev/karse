import Hakkimizda from "@/components/Sections/Hakkimizda"
import NedenBiz from "@/components/Sections/NedenBiz"
import Koleksiyon from "@/components/Sections/Koleksiyon"
import Hero from "@/components/Sections/Hero"

const Page = () => {
  return (
    <main className="flex flex-col">
      <Hero />
      <Hakkimizda />
      <NedenBiz />
      <Koleksiyon />
    </main>
  )
}

export default Page
