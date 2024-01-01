import React from 'react';
import './SearchBar.css';
import SearchList from './SearchList.jsx';
import { FaSearch } from 'react-icons/fa';
import { BsMicFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SearchBar() {
  const [ searchQuery, setsearchQuery] = useState("");
  const [searchListaA, setsearchList] = useState(false);
  const TitleArray = useSelector(s=>s.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m?.videoTitle)
  // const TitleArray = ["video1","Video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()))
  return (
    <>
      <div className='SearchBar_Container'>
        <div className='SearchBar_Container2'>
          <div className='search_div'>
            <input type="text" className='iBox_SearchBar' placeholder='Search' value={searchQuery} onChange={e=>setsearchQuery(e.target.value)} onClick={e=>setsearchList(true)}/>
            <Link to={`search/${searchQuery}`}>
            <FaSearch className="searchIcon_SearchBar" onClick={e=>setsearchList(false)}/>
            </Link>

            <BsMicFill className="Mic_SearchBar" size={22}/>
            {
              searchQuery&& searchListaA&&
              <SearchList 
              TitleArray={TitleArray}
              setsearchQuery={setsearchQuery}
              />
            } 
          </div>
          
        </div>

      </div>
    </>
  )
}

export default SearchBar