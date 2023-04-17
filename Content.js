import React from 'react';
import pic2 from './pic2.jpg';
import { BuildingLibraryIcon, HandRaisedIcon, FingerPrintIcon } from '@heroicons/react/20/solid'

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">WHY CHOOSE THIS??</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">HOW THIS LIBRARY DIFFERS?</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              The processes of book indexing, cataloging, book reservations and overdue notifications are automated. The software system makes the process simpler and more accountable.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={pic2}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              branch of information management system that keeps the records of both the library users, books in the library and the activities that is going on in the library, activities like borrowing books and returning books.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BuildingLibraryIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Seats Managment: </strong> 
                    Student can reserve their seats in advance. This Library keeps checks that every student can get seat.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HandRaisedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Nuisance Complaint: </strong> 
                    If some students are violating rules of library then student can directly complain to
                    librarian anonymously.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FingerPrintIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Check-IN Check-OUT: </strong> 
                    This features keeps the check-in and check-out of students. This features also helps 
                    in maintaing seats for other students.
                  </span>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

