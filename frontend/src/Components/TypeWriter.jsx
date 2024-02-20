import React from 'react'
import {useTypewriter , Cursor, Typewriter} from "react-simple-typewriter"

const TypeWriter = () => {
    // console.log(lang)
    const changeLanguage = []
    

  return (
    <div>
           <Typewriter
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={12}
              delaySpeed={1600}
            //   words={['All American' , 'All Stars' , "All That" , "Awesomeness All Light" ,"All Raise" ,  "All Satins" , "All Access" ,  'All Outs' , "All That - Nickelodeon "]}
            //   words={["Movies", "TV Shows" , "Sports"  , "Browse New Movies " , "Series" , "Animations"]}
              words={["Banking System Application ", "Money Transfering"]}
 />
     </div>
  )
}

export default TypeWriter
