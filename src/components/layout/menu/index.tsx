import type { NextPage } from 'next'
import Link from 'next/link'

export const Menu: NextPage = () => {
  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">Minhas vendas</p>
      <ul className="menu-list">
        <MenuItem href="#" label="Home" />
        <MenuItem href="#" label="Cadastro" />
        <MenuItem href="#" label="Configurações" />
        <MenuItem href="#" label="Sair" />
      </ul>
    </aside>
  )
}

interface MenuItemProps {
  href: string
  label: string
}

const MenuItem: NextPage<MenuItemProps> = ({ href, label }: MenuItemProps) => {
  return (
    <li>
      <Link href={href}>
        <a>
          <span className="icon"></span> {label}
        </a>
      </Link>
    </li>
  )
}
