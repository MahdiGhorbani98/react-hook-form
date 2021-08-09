import { Button, MenuItem,InputLabel, FormControl, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {useForm ,Controller} from 'react-hook-form'
import { makeStyles, ThemeProvider,createTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';

import '../css/App.css'
function App() {

  const {register , control , handleSubmit , formState:{errors}} = useForm();
  const onSubmit = data => alert(JSON.stringify(data))
  const useStyle = makeStyles((theme)=> ({

    form :{

      margin: "30px 10px",
      display : 'flex',
      flexDirection: 'column',
      alignItems:'center'
    },
    textField:{
      marginBottom : 15,
      width : "90%" ,
      maxWidth : "400px"
    },
    btn:{
      marginBottom : 15,
      width : "90%" ,
      maxWidth : "400px",
      padding:"15px 0"
    },
    formControl: {
      marginBottom : 20,
      width : "90%" ,
      maxWidth : "400px"
    },
    error:{
      display:"flex",
      marginBottom :25
    }
  }))
  const theme =(
    createTheme({
      palette: {
        type:  'dark' ,
        background: {
          default: "#0e172c"
        }
      },
    })
  )
  
  const classes = useStyle();
  
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        
        <TextField color="secondary"  className={classes.textField} variant="outlined" label="First Name" 
        {...register ("firstName" , {required : "This field is required" , pattern:{value:/^[A-Za-z]+$/i , message :"Alphabetical characters only"} })}
        />
        {errors.firstName && <div className={classes.error}><ErrorOutlineOutlinedIcon color="secondary"/> <Typography color="secondary">{errors.firstName.message}</Typography></div>}

        <TextField color="secondary" className={classes.textField} variant="outlined" label="Last Name" 
        {...register ("lastName" ,{required :"This field is required" ,  maxLength:{value:15 , message :"You exceeded the max length"} })} />
        {errors.lastName && <div className={classes.error}><ErrorOutlineOutlinedIcon color="secondary"/> <Typography color="secondary">{errors.lastName.message}</Typography></div>}

        <Controller
 
            name={"position"}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel color="secondary"  htmlFor="pos">Your Position</InputLabel>
              <Select {...register ("position" ,{required :"This field is required"})} color="secondary" variant ="outlined" label="Your Position" {...field}>
                {["Frontend_Dev" , "Backend_Dev","FullStack_Dev"].map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
              </Select>
              </FormControl>
            )}
        />

        {errors.position && <div className={classes.error}><ErrorOutlineOutlinedIcon color="secondary"/> <Typography color="secondary">{errors.position.message}</Typography></div>}

        <TextField color="secondary" className={classes.textField} variant="outlined" label="Age" 
        {...register ("age" ,{required :"This field is required" ,min:{value:15 ,message :"You must be between 15 and 99 years old"} , max:{value:99 , message :"You must be between 15 and 99 years old"} })} />
        {errors.age && <div className={classes.error}><ErrorOutlineOutlinedIcon color="secondary"/> <Typography color="secondary">{errors.age.message}</Typography></div>}

        <TextField color="secondary" className={classes.textField} variant="outlined" label="Phone Number" 
        {...register ("phoneNumber",{pattern:{value:/^09\d{9}$/ , message : "Your phone number is not valid"}}  )} />
        {errors.phoneNumber && <div className={classes.error}><ErrorOutlineOutlinedIcon color="secondary"/> <Typography color="secondary">{errors.phoneNumber.message}</Typography></div>}








        
        <Button className={classes.btn}  variant="contained" color="secondary" type="submit">Submit</Button>
      </form>
    </ThemeProvider>
  );
}

export default App;
