import { AppBar, Button, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <AppBar position='static' style={{backgroundColor:'black'}} >
            <Toolbar ><img 
                    src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/169/2019/06/19094722/Mercato-Logo-Color-02-340x340.png"
                    
                    width="100" height="100"
                /> 
              
                <Typography variant='h4' color='Success'>MERCATO</Typography>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                <Button variant="text"><Link to={'/home'} style={{color :'white'}}>Home </Link> </Button>
                <Button variant="text"><Link to={'/dash'} style={{color :'white'}}>Dashboard </Link> </Button>
                <Button variant="outlined" style={{marginLeft:"auto"}}><Link to={'/sign'} style={{color :'white'}}>Sign_in</Link></Button>
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                <Button variant="outlined" ><Link to={'/log'} style={{color :'white'}}>Registration</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;
               

            </Toolbar>
        </AppBar>
    </div>
  )
}
