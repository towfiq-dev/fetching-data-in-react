import React, { useEffect, useState } from 'react'
import SingleData from './SingleData'
const DataFetching = () => {
  const [allData, setAllData] = useState([])
  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res=> res.json())
    .then(data => setAllData(data))
  },[])
  return (
    <div>
      <h1>Data:{allData.length}</h1>
      {
  allData.map(data => (
    <SingleData 
      key={data.id} 
      data={data}
    ></SingleData>
  ))
}
    </div>
  )
}

export default DataFetching