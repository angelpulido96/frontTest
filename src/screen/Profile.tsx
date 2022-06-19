import { Button, Card, Paper } from '@mui/material';
import { Fragment, useEffect } from 'react';
import {Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  
  const { ciudadano, getCiudadanoId } = useAuth();

  const { id } = useParams()

  useEffect(() => {
    getCiudadanoId(id)
  }, [])
  

  return (
    <>
    <div
      style={{
        marginLeft: 690,
        marginTop: 50
      }}
    >
      <Link to='/Home' style={{textDecoration: 'none'}}>
        <Button
          variant='outlined'
        >Return</Button>
      </Link>
    </div>
    <Paper 
      elevation={5}
      style={{
        width: 260,
        height: 290,
        marginLeft: 600,
        marginTop: 50
      }}
    >
      <Card
        elevation={10}
        style={{
          position: 'absolute',
          width: 190,
          height: 230,
          marginLeft: 40,
          marginTop: 25
        }}
      > 
      <div
        style={{
          position: 'absolute',
          marginLeft: 25,
          marginTop: 10
        }}
      >
        <img src={ciudadano && ciudadano.avatar}/>
        <div
          style={{
            marginLeft: 35
          }}
        >
          {ciudadano && ciudadano.name}
          <br/>
          {ciudadano && ciudadano.age} años
          <br/>
          <div style={{
            marginLeft: -35
          }}>
            <text>Todo tipo de mascotas</text>
          </div>
        </div>
      </div>
      </Card>
    </Paper>
    </>
  );
};

export default Profile;
