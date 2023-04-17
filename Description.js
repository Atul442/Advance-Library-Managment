import React from 'react'
import { BuildingLibraryIcon } from '@heroicons/react/20/solid'
import pic4 from './pic4.jpg';
const stats = [
    { id: 1, name: 'Seats Available', value: '2.2K+' },
    { id: 2, name: 'Books Available', value: '15K+' },
    { id: 3, name: 'Users ', value: '100K+' },
    {id:4,name:'No.of opening hours',value:'15+'},
    {id:5,name:'Book Issue Period',value:'30 days'},
    {id:6,name:'No. of Librarians',value:'15+'}
  ]
export default function Description() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <BuildingLibraryIcon className="mx-auto h-12" /> 
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
            ALMS offers dynamic management of cartridges, cartridge storage slots, tape drives, and logical libraries. It enables the tape library to achieve unprecedented levels of integration for functionality through dynamic partitioning, storage slot pooling, and flexible drive assignment. 
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src={pic4}
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900"> ADVANCE LIBRARY</div>
            </div>

            {/* stat part */}

            <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

          </figcaption>
        </figure>
      </div>
    </section>

    </div>
  )
}
