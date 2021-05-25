import * as React from 'react';
import {useState,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';



export default function Posts() {

    const [data, setData] = useState([]);
    const fetchURL = "https://jsonplaceholder.typicode.com";
    
    const getData = () =>
    fetch(`${fetchURL}/posts`)
    .then((res) => res.json());

    useEffect(() => {
        getData().then((data) => setData(data))
    }, []);

    const columns = 
        [
            { field: 'userId', headerName: 'User ID', width: 70 },
            { field: 'id', headerName: 'Id', width: 230 },
            { field: 'title', headerName: 'Title', width: 130 },
            { field: 'body', headerName: 'Body', width: 430 },
        ];

    const rows = data.map((item)=> {
        return{
            userId: item.userId,
            id: item.id,
            title: item.title,
            body: item.body,
        } 
});
        

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} 
      columns={columns} 
      pageSize={10} 
      checkboxSelection />
    </div>
  );
}




// import React,{useState,useEffect} from 'react';

// export default function Posts(){

//     const [data, setData] = useState(null);
//     const fetchURL = "https://jsonplaceholder.typicode.com";

    
//     const getData = () =>
//     fetch(`${fetchURL}/posts`)
//     .then((res) => res.json())

//     useEffect(() => {
//         getData().then((data) => setData(data))
//     }, [])

//   return (
//     <div>
//         <table>
//             <tr>
//                 <th>Username</th>
//                 <th>Post Id</th>
//                 <th>Title</th>
//                 <th>Body</th>
//             </tr>

//                 {data?.map((item) => 
//             <tr>
//                 <td>{item.userId}</td>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.body}</td>
//             </tr>
//         )}
//             </table>
//     </div>
//   )

// }