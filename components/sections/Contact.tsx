import { ArrowUpRight } from 'lucide-react'
import {
  getContactChannels,
  getPrimaryMailto,
  profile,
} from '@/data/profile'
import { SectionLabel } from '@/components/sections/SectionLabel'

export function Contact() {
  const channels = getContactChannels()
  const primaryMailto = getPrimaryMailto()
  const hasConfiguredContact = channels.some((channel) => channel.configured)

  return (
    <section className="contact" id="contato" aria-labelledby="contact-heading">
      <div className="contact-inner">
        <SectionLabel>05 / CONTATO</SectionLabel>
        <p className="contact-eyebrow">{profile.contact.eyebrow}</p>
        <h2 id="contact-heading">
          {profile.contact.title.before.split('\n').map((line, index, lines) => (
            <span key={line}>
              {line}
              {index < lines.length - 1 ? <br /> : null}
            </span>
          ))}
          <em>{profile.contact.title.emphasis}</em>
        </h2>
        <p className="contact-copy">{profile.contact.copy}</p>

        {primaryMailto ? (
          <a className="button-light" href={primaryMailto}>
            {profile.contact.ctaLabel}{' '}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        ) : (
          <a className="button-light" href="#contato" aria-disabled="true">
            {profile.contact.ctaLabel}{' '}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        )}

        {!hasConfiguredContact ? (
          <p className="contact-placeholder">
            Contatos ainda não confirmados — atualizar `data/profile.ts` antes da
            publicação.
          </p>
        ) : null}

        <div className="contact-links">
          {channels.map((channel) =>
            channel.configured && channel.href ? (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.id === 'email' ? undefined : '_blank'}
                rel={
                  channel.id === 'email' ? undefined : 'noopener noreferrer'
                }
              >
                {channel.label}
                <span>{channel.hint}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              <a
                key={channel.id}
                href="#contato"
                aria-label={`${channel.label} — contato a confirmar`}
              >
                {channel.label}
                <span>{channel.hint}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
