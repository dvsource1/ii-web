import Image from 'next/image'

const Home = () => {
  return (
    <main className="relative min-h-screen p-4">
      <div className="absolute flex top-0 left-0 h-screen w-screen -z-10">
        <div className="flex-1"></div>
        <div className="w-[calc(25vw+0.5rem)] bg-[#5CCBFF]"></div>
      </div>
      <div className="flex bottom rounded-lg shadow-xl h-[calc(100vh-2rem)] bg-white">
        <div className="flex-1 flex">
          <div className="w-16 bg-blue-100 flex flex-col justify-between">
            <div className="h-20 flex items-center justify-center">LOGO</div>
            <div className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col gap-4">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
            <div className="h-20">SETTINGS</div>
          </div>
          <div className="flex-1"></div>
        </div>
        <Image
          className="w-1/4 bg-blue-800 rounded-r-lg"
          alt="side-panel-gb"
          width={400}
          height={800}
          src="/side-panel-bg.png"
        />
      </div>
    </main>
  )
}

export default Home
