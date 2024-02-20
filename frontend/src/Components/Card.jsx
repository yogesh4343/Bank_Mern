import React from 'react'


const Card = ({name , cont , icon}) => {
  return (
    <div>
            <div className="main bg-[#44178B] w-80 gap-4 text-center rounded-xl p-7  hover:bg-black text-white hover:-translate-y-1 hover:scale-80  duration-300     ">
                    <div className="logo "> {icon} </div>
                    <div className="head  text-white font-extrabold my-6"> {name} </div>
                    <div className="para text-gray-300"> {cont} </div>
            </div>
    </div>
  )
}

export default Card
