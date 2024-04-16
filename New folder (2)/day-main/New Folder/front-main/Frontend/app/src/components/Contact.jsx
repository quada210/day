import { Typography } from '@mui/material'
import React from 'react'
import img from './images/cont.jpg'


export const Contact = () => {
    const background={
        backgroundImage:`url(${img})`,
     backgroundSize:'cover',
     backgroundRepeat:'no-repeat',
     height:'100vh',
     fontSize:'50px',
    }

  return (
    <div style={background}>
        <br /><br />
       <Typography variant='h3' fontStyle={'bold'} color={'whitesmoke'} align='centre'>
TO US, FOOD IS <br />EVERYTHING. WE’RE <br /> PROUD TO SHARE <br /> OUR TRADITIONS <br />WITH YOU.</Typography>
    </div>
  )
}
