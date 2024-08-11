'use client'

import { cn } from 'ii/lib/utils'
import {
  CreditCard,
  Database,
  Highlighter,
  HomeIcon,
  LucideProps,
  NotebookTabs,
  Trash,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface NavigationItem {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  path: string
}

enum NAVIGATION_USERROLE {
  ADMIN,
  TEACHER,
  STUDENT,
}

const NAVIGATIONS: {
  // key is NAVIGATION_USER not number
  // value is array of navigation items
  [key in NAVIGATION_USERROLE]: NavigationItem[]
} = {
  [NAVIGATION_USERROLE.ADMIN]: [
    {
      icon: HomeIcon,
      path: '/',
    },
    {
      icon: Database,
      path: '/database',
    },
  ],
  [NAVIGATION_USERROLE.TEACHER]: [
    {
      icon: HomeIcon,
      path: '/',
    },
    {
      icon: NotebookTabs,
      path: '/lessons',
    },
    {
      icon: Users,
      path: '/students',
    },
  ],
  [NAVIGATION_USERROLE.STUDENT]: [
    {
      icon: HomeIcon,
      path: '/',
    },
    {
      icon: NotebookTabs,
      path: '/lessons',
    },
    {
      icon: Highlighter,
      path: '/practice',
    },
    {
      icon: CreditCard,
      path: '/payments',
    },
  ],
}

type NavPanelProps = {
  className?: string
}

const NavPanel: React.FC<NavPanelProps> = ({ className }) => {
  const pathname = usePathname()
  const userRoleNavigations = NAVIGATIONS?.[NAVIGATION_USERROLE.STUDENT] || []

  return (
    <nav
      className={cn(
        'w-16 bg-blue-200 flex flex-col justify-between rounded-lg m-2',
        className
      )}>
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
          {userRoleNavigations?.map((nav, index) => (
            <li key={index}>
              <Link href={nav.path}>
                <nav.icon
                  className={`w-12 h-8 px-2 py-1 ${
                    pathname === nav.path
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
