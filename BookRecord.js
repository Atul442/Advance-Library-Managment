import React ,{useState}from 'react'

export default function BookRecord() {
    
  return (
    <div>
       <h1 htmlFor="bookmanagment" className="block text-xl  text-center font-medium leading-6 text-gray-900">
        BOOK MANAGMENT SYSYEM
      </h1>
      <div className="relative mt-2 rounded-md w-full ">
          <label htmlFor="operation" className="sr-only">
            Operation
          </label>
          <select
            id="operation"
            name="operation"
            className="h-full w-60  rounded-md border-0 bg-transparent py-2 pl-10 pr-7  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl"
          >
            <option value="add">ADD BOOK</option>
            <option value="search">SEARCH BOOK</option>
            <option value="borrow">BORROW BOOK</option>
            <option value="remove">REMOVE BOOK</option>
          </select>
          <button  className="h-full w-60 float-right rounded-md border-2  border-slate-300 hover:border-green-400 py-2 pl-10 pr-7 text-gray-500 focus:ring-2  sm:text-3xl" > DONE!!</button>
      </div>
      
      












    </div>
  )
}
