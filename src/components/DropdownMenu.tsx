import React from 'react'
import { FaChevronDown } from "react-icons/fa";
const DropdownMenu = () => {
  return (
    <div className='w-1/2'>
    <form className=" w-[80%]">
    <fieldset>
    <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
      <label className="sr-only">My field</label>
      <select className="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever">
          <option value="" className='w-[40%]'>Please choose&hellip;</option>
        <option value="1">Item 1</option>
        <option value="2">Item 2</option>
        <option value="3">Item 3</option>
      </select>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
          <FaChevronDown/>
      </div>
  </div>
      </fieldset>
  </form>
  </div>
  )
}

export default DropdownMenu
