import React from 'react'

function SecondSection() {
  return (
    <div>
         <div className="bg-white py-12">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-blue-900 sm:text-2xl font-[Poppins]">Take advantage of our services on board</p>
      {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p> */}
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
        <div className="relative bg-indigo-50 p-16 rounded-2xl">
          <dt>
            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-indigo-200 to-indigo-400 hover:to-indigo-300 text-white">
              <img className="h-6 w-6" src='./wifi.png' alt=''/>
            </div>
            <a href='/' className="ml-16 text-lg font-semibold leading-6 text-blue-900 uppercase">wifi</a>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
        </div>

        <div className="relative bg-indigo-50 p-16 rounded-2xl">
          <dt>
            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-indigo-200 to-indigo-400 hover:to-indigo-300 text-white">
              {/* <!-- Heroicon name: outline/scale --> */}
                  <img className="h-6 w-6" src='./devertissement.png' alt=''  />
            </div>
            <a href='/' className="ml-16 text-lg font-semibold leading-6 text-blue-900 uppercase">divertissement</a>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
        </div>

        <div className="relative bg-indigo-50 p-16 rounded-2xl">
          <dt>
            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-indigo-200 to-indigo-400 hover:to-indigo-300 text-white">
              {/* <!-- Heroicon name: outline/bolt --> */}
                 <img className="h-6 w-6" src='./wifi.png' alt=''  />
            </div>
            <a href='/' className="ml-16 text-lg font-semibold leading-6 text-blue-900">Wifi</a>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
        </div>

        <div className="relative bg-indigo-50 p-16 rounded-2xl">
          <dt>
            <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-indigo-200 to-indigo-400 hover:to-indigo-300 text-white">
              {/* <!-- Heroicon name: outline/chat-bubble-bottom-center-text --> */}
              <img className="h-6 w-6" src='./confort.png' alt=''  />
            </div>
            <a href='/' className="ml-16 text-lg font-semibold leading-6 text-violet-900 uppercase">confort</a>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
</div>
  
  )
}

export default SecondSection
