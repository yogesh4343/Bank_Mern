import { Card, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import KeyValue from "./KeyValue";
 
const TABLE_HEAD1 = ["USER DETAILS", "VALUE"];
const TABLE_HEAD2 = ["ACCOUNT DETAILS", "VALUE"];
 
 
export function Table1(props) {
    const { part1 , part2} = useSelector((state) => state.UserDetailSlice);

    const {val} = {...props};
    // console.log("part  ", val);
  return (
    <Card className="h-full   overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD1.map((head) => (
              <th key={head} className="border-b border-blue-gray-500 bg-blue-gray-50 p-4 ">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className=" leading-none opacity-70 font-extrabold text-xl  "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            <tr key="name" className="even:bg-blue-gray-50/50 ">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue  name="First Name " />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value={val.firstName}  />
              </td>
            </tr>

         

            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue name="Last Name"   />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value={val.lastName}/>
              </td>
            </tr>

            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue  name="Address"  />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value={val.Address}        />
              </td>
            </tr>

            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue  name="Gender"   />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value= {val.gender} />
              </td>
            </tr>
             
            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue name="Phone"   />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value={val.Phone} />
              </td>
            </tr>
             
            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue  name="DOB"  />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue  value={val.DOB} />
              </td>
            </tr>
             

          {/* ))} */}
        </tbody>
      </table>
    </Card>
  );
}





 
export function Table2(props) {
    const { part1 , part2} = useSelector((state) => state.UserDetailSlice);

    const {val} = {...props};
    // console.log("part2  ", val);
  return (
    <Card className="h-full   overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD2.map((head) => (
              <th key={head} className="border-b border-blue-gray-500 bg-blue-gray-50 p-4 "       >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className=" leading-none opacity-70 font-extrabold text-xl"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>

        <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1">
                <KeyValue name="UserName"   />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value={val.userName}/>
              </td>
            </tr>


            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue  name="Accounters Email " />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value={val.email}  />
              </td>
            </tr>

            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue   name="Account Type " />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value={val.accountType}  />
              </td>
            </tr>

          

            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue  name="Amount"  />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value={val.amount}        />
              </td>
            </tr>

            <tr key="name" className="even:bg-blue-gray-50/50">
              <td className="p-1 text-xl font-serif text-blue-600  ">
                <KeyValue  name="Employment"   />
              </td>
              <td className="p-1 font-serif ">
                <KeyValue value= {val.employment} />
              </td>
            </tr>
             
           
             

          {/* ))} */}
        </tbody>
      </table>
    </Card>
  );
}