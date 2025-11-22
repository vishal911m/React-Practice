"use client"
import React, { useState } from 'react'
import { FixedSizeList  } from "react-window";

const Page = () => {
  const [load, setLoad] = useState(false);

  const Row = ({index, style})=>(
    <h3
        key={index}
        style={{
          ...style,
          margin:0,
          padding:12,
          background: index % 2 === 0 ? "#66aaff" : "#001e80",
          color: 'white'
        }}
        className='list'
      >
        Block{index}
      </h3>
  )

  const renderList = ()=>{
    return (
    <FixedSizeList 
      height={500}
      itemCount={10000}
      itemSize={50}
      width={500}
    >
      {Row}
    </FixedSizeList >
  );
  }
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Windowing Example</h1>
      <div className='App'
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
          margin: "0 auto",
          overflow: "auto",
        }}
      >{load && renderList()}</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button style={{textAlign: 'center'}} onClick={()=>setLoad(true)}>
          Load List
        </button>
      </div>
    </>
  )
}

export default Page