import React, { useState } from 'react'
import img from './images/sign.jpg'
import { Card, CardContent, Grid, Table, TableContainer, TableRow, Typography,TextField, Button, Paper, TableCell,InputAdornment } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

export const Sign = () => {
  const [email,setEmail]= useState()
  const  [password,setPassword]=useState()
  const navigate=useNavigate()

  const addHandler = (e)=>{

    e.preventDefault()
    console.log(email)
    
    
    axios.post("http://localhost:4040/login",{email,password})
    .then((result)=>{
      console.log(result.data)
      { alert(result.data)}
      if(result.data === "success"){
        navigate('/user')
      }
    })
    .catch((err)=>console.log(err))
   }
      

 
    const background={
        backgroundImage:`url(${img})`,
     backgroundSize:'cover',
     backgroundRepeat:'no-repeat',
     height:'100vh',
     fontSize:'50px',
    }
  
  return (
    <div style={background}>
              <Typography variant='h1' color={'#181616'}>Sign-in</Typography><br /><br />
              <Grid
               container
 
               justifyContent="center"
               alignItems="center"
             >
                <Card>
                    <CardContent>
                        <TableContainer component={Paper} >
                            <Table sx={{minWidth:1}}  aria-label="simple table" >
                               <TableRow>
                               <TableCell>Email:</TableCell>
       <TableCell> <TextField label="Email" variant="filled" name='email' type='email' onChange={(e)=> setEmail(e.target.value)} color="success" focused InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
       }}
       /></TableCell>
                               </TableRow>
                               <TableRow>
        <TableCell>Password:</TableCell>
       <TableCell> <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          color='success' focused
          autoComplete="current-password"
          variant="standard"
          name='password'
          onChange={(e)=> setPassword(e.target.value)}
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
              <LockIcon/>
              </InputAdornment>
            
    
           ),
           }}
        /> </TableCell>
        </TableRow>
        
        <TableRow>
          <TableCell><Button variant="text"><Link to={'/log'}>Registration ?</Link></Button></TableCell>
          

       <TableCell> <Button variant="contained"  onClick={addHandler} color='success'>Submit</Button></TableCell>
        </TableRow>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>

                </Grid>
    </div>

  )}
