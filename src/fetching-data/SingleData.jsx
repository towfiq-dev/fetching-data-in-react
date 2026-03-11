import React from 'react'

const SingleData = ({data}) => {
  const {name, phone, website} = data
  
  return (
    <div style={{border: '1px solid gray', margin: '10px', padding: '10px'}}>
      <h1>{name}</h1>
      <p>{website}</p>
      <p>{phone}</p>
    </div>
  )
}

export default SingleData