// import React from "react";
// import {Grid,Paper,Avatar,TextField} from "@mui/material"
// import LockIcon from '@mui/icons-material/Lock';

// const Login =()=>{
// const paperStyle = {paddimg:20,height:'70vh',width:280,margin:"20px auto"}
// const avatarStyle ={backgroundColor:"red"}
//     return (
//         <>
//         <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align="center">
//                 <Avatar style={avatarStyle}><LockIcon/></Avatar>
//                 <h2>Sign In</h2>
//                 </Grid>
//                 <TextField label="username" placeholder="enter username"/>
//             </Paper>
//         </Grid>

//         </>
//     )
// }
// export default Login



import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/Lock';
import {FormControlLabel,Checkbox} from '@mui/material';
// import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login


