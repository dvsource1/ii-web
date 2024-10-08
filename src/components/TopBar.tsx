import { cn } from 'ii/lib/utils'
import { SearchIcon } from 'lucide-react'

type TopBarProps = {
  className?: string
}

const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <div className={cn('w-full flex justify-between', className)}>
      <div className="flex w-1/3 rounded-full bg-orange-200 p-2 relative items-center">
        <SearchIcon className="text-gray-500 w-4 aspect-auto absolute left-4" />
        <input
          className="w-full bg-transparent text-gray-600 placeholder:text-gray-500 outline-none pl-8 pr-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <ul className="flex items-center gap-3 bg-orange-200 text-orange-200 font-medium rounded-full">
        <li className="text-gray-600 border border-orage-700 rounded-full p-2">
          Upcomming
        </li>
        <li className=" text-gray-600 border-1 border-white rounded-full p-2">
          Active
        </li>
        <li className="text-gray-600 border-1 border-white rounded-full p-2">
          Past
        </li>
      </ul>
    </div>
  )
}

export default TopBar
