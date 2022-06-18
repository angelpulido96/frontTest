import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import "./Styles.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import CheckBox from "@mui/material/Checkbox";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState<string>()

  const handleChange = ({target: {name, value}}: any) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    try{
      await signup(user.email, user.password)
      navigate('/')
    }catch(error:any){
      if(error.code === 'auth/invalid-email'){
        setError('Correo invalido')
      } 
      if(error.code === 'auth/weak-password'){
        setError('contraseña tiene menos de 6 caracteres')
      } 
      if(error.code === 'auth/email-already-in-use'){
        setError('correo en uso')
      } 
    }
  }

  return (
    <Grid>
      <Paper elevation={20} className="paperSign">
        <Grid className="topSign">
          <Avatar style={{ margin: "auto", backgroundColor: "#2e81db" }}>
            <AddCircleIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}>Sign Up</h2>
          <Typography>Fill this form to create an account</Typography>
        </Grid>
        {error && <Typography >{error}</Typography>}
        <form
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Names"
            variant="standard"
            placeholder="Enter your Name"
          />
          <TextField
            fullWidth
            label="LastName"
            variant="standard"
            placeholder="Enter your Lastname"
          />
          <TextField
            fullWidth
            label="Address"
            variant="standard"
            placeholder="Enter your Address"
          />
          <TextField
            onChange={handleChange}
            name='email'
            fullWidth
            label="Email"
            variant="standard"
            placeholder="Enter your Email"
            type="email"
            required
          />
          <FormControl style={{ marginTop: 5 }}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              aria-labelledby="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            variant="standard"
            placeholder="Enter yor Phone Number"
            type="number"
          />
          <TextField
            onChange={handleChange}
            name='password'
            fullWidth
            label="Password"
            variant="standard"
            placeholder="Enter your Password"
            type="password"
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            variant="standard"
            placeholder="Enter your Password"
            type="password"
            required
          />
          <FormControlLabel
            control={<CheckBox name="checkedA" required />}
            label="I acept the terms and conditions"
          />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              Register
            </Button>
        </form>
      </Paper>
    </Grid>
  );
};
