import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Fav() {
    const fav = useSelector((state) => state.favorites);
    const [resultArr,setArr] = useState()
    const [result , setResult ] =  useState("")
    const removeItem = (id)=>{
        console.log("ItemId",id,result)
        setResult(result.filter((_, b) => b !== id));
    }
    useEffect(()=>{
        fetch("https://api.tvmaze.com/shows")
            .then((res) => res.json())
            .then((data) => {
               



                 let resultArr = [];
                 const setValue = (favId) => {
                   const FilterResult = data.filter((a) => a.id === favId);
                   resultArr.push(...FilterResult);
                   
                 };
                 console.log("Result", resultArr);
                 setResult(resultArr)
              for (let i = 0; i < fav.length; i++) {
                let Id = fav[i];
               
                setValue(Id);
                
                
               
              }
            
             
              
            })
            .catch((err) => console.log(err.message));
           
    },[])
    
  return (
    <div>
      <div className="container  p-5">
        <div className="row">
            <h1>My Favorites</h1>
          {result && result.length > 0 ? (
            result.map((fav, index) => (
              <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                <article id='article' className='p-4 overflow-hidden'
                  style={{ height: "400px", width: "300px" }}
                  key={index}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={fav.image.medium}
                    alt=""
                  />
                  <h5>{fav.name}</h5>
                  <div id='show' className="box">
                    <button onClick={()=>removeItem(index)} className='btn btn-danger'>Remove From favorites</button>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="col-12">
              <h2 className='text-danger p-5'>
                "No favourite shows yet. Use the search bar to find and add
                some!"
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Fav