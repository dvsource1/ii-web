'use client'

import { Leaf, Settings, Snowflake } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from 'ii/lib/utils'
import { KeyboardEventHandler, useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'

type SidePanelProps = {
  className?: string
}

const SidePanel: React.FC<SidePanelProps> = ({ className }) => {
  const [username, setUsername] = useState('...')
  const { isLoaded, isSignedIn, user } = useUser()

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      setUsername(user.username ?? 'Guest2')
    } else {
      if (isLoaded) {
        setUsername(localStorage.getItem('username') ?? 'Guest3')
      }
    }
  }, [isLoaded, isSignedIn, user])

  const handleTitleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setUsername(e.currentTarget.textContent ?? '')
      localStorage.setItem('username', e.currentTarget.textContent ?? '')
    }
  }

  return (
    <div
      className={cn(
        "bg-[url('/side-panel-bg.png')] bg-cover bg-no-repeat bg-bottom p-4 flex flex-col",
        className
      )}>
      <div className="flex justify-between items-center">
        <div
          className="font-normal text-xl md:text-3xl"
          onKeyDown={handleTitleKeyDown}
          contentEditable
          suppressContentEditableWarning>
          {username}
        </div>
        <Link href={'settings'}>
          <Settings className="w-8 h-8 m-2 bg-cyan-100 rounded-full p-1.5 text-gray-500 hover:text-green-400 hover:cursor-pointer hover:shadow-sm  hover:rotate-[360deg] hover:scale-110 transition-all duration-500" />
        </Link>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="p-2 bg-white rounded-full">
          <Image
            className="rounded-full"
            alt="avatar"
            src={'/avatar.jpg'}
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="rounded-xl bg-white shadow-md py-2 px-4">
          <div className="grid grid-cols-2 gap-4 h-20">
            <div className="flex text-pink-500 items-center gap-4 p-2 transition-all hover:scale-105">
              <Leaf className="w-8 h-8 " />
              <div className="flex flex-col">
                <div className="text-lg font-semibold">Large</div>
                <div className="">small-text</div>
              </div>
            </div>
            <div className="flex text-green-500 items-center gap-4 p-2 transition-all hover:scale-105">
              <Snowflake className="w-8 h-8 " />
              <div className="flex flex-col">
                <div className="text-lg font-semibold">Large</div>
                <div className="">small-text</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidePanel
