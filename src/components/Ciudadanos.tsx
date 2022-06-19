import React, { useReducer, Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Rating, ratingClasses } from "@mui/material";

import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const ListPets = () => {

  const {ciudadanos, setCiudadanos, search } = useAuth()
 
  
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {ciudadanos.filter((item:any) => item.name.toUpperCase().indexOf(search.toUpperCase()) === 0).map((item: any, index: number) => (
          <Fragment>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={item.avatar} />
              </ListItemAvatar>
              <Link to={`/Profile/${item.id}`} style={{ textDecoration: 'none'}}>
              <ListItemText
                primary={`${item.name}-${item.age}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.street}
                    </Typography>
                  </React.Fragment>
                }
              />
              </Link>
              <div
                style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}
              >
                <Typography component="legend" style={{ marginLeft: 35 }}>
                  Rating
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={item.rating}
                  onChange={(event, newValue) => {
                    setCiudadanos([...ciudadanos.map((element: any,i: number) => {
                        if(i === index) {
                          element.rating = newValue 
                        } 
                        return element
                    })]);
                  }}
                />
              </div>
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
          ))}
      </List>
    </div>
  );
};
