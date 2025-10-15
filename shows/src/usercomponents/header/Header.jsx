import React, { createContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setValue } from '../Redux/Search'

function Header() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [result ,setResult ] = useState([])
    const navigate = useNavigate()
    const handleSearch = (start)=>{
        console.log(start)
        if(start === "") return 
       fetch(`https://api.tvmaze.com/search/shows?q={${start}}`)
       .then((res)=> res.json())
       .then((data)=>{
        console.log(data)
        dispatch(setValue(data))
        navigate("/searchresult")
       }).catch((err)=> console.log(err.meassge))
    }
     
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-12  d-flex justify-content-between align-items-center">
            <h1>ShowsZone</h1>
            <div className="search  p-2 d-flex justify-item-center align-items-center">
              <input type="text" name="" value={search} onChange={(event)=> setSearch(event.target.value)} placeholder='search...' className="form-control" id="" />
              <button onClick={()=> handleSearch(search)} className='btn btn-primary'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#fffdfdff"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </button>
            </div>
            <ul className="nav gap-5">
              <li className="nav-items">
                <NavLink className={({isActive})=> isActive? "text-success text-decoration-none" : "text-white text-decoration-none"} to={"/"}>
                  Home
                </NavLink>
              </li>
              
              <li className="nav-items">
                <NavLink className={({isActive})=> isActive? "text-success text-decoration-none" : "text-white text-decoration-none"} to={"/fav"}>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header