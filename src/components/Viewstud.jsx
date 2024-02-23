import React,{ useState,useEffect} from 'react'
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import AddStudent from './Addstudent';

// function Viewstud() {
    const Viewstud = () =>{
        var[edit,setEdit]=useState(false);
        var[selected,setSelected]=useState({});
        var[data,setData]= useState([]);
        useEffect(()=>{
            axios.get("http://localhost:4000/student")
       .then((response)=>{
            console.log(response)
            setData(response.data);
        })
        .catch((error)=>console.log(error));
    },[]);
    const deleteStudent = (id)=>{
        axios
        .delete("http://localhost:4000/student/" +id)
        .then(()=>{
            alert("deleted a row");
            window.location.reload();
        });
    };
    const editStudent=(id)=>{
        axios
        .delete("http://localhost:4000/student/" +id)
        .then((response)=>{
            setSelected(response.data);
            setEdit(true);
        })
        .catch(()=>{
            alert("cannot edit now");
        });
    };
  return (
    <div>
        {edit ? (
            <AddStudent method="put"
            data={{
                id:selected._id,name:selected.student_name,
                age:selected.student_age,dept:selected.student_dept}}/>):(
            
       
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Names</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Age</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Dept</TableCell>
                   
             
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.student_name}</TableCell>
                            <TableCell>{value.student_age}</TableCell>
                            <TableCell>{value.student_dept}</TableCell>
                            <TableCell> 
                                <Button variant='contained' onClick={()=>{editStudent(value._id)}}>
                                    edit
                                </Button>
                                </TableCell>
                            <TableCell> 
                                <Button variant='contained' onClick={()=>{deleteStudent(value._id)}}>
                                    delete
                                </Button>
                        </TableCell>
                        </TableRow> 

                    )
                })}
            </TableBody>
        </Table>

    </TableContainer>
                )}
</div>
  )
}

export default Viewstud