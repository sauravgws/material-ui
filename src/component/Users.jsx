import * as React from 'react';
import {useState,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';



export default function Users() {

    const [data, setData] = useState([])
    const fetchURL = "https://jsonplaceholder.typicode.com"
    
    const getData = () =>
    fetch(`${fetchURL}/users`)
    .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])

    const columns = 
        [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'fullName', headerName: 'Name', width: 230 },
            { field: 'userName', headerName: 'Username', width: 130 },
            { field: 'email', headerName: 'Email', width: 230 },
            { field: 'website', headerName: 'Website', width: 130 },
            { field: 'company', headerName: 'Company Name', width: 230 },
        ];

    const rows = data.map((item)=> {
        return{
            id: item.id,
            fullName: item.name,
            userName: item.username,
            email: item.email,
            website: item.website,
            company: item.company.name,
        } 
});
        

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} 
      columns={columns} 
      pageSize={8} 
      checkboxSelection />
    </div>
  );
}










// import React,{useState,useEffect} from 'react';

// function Users(){

//     const [data, setData] = useState(null)
//     const fetchURL = "https://jsonplaceholder.typicode.com"
    
//     const getData = () =>
//     fetch(`${fetchURL}/users`)
//     .then((res) => res.json())

//     useEffect(() => {
//         getData().then((data) => setData(data))
//     }, [])

//   return (
//     <div>
//         <table>
//             <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Website</th>
//                 <th>Company Name</th>
//             </tr>

//                 {data?.map((item) => 
//             <tr>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.username}</td>
//                 <td>{item.email}</td>
//                 <td>{item.website}</td>
//                 <td>{item.company.name}</td>
//             </tr>
//         )}
//             </table>
//     </div>
//   )
   
// }
// export default Users;
