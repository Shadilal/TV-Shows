import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFav } from '../Redux/Fav'

function searchResult() {
   
    const searchResult = useSelector((state)=> state.search.searchValue)
    console.log("Fetch",searchResult)
    const dispatch = useDispatch()
    
  return (
    <div>
      <div className="container">
        <div className="row">
          {searchResult && searchResult.length > 0 ? (
            searchResult.map((show) => (
              <div className="col-12 ">
                <article>
                  <img src={show.show.image.medium} alt="" />
                  <h4>{show.show.name}</h4>
                  {show.show.genres && show.show.genres.length > 0 ? (
                    show.show.genres.map((gen) => 
                    <p>{gen}</p>)
                  ) : (
                    <p></p>
                  )}
                  <p>{show.show.summary.slice(0,100)}</p>
                  <button onClick={()=> dispatch(setFav(show.show.id))}>addto favorites</button>
                </article>
              </div>
            ))
          ) : (
            <article></article>
          )}
        </div>
      </div>
    </div>
  );
}

export default searchResult