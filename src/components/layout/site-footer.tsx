import { mainNav, siteConfig, whatsappLink } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { CopyrightYear } from "@/components/layout/copyright-year"
import { Logo } from "@/components/layout/logo"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container grid gap-8 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{siteConfig.description}</p>
        </div>

        <div>
          <p className="mb-3 font-semibold">Menu</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {mainNav.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`} className="hover:text-foreground">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold">Kontak</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.social.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                dimasbp.my.id
              </a>
            </li>
            <li>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <p className="container py-6 text-center text-xs text-muted-foreground">
        © <CopyrightYear /> {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  )
}
