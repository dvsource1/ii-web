import { Leaf, Settings, Snowflake } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const SidePanel = () => {
  return (
    <div className="w-1/4 bg-blue-800 rounded-r-xl bg-[url('/side-panel-bg.png')] bg-cover bg-no-repeat bg-bottom p-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="font-medium text-3xl">Ishini Teacher</div>
        <Link href={'settings'}>
          <Settings className="w-8 h-8 m-2 bg-cyan-100 rounded-full p-1.5 text-gray-500 hover:text-green-400 hover:cursor-pointer hover:shadow-sm" />
        </Link>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Image
          className="rounded-full"
          alt="avatar"
          src={'/avatar.jpg'}
          width={160}
          height={160}
        />
      </div>
      <div className="mt-8">
        <div className="rounded-xl bg-white shadow-md p-2">
          <div className="grid grid-cols-2 gap-4 h-20">
            <div className="flex text-pink-500 items-center gap-4 p-2 ">
              <Leaf className="w-8 h-8 " />
              <div className="flex flex-col">
                <div className="text-lg font-semibold">Large</div>
                <div className="">small-text</div>
              </div>
            </div>
            <div className="flex text-green-500 items-center gap-4 p-2 ">
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
