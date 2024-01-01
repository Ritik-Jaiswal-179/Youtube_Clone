import React from 'react'
import "./SearchList.css"
import { FaSearch } from 'react-icons/fa';

function SearchList({TitleArray,setsearchQuery}){
  return(
    <>
      <div className="Container_Searchlist">
        {
        TitleArray.map(m =>{
          return <p 
          key = {m}
          onClick={e=>setsearchQuery(m)}
          className="titleItem">
          <FaSearch /> &nbsp;
          {m}
        </p>
        })
        }
        {/* <p className="titleItem">
          <FaSearch /> 
          item1
        </p>
        <p className="titleItem">
          <FaSearch />
          item2
        </p> */}
      </div>
    </>
  )
}

export default SearchList