import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Expertise } from '@/components/sections/Expertise'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'
import { PersonJsonLd } from '@/components/seo/PersonJsonLd'

export default function Page() {
  return (
    <>
      <PersonJsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
