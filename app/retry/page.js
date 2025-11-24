import React from 'react'

const page = () => {
  
  async function retry(fn, retries = 3, delay=500){
    try {
      return await fn;
    } catch (error) {
      if(retries <= 0) throw error;
      await new Promise(r => setTimeout(r, delay
        )) //waiting
      return retry(fn, retries-1, delay * retries);
    }
  }

  return (
    <div>page</div>
  )
}

export default page