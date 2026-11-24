'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#inicio"
        aria-label={`${profile.name}, início`}
      >
        TOBIAS <span>DE LIMA</span>
        <i>.</i>
      </a>

      <nav
        className={menuOpen ? 'nav-links nav-open' : 'nav-links'}
        aria-label="Navegação principal"
        id="primary-navigation"
      >
        {profile.navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contato">
        Solicitar avaliação <ArrowUpRight size={15} aria-hidden="true" />
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  )
}
