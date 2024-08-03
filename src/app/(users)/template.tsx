"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"

const navLinks = [
  { name: 'Profile', href: '/profile' },
  { name: 'Config', href: '/config' },
  { name: 'Info', href: '/info' }
]

export default function UsersLayout({ children }: { children: ReactNode }) {
  const [value, setValue] = useState('')
  const pathname = usePathname()

  return (
    <>
      <div>
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      </div>

      {navLinks.map((link, index) => {
        const isActive = pathname.startsWith(link.href)

        return (
          <Link
            key={index}
            className={`${isActive ? 'underline text-gray-500' : ''}`}
            href={link.href}
          >
            {link.name}
          </Link>
        )
      })}
      {children}
    </>
  )
}