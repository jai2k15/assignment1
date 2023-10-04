import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/Ai';
const Pagination = ({ setSearchText, currentPage, setCurrentPage }) => {
  const handleNext = (e)=>{
    e.preventDefault();

    setSearchText('');
    if(currentPage===10){
      
    }else{
      setCurrentPage(currentPage+1)
    }
  }
  const handlePrevious = (e)=>{
    e.preventDefault();
    setSearchText('');

    if(currentPage===1){

    }else{
      setCurrentPage(currentPage-1)
    }
  }
  const handlePage = (e)=>{
    e.preventDefault();
    setSearchText('');
    setCurrentPage(parseInt(e.target.value))
  }
  
  return (
    <>
      <div className="w-full h-16 flex justify-between items-center  rounded-3xl shadow-2xl p-2 px-14 bg-blue-50 ">
        <div className='text-xl'>{currentPage} from 10</div>
        <div className='flex items-center space-x-3'>
          <button onClick={handlePrevious} className="w-7 flex items-center justify-center rounded-lg h-8 shadow-2xl shadow-white bg-white  "><AiOutlineArrowLeft className='text-2xl' /></button>
          <button onClick={handlePage} value={currentPage} className="w-7 flex items-center justify-center   text-xl bg-white shadow-2xl">{currentPage}</button>
          <button onClick={handlePage} value={currentPage+1} className={`w-7 ${currentPage===10?'hidden':'flex'} items-center justify-center shadow-2xl text-xl bg-white `}>{currentPage+1}</button>
          <button className={`w-7 ${currentPage===10?'hidden':'flex'} items-center justify-center shadow-2xl text-xl bg-white`}>...</button>
          <button onClick={handleNext} className="w-7 flex items-center justify-center shadow-2xl text-xl bg-white"><AiOutlineArrowRight className='text-2xl' /></button>
        </div>
      </div>
    </>
  )
}

export default Pagination;