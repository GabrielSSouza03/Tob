import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionLabel } from '@/components/sections/SectionLabel'

export function Hero() {
  const { heroTitle, images } = profile

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <SectionLabel>
          CIÊNCIA DO ESPORTE · {profile.location.toUpperCase()}
        </SectionLabel>
        <h1 id="hero-heading">
          {heroTitle.before}
          <em>{heroTitle.emphasis}</em>
          {heroTitle.after}
        </h1>
        <p className="hero-description">{profile.heroDescription}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#sobre">
            Conheça minha trajetória <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a className="text-link" href="#contato">
            Solicitar consultoria <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="hero-signature">
          <span className="signature-line" aria-hidden="true" />
          <div>
            <strong>{profile.name}</strong>
            <span>
              {profile.role} <b aria-hidden="true">·</b> {profile.tagline}
            </span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="(max-width: 760px) 100vw, 55vw"
          className="hero-image"
        />
        <div className="image-wash" aria-hidden="true" />
        <div className="image-caption">
          <span className="caption-dot" aria-hidden="true" />
          ESPORTE, CIÊNCIA E MOVIMENTO <span>01 / 05</span>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>SPORT</span>
          <span>SCIENCE</span>
          <span className="stamp-mark">↗</span>
        </div>
      </div>

      <a className="scroll-cue" href="#sobre" aria-label="Rolar para conhecer">
        <ArrowDown size={15} aria-hidden="true" /> ROLE PARA EXPLORAR
      </a>
    </section>
  )
}
