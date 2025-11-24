"use client"
import React, { useState } from 'react'
import { FixedSizeList } from 'react-window';

const page = () => {
  const [load, setLoad] = useState(false);

  const Row = ({index, style})=>(
    <h1
      key={index}
      style={{
        ...style,
        padding: 10,
        background: index %2 === 0 ? "#66aaff" : "#001e80",
        color: "white"
      }}
    >
      Block {index}
    </h1>
  )

  const renderList = ()=>{
    return (
      <FixedSizeList
        width={500}
        height={500}
        itemCount={10000}
        itemSize={50}
      >
        {Row}
      </FixedSizeList>
    )
  }
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Windowing Example</h1>
      <div
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
          margin: "auto",
          overflow: "auto"
        }}
      >{load && renderList()}</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={()=> setLoad(true)}>Load List</button>
      </div>
    </>
  )
}

export default page