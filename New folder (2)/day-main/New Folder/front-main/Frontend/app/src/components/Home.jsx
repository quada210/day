
import {  Typography } from '@mui/material'
import React from 'react'
import img from './images/rest.jpg'


export const Home = () => {
    const backgroundImageStyle={
        backgroundImage:`url(${img})`,
     backgroundSize:'cover',
     backgroundRepeat:'no-repeat',
     height:'100vh',
     fontSize:'50px',
    }
  return (
    <div style={backgroundImageStyle}>
        <br />
        <Typography variant='h6' color={'whitesmoke'} align='centre'>"A restaurant is a fantasy—a kind of living fantasy in which diners are the most important members of the cast." </Typography>
        <Typography variant='h6' color={'whitesmoke'}>-Warner LeRoy</Typography>
        <br />
        <Typography variant='h4' color={'whitesmoke'} align='centre'>RESTAURANT HOURS</Typography><br />
        <Typography variant='h6' color={'whitesmoke'} align='centre'> Dine-in: <br /> <br />Sun - Wed 11:30am - 9:00pm <br /><br />
        Thurs 11:30am - 9:30pm <br /><br />Fri - Sat  11:30 AM - 10:00 <br />_____
        </Typography>
<br />        <Typography variant='h5' fontStyle={'bold'} color={'whitesmoke'}>Pala,Kottayam</Typography>
        <br />
        <Typography variant='h6' color={'whitesmoke'} align='centre'> Mercato is unlike any other restaurant in the city. We prepare each dish from <br />scratch with ingredients fresh from our Market, boast an Italian-only wine list, <br />  and immerse guests in our traditions with our open-concept kitchen. Chat with <br />the chef, raise a glass with other diners—when you eat at Mercato, you’re family.</Typography>
        <br />
        
      

        
  </div>
        
        

  )
}
