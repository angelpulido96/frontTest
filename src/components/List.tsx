import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export const ListPets = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Elizabeth-25"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/men/79.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Carlos-30"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/women/73.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Sandra-21"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/women/50.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Marta-20"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/women/71.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Karen-28"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/men/7.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Fernando-29"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/men/71.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Pedro-26"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/men/77.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Luis-19"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Street
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/women/7.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Guadalupe-30"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Carlos-18"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Street
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
          <div style={{ position: "absolute", marginLeft: 310, marginTop: 15 }}>
            <Typography component="legend" style={{ marginLeft: 35 }}>
              Rating
            </Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
};
