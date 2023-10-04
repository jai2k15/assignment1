import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import Cards from './Cards'
import Pagination from './Pagination';
import currentItems from '../data/data.json';

const Home = () => {
  const [postPerPage, setPostPerPage ] = useState(6);
  const [currentPage, setCurrentPage ] = useState(1);
  const lastPostIndex = currentPage*postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPostPage = currentItems.slice(firstPostIndex, lastPostIndex);
  const [searchText, setSearchText] = useState();
  let { page } = useParams(); 
  const navigate = useNavigate();
  // console.log(window.location())
  useEffect(()=>{
    if('/'){
        navigate(`/page/${currentPage}`)
    }
    page = currentPage;
    console.log(page)
  }, [currentPage])
  return (
    <>
      <div className="h-full w-full bg-blue-50 py-4 px-4 space-y-1 shadow-inner">
        <Navbar setSearchText={setSearchText}/>
        <Cards searchText={searchText} currentPostPage={currentPostPage}/>
        <Pagination setSearchText={setSearchText} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
    </>
  )
}

export default Home