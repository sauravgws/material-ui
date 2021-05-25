// import * as React from 'react';
// import {useState,useEffect} from 'react';
// import { DataGrid } from '@material-ui/data-grid';



// export default function DataTable() {

//     const [data, setData] = useState(null)
//     const fetchURL = "https://jsonplaceholder.typicode.com"
    
//     const getData = () =>
//     fetch(`${fetchURL}/users`)
//     .then((res) => res.json())

//     useEffect(() => {
//         getData().then((data) => setData(data))
//     }, [])

//     const columns = 
//         [
//             { field: 'id', headerName: 'ID', width: 70 },
//             { field: 'fullName', headerName: 'Name', width: 230 },
//             { field: 'userName', headerName: 'Username', width: 130 },
//             { field: 'email', headerName: 'Email', width: 230 },
//             { field: 'website', headerName: 'Website', width: 130 },
//             { field: 'company', headerName: 'Company Name', width: 130 },
//         ];

//     const rows = data.map((item)=> {
//         return{
//             id: item.id,
//             fullName: item.name,
//             userName: item.username,
//             email: item.email,
//             website: item.website,
//             company: item.company,
//         } 
// });
        

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} 
//       columns={columns} 
//       pageSize={5} 
//       checkboxSelection />
//     </div>
//   );
// }

