import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import InputSearch from "./navbar/inputSearch";
import { ListPets } from "../components/List";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Avatar style={{ backgroundColor: "#0f6dc4" }}>
            <PersonIcon />
          </Avatar>
          <Typography style={{ marginLeft: 10 }}>{user.email}</Typography>
          <InputSearch />
          <div style={{ position: "absolute", marginLeft: 1500 }}>
            <Button
              onClick={handleLogOut}
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              LogOut
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 80, marginLeft: 400 }}>
        <ListPets />
      </div>
    </div>
  );
};

export default Home;
