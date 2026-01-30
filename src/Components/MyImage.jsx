import React from 'react'

const MyImage = ({imgs}) => {
    console.log(`http://localhost:9000/images/${imgs}`)
  return (
    <div>
      <img src={`http://localhost:9000/images/${imgs}`} className='img-fluid'/>
      {/* <img src={`http://localhost:9000/images/${imgs[1]}`} className='img-fluid'/> */}
    </div>
  )
}

export default MyImage
