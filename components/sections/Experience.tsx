import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionLabel } from '@/components/sections/SectionLabel'

function ExperienceCard({
  number,
  name,
  role,
  detail,
  className = '',
}: {
  number: string
  name: string
  role: string
  detail: string
  className?: string
}) {
  return (
    <article className={`experience-card ${className}`}>
      <div className="experience-top">
        <span>{number}</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>
      <div>
        <p className="experience-kicker">{role}</p>
        <h3>{name}</h3>
        <p className="experience-detail">{detail}</p>
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <section
      className="experience section-shell"
      id="experiencia"
      aria-labelledby="experience-heading"
    >
      <div className="section-heading">
        <div>
          <SectionLabel>02 / EXPERIÊNCIA</SectionLabel>
          <h2 id="experience-heading">
            Experiência dentro <em>do esporte.</em>
          </h2>
        </div>
        <p>
          Uma trajetória construída em diferentes contextos do esporte e da
          preparação física.
        </p>
      </div>

      <div className="experience-grid">
        {profile.experiences.map((item) => (
          <ExperienceCard
            key={item.number}
            number={item.number}
            name={item.name}
            role={item.role}
            detail={item.detail}
            className={item.featured ? 'corinthians-card' : undefined}
          />
        ))}
      </div>

      <figure className="experience-photo">
        <Image
          src={profile.images.training.src}
          alt={profile.images.training.alt}
          width={1600}
          height={1000}
          sizes="(max-width: 760px) 100vw, 86vw"
          className="experience-photo-image"
        />
      </figure>
    </section>
  )
}
