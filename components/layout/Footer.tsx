import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <a className="wordmark" href="#inicio" aria-label={`${profile.name}, início`}>
        TOBIAS <span>DE LIMA</span>
        <i>.</i>
      </a>
      <p>
        Fisiologia Esportiva · {profile.tagline}
      </p>
      <a href="#inicio" className="back-top">
        VOLTAR AO TOPO ↑
      </a>
      <span className="copyright">
        © {year} {profile.name}
      </span>
    </footer>
  )
}
