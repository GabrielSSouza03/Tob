import type { ContactChannel, Profile } from '@/types/profile'


export const profile: Profile = {
  name: 'Tobias de Lima',
  shortName: 'Tobias',
  role: 'Fisiologista Esportivo',
  location: 'São Paulo, Brasil',
  tagline: 'Sport Science & Performance',
  heroTitle: {
    before: 'Ciência aplicada à ',
    emphasis: 'performance',
    after: ' esportiva.',
  },
  heroDescription:
    'Fisiologia, biomecânica e avaliação física conectadas ao desenvolvimento da performance humana.',
  about: {
    lead:
      'Acredito que a ciência ganha valor quando encontra o campo, a quadra e as pessoas que se movem.',
    paragraphs: [
      'Sou graduado em Educação Física pela Universidade de São Paulo (USP), especialista em Medicina Esportiva e Fisiologia do Exercício, e mestrando em Fisioterapia pela Universidade Cidade de São Paulo (UNICID).',
      'Minha trajetória combina experiência em academias, preparação física e atuação na fisiologia esportiva, com vivência em instituições de destaque no esporte brasileiro. Meu interesse está no esporte de alto rendimento e em aproximar o conhecimento científico do desenvolvimento esportivo.',
    ],
  },
  focusNote: 'Da evidência científica\nà prática esportiva.',
  navigation: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Contato', href: '#contato' },
  ],
  specialties: [
    {
      number: '01',
      title: 'Fisiologia do exercício',
      text: 'Compreensão das respostas e adaptações do organismo ao exercício físico.',
    },
    {
      number: '02',
      title: 'Biomecânica',
      text: 'Análise do movimento humano e das relações entre corpo, força e gesto esportivo.',
    },
    {
      number: '03',
      title: 'Cinesiologia',
      text: 'Estudo do movimento e dos princípios que orientam a ação muscular e articular.',
    },
    {
      number: '04',
      title: 'Treinamento de força',
      text: 'Planejamento de exercícios considerando objetivos, contexto e características individuais.',
    },
  ],
  education: [
    {
      year: '2026 — 2027',
      school: 'Universidade Cidade de São Paulo · UNICID',
      course: 'Mestrado em Fisioterapia',
    },
    {
      year: '2026 — 2027',
      school: 'Onway Education',
      course: 'MBA em Biomecânica',
    },
    {
      year: '2025 — 2026',
      school: 'Faculdade UniBF',
      course: 'Especialização em Medicina Esportiva',
    },
    {
      year: '2025 — 2026',
      school: 'Faculdade UniBF',
      course: 'Especialização em Fisiologia do Exercício',
    },
    {
      year: '2021 — 2025',
      school: 'Universidade de São Paulo · USP',
      course: 'Bacharelado em Educação Física',
    },
  ],
  courses: [
    'The Science of Training Young Athletes',
    'Fundamental Sports Related Musculoskeletal Anatomy',
    'Science of Exercise',
    'Foundations of Sports Analytics: Data, Representation, and Models in Sports',
  ],
  experiences: [
    {
      number: '01',
      name: 'Sport Club Corinthians Paulista',
      role: 'Fisiologista · 07/2024 — atual',
      detail:
        'Fisiologista Auxiliar · fev/2024 — jun/2024\nAuxiliar de Preparação Física · mar/2023 — fev/2024\nEstagiário · out/2022 — fev/2023\nDepartamento de Preparação Física e Fisiologia',
      featured: true,
    },
    {
      number: '02',
      name: 'Confederação Brasileira de Basketball',
      role: 'Fisiologista · 08/2026 — atual',
      detail: 'Atuação em fisiologia esportiva.',
    },
    {
      number: '03',
      name: 'Clube Atlético Monte Líbano',
      role: 'Fisiologista · 01/2025 — atual',
      detail: 'Atuação em fisiologia esportiva.',
    },
    {
      number: '04',
      name: 'Pro Ativa Consultoria',
      role: 'CEO · 07/2023 — atual',
      detail:
        'Planejamento estratégico, elaboração de planilhas e relatórios e atividades fisioterapêuticas, conforme perfil profissional.',
    },
  ],
  contact: {
    eyebrow: 'CIÊNCIA EM MOVIMENTO. PERFORMANCE EM DESENVOLVIMENTO.',
    title: {
      before: 'Vamos trabalhar no\ndesenvolvimento da ',
      emphasis: 'performance?',
    },
    copy: 'Entre em contato para conversar sobre consultoria, avaliação e possibilidades de colaboração profissional.',
    ctaLabel: 'Solicitar consultoria ou avaliação',
    email: 'tobiaslimasouza.87@gmail.com',
    whatsapp: '55 11 97827-3354',
    linkedin: 'https://www.linkedin.com/in/tobiasdelima/',
    tiktok: 'https://www.tiktok.com/@tobiasfisiologista',
    instagram: 'https://www.instagram.com/ls_tobias',
  },
  seo: {
    title: 'Tobias de Lima | Fisiologia Esportiva e Performance',
    description:
      'Conheça a trajetória de Tobias de Lima, fisiologista esportivo com experiência no esporte de alto rendimento, fisiologia do exercício e biomecânica.',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tobiasdelima.com.br',
  },
  images: {
    hero: {
      src: '/images/tobias-hero-field.jpg',
      alt: 'Tobias de Lima em campo de treinamento do Sport Club Corinthians Paulista',
    },
    portrait: {
      src: '/images/tobias-portrait.jpg',
      alt: 'Retrato profissional de Tobias de Lima com uniforme do Clube Atlético Monte Líbano',
    },
    training: {
      src: '/images/tobias-training.jpg',
      alt: 'Tobias de Lima em sessão de preparação física com cones de treinamento',
    },
  },
}

export function getContactChannels(): ContactChannel[] {
  const { email, whatsapp, linkedin, tiktok, instagram } = profile.contact

  return [
    {
      id: 'email',
      label: 'E-mail',
      href: email ? `mailto:${email}` : null,
      hint: email ?? 'Adicionar endereço confirmado',
      configured: Boolean(email),
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: whatsapp
        ? `https://wa.me/${whatsapp.replace(/\D/g, '')}`
        : null,
      hint: whatsapp ?? 'Adicionar número confirmado',
      configured: Boolean(whatsapp),
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: linkedin,
      hint: linkedin ?? 'Adicionar perfil confirmado',
      configured: Boolean(linkedin),
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      href: tiktok,
      hint: tiktok ?? 'Adicionar perfil confirmado',
      configured: Boolean(tiktok),
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: instagram,
      hint: instagram ?? 'Adicionar perfil confirmado',
      configured: Boolean(instagram),
    },
  ]
}

export function getPrimaryMailto(): string | null {
  const email = profile.contact.email
  if (!email) return null
  return `mailto:${email}?subject=${encodeURIComponent('Consultoria ou avaliação')}`
}

export function getPrimaryCtaHref(): string | null {
  const mailto = getPrimaryMailto()
  if (mailto) return mailto

  const whatsapp = profile.contact.whatsapp
  if (!whatsapp) return null
  return `https://wa.me/${whatsapp.replace(/\D/g, '')}`
}
