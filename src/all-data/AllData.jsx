import React, { useEffect, useState } from 'react'
import Single from './Single'

const AllData = () => {
  const [allUser, setAllUser] = useState([])
  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res=> res.json())
    .then(data => setAllUser(data))
  },[])
  return (
    <div>
    <h1>Data:{allUser.length}</h1>
    {
      allUser.map(data=> (
        <Single 
        key={data.id}
        data = {data}
        ></Single>
      ))
    }
    </div>
  )
}

export default AllData