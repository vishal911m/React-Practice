"use client"
import React, { useState } from 'react'

const Page = () => {
  const [load, setLoad] = useState(false);

  const renderList = ()=>{
    return new Array(10000).fill(0).map((_,i)=>(
      <h3
        key={i}
        style={{
          margin:0,
          padding:12,
          background: i % 2 === 0 ? "#66aaff" : "#001e80",
          color: 'white'
        }}
        className='list'
      >
        Block{i}
      </h3>
    ))
  }
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Windowing Example</h1>
      {/* <div className='App'
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
          margin: "0 auto",
          overflow: "auto",
        }}
      >{load && renderList()}</div> */}
      <div 
        className='App'
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
          margin: "0 auto",
          overflow: "auto",
        }}
      >{renderList()}</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button style={{textAlign: 'center'}} onClick={()=>setLoad(true)}>
          Load List
        </button>
      </div>
    </>
  )
}

export default Page