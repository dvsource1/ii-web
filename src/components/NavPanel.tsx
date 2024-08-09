import {
  CreditCard,
  Database,
  Highlighter,
  HomeIcon,
  NotebookTabs,
  Trash,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MAIN_NAVIGATIONS = [
  {
    icon: HomeIcon,
    active: true,
    href: '/dashboard',
  },
  {
    icon: NotebookTabs,
    href: '/lessons',
  },
  {
    icon: Highlighter,
    href: '/practice',
  },
  {
    icon: Users,
    href: '/students',
  },
  {
    icon: CreditCard,
    href: '/payments',
  },
  {
    icon: Database,
    href: '/database',
  },
]

const NavPanel = () => {
  return (
    <nav className="w-16 bg-blue-200 flex flex-col justify-between rounded-lg m-2">
      <div className="h-20 flex items-center justify-center">
        <Link href={'/'}>
          <Image
            className="rounded-full bg-blue-100 hover:cursor-pointer hover:bg-blue-50"
            alt="logo"
            width={50}
            height={50}
            src="/logo.png"
          />
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ul className="flex flex-col gap-4">
          {MAIN_NAVIGATIONS.map((nav, index) => (
            <li key={index}>
              <Link href={nav.href}>
                <nav.icon
                  className={`w-12 h-8 px-2 py-1 ${
                    nav.active
                      ? 'text-blue-400 bg-white/50 rounded-lg shadow-sm'
                      : 'text-gray-500'
                  } hover:text-blue-400 hover:cursor-pointer hover:scale-110 transition-all`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-20 flex flex-col items-center justify-end">
        <Link href={'/archive'}>
          <Trash className="w-8 h-8 m-2 bg-blue-100 rounded-full p-1.5 text-gray-500 hover:text-red-400  hover:cursor-pointer hover:shadow-sm hover:rotate-[360deg] hover:scale-110 transition-all duration-500	" />
        </Link>
      </div>
    </nav>
  )
}

export default NavPanel
