import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFav } from '../Redux/Fav'
import '../search.css'
function searchResult() {
   
    const searchResult = useSelector((state)=> state.search.searchValue)
    console.log("Fetch======>",searchResult)
    const dispatch = useDispatch()
    
  return (
    <div>
      <div className="container p-5 ">
        <div className="row">
          <h2>Search Result!</h2>
          {searchResult && searchResult.length > 0 ? (
            searchResult.map((show) => (
              <div className="col-12 col-lg-3 p-4 ">
                <article
                  id="arc"
                  className="bg-danger overflow-hidden text-white"
                  style={{ height: "400px", width: "300px" }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={show.show.image.medium}
                    alt=""
                  />
                  <div id="show" className='p-3'>
                    <h4>{show.show.name}</h4>
                    {show.show.genres && show.show.genres.length > 0 ? (
                      show.show.genres.map((gen, index) => (
                        <div key={index} className="d-flex flex-row ">
                          <span>{gen}</span>
                        </div>
                      ))
                    ) : (
                      <p></p>
                    )}
                    <button className='btn bg-warning text-white' onClick={() => dispatch(setFav(show.show.id))}>
                      add to favorites
                    </button>
                  </div>
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