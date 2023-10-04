import React from 'react'
import { AiOutlineSearch } from 'react-icons/Ai';
const Navbar = ({setSearchText}) => {
  const onChange = (e)=>{
    setSearchText((e.target.value))
  }
  return (
    <>
      <div className="w-full h-16 flex bg-white rounded-3xl shadow-md p-2 px-14">
        <form action="" className=' flex space-x-16'>
          <div className="flex items-center border-1 rounded-2xl p-1">
            <input onChange={onChange} className='outline-none w-96 text-lg' type="text" name="" id="" placeholder='search...' />
            <AiOutlineSearch className='text-3xl' />
          </div>

          <select name="" id="" required>
            <option value="">Relevance</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <select name="" id="" required>
            <option value="">All brands</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </form>
      </div>
    </>
  )
}

export default Navbar