import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionLabel } from '@/components/sections/SectionLabel'

export function About() {
  return (
    <section className="intro section-shell" id="sobre" aria-labelledby="about-heading">
      <div className="intro-main">
        <div className="intro-heading">
          <SectionLabel>01 / SOBRE</SectionLabel>
          <h2 id="about-heading">
            Conhecimento científico.
            <br />
            <span>Aplicação prática.</span>
            <br />
            Performance.
          </h2>
        </div>

        <div className="intro-copy">
          <p className="intro-lead">{profile.about.lead}</p>
          {profile.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <a className="inline-link" href="#formacao">
            Minha formação acadêmica <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="intro-aside">
        <figure className="intro-media">
          <Image
            src={profile.images.portrait.src}
            alt={profile.images.portrait.alt}
            width={640}
            height={800}
            sizes="(max-width: 760px) 100vw, 360px"
            className="intro-portrait"
          />
        </figure>
        <div className="intro-note">
          <span>FOCO</span>
          <p>
            Da evidência científica
            <br />
            à prática esportiva.
          </p>
          <span className="note-index">T · 01</span>
        </div>
      </div>
    </section>
  )
}
