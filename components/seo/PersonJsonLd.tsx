import { profile } from '@/data/profile'

export function PersonJsonLd() {
  const sameAs = [
    profile.contact.linkedin,
    profile.contact.tiktok,
    profile.contact.instagram,
    profile.contact.whatsapp
      ? `https://wa.me/${profile.contact.whatsapp.replace(/\D/g, '')}`
      : null,
  ].filter((value): value is string => Boolean(value))

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.seo.description,
    url: profile.seo.siteUrl,
    image: `${profile.seo.siteUrl}${profile.images.portrait.src}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressCountry: 'BR',
    },
    alumniOf: profile.education.map((item) => ({
      '@type': 'EducationalOrganization',
      name: item.school,
    })),
    knowsAbout: profile.specialties.map((item) => item.title),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(profile.contact.email ? { email: profile.contact.email } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
