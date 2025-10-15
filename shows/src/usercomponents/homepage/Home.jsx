import React, { useEffect, useState } from 'react'

function Home() {
    const [shows, setShows ] = useState("")
    useEffect(()=>{
        fetch("https://api.tvmaze.com/show")
        .then((res)=> res.json())
        .then((data)=>{
            console.log("---------------------------------------->",data)
            setShows(data)
        }).catch(err=> console.log(err.message))
    },[])
  return (
    <div>
      <div className="container p-5 ">
        <div className="row">
          {shows && shows.length > 0 ? (
            shows.map((show, index) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
                <article className='p-4' style={{height:"400px",width:"300px"}} key={index}>
                  <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={show.image.medium} alt="" />
                  <h5 className="text-white">{show.name}</h5>
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

export default Home