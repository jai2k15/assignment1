import React from 'react'
import CardItem from './CardItem'
import data from '../data/data.json';
const Cards = ({currentPostPage, searchText}) => {
  
  return (
    <>
      <div className="h-full w-full flex flex-wrap items-center justify-center ">
        { !searchText &&
          currentPostPage.map((value, index)=>{
            return <CardItem key={index} value={value}/>
          })
        }
        {
          searchText &&
          data.map((value, index)=>{
            return <CardItem key={index} value={value} searchText={searchText}/>
          })
        }
        
      </div>
    </>
  )
}

export default Cards