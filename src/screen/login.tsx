import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import "./Styles.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>();

  const handleChange = ({ target: { name, value } }: any) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/Home");
    } catch (error: any) {
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
      if (error.code === "auth/weak-password") {
        setError("contraseña tiene menos de 6 caracteres");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("correo en uso");
      }
      if (error.code === "auth/user-not-found") {
        setError("usuario no existe");
      }
      if (error.code === "auth/wrong-password") {
        setError("constraseña incorrecta");
      }
    }
  };

  return (
    <Grid>
      <Paper elevation={20} className="paperSign">
        <Grid className="topSign">
          <Avatar style={{ margin: "auto", backgroundColor: "#2e81db" }}>
            <AddCircleIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}>LogIn</h2>
        </Grid>
        {error && (
          <Typography color="red" fontSize={20} marginLeft={12}>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            name="email"
            fullWidth
            label="Email"
            variant="standard"
            placeholder="Enter your Email"
            type="email"
            required
          />

          <TextField
            onChange={handleChange}
            name="password"
            fullWidth
            label="Password"
            variant="standard"
            placeholder="Enter your Password"
            type="password"
            required
          />
          <br />
          <br />
          <Button
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            Login
          </Button>
          <Typography
            style={{
              marginLeft: 100,
            }}
          >
            {" "}
            Do you have an account ?
          </Typography>
          <Link
            to="/SignUp"
            style={{
              textDecoration: "none",
              marginLeft: 135,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </form>
      </Paper>
    </Grid>
  );
};
