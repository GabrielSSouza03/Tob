import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionLabel } from '@/components/sections/SectionLabel'

export function Expertise() {
  return (
    <section
      className="specialties section-shell"
      id="especialidades"
      aria-labelledby="expertise-heading"
    >
      <div className="specialty-title">
        <SectionLabel>03 / ESPECIALIDADES</SectionLabel>
        <h2 id="expertise-heading">
          Ciência aplicada ao
          <br />
          <em>movimento humano.</em>
        </h2>
        <p>Áreas de conhecimento que orientam minha atuação profissional.</p>
      </div>

      <div className="specialty-list">
        {profile.specialties.map((item) => (
          <article className="specialty-row" key={item.number}>
            <span className="specialty-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <ArrowUpRight size={17} aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
