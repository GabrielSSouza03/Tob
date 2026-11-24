import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionLabel } from '@/components/sections/SectionLabel'

export function Education() {
  return (
    <section
      className="education section-shell"
      id="formacao"
      aria-labelledby="education-heading"
    >
      <div className="section-heading education-heading">
        <div>
          <SectionLabel>04 / FORMAÇÃO</SectionLabel>
          <h2 id="education-heading">
            Uma base em <em>constante construção.</em>
          </h2>
        </div>
        <p>Formação acadêmica e cursos relacionados à ciência do esporte.</p>
      </div>

      <div className="education-layout">
        <div className="timeline">
          {profile.education.map((item) => (
            <article className="education-item" key={`${item.course}-${item.year}`}>
              <span className="education-dot" aria-hidden="true" />
              <span className="education-year">{item.year}</span>
              <div>
                <h3>{item.course}</h3>
                <p>{item.school}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="courses" aria-label="Cursos e certificações">
          <SectionLabel>CURSOS E CERTIFICAÇÕES</SectionLabel>
          <ul>
            {profile.courses.map((course, index) => (
              <li key={course}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {course}
                <ArrowUpRight size={15} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
