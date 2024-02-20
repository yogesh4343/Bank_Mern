import { Typography } from '@material-ui/core'
import React from 'react'

const KeyValue = ({name , value}) => {
  return (
    <div>
       {/* <div className="firstName flex justify-around "> <div className="name">{name}</div> <div className="value">{value} </div> </div> */}
       <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {value}
                </Typography>
              </td>


              {/* <KeyValue name="Last Name" value={part1.lastName} /> */}
             
            </tr>
    </div>
  )
}

export default KeyValue
