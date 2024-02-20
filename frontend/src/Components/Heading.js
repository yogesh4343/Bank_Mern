import React from 'react'

const Heading = ({heading , font}) => {
  return (
    <div>
      <div className={`customer text-center text-${font} my-5 font-serif `}>{heading}
        </div>
    </div>
  )
}

export default Heading
