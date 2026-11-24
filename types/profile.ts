export type NavItem = {
  label: string
  href: string
}

export type Specialty = {
  number: string
  title: string
  text: string
}

export type EducationItem = {
  year: string
  school: string
  course: string
}

export type ExperienceItem = {
  number: string
  name: string
  role: string
  detail: string
  featured?: boolean
}

export type ContactChannel = {
  id: 'email' | 'whatsapp' | 'linkedin' | 'tiktok'
  label: string
  href: string | null
  hint: string
  configured: boolean
}

export type SiteImages = {
  hero: {
    src: string
    alt: string
  }
  portrait: {
    src: string
    alt: string
  }
  training: {
    src: string
    alt: string
  }
}

export type Profile = {
  name: string
  shortName: string
  role: string
  location: string
  tagline: string
  heroTitle: {
    before: string
    emphasis: string
    after: string
  }
  heroDescription: string
  about: {
    lead: string
    paragraphs: string[]
  }
  focusNote: string
  navigation: NavItem[]
  specialties: Specialty[]
  education: EducationItem[]
  courses: string[]
  experiences: ExperienceItem[]
  contact: {
    eyebrow: string
    title: {
      before: string
      emphasis: string
    }
    copy: string
    ctaLabel: string
    email: string | null
    whatsapp: string | null
    linkedin: string | null
    tiktok: string | null
  }
  seo: {
    title: string
    description: string
    siteUrl: string
  }
  images: SiteImages
}
