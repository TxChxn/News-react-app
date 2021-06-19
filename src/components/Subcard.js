import React from "react";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import {
  MDBCard,
  MDBCardBody,
  MDBCardSubTitle,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBCard style={{ width: "auto" }}>
      <MDBCardBody>
        <MDBCardTitle className="text-success">Premier Ligue</MDBCardTitle>
        <MDBCardSubTitle className="text-muted small">Finished</MDBCardSubTitle>
        <MDBListGroup flush>
          <MDBListGroupItem>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Chelsea" src="/image/chelsea.png"></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Chelsea" />
                <ListItemSecondaryAction>
                  <IconButton edge="end">2</IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="leicester city"
                    src="/image/leicester city.png"
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText primary="leicester city" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" >0</IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </MDBListGroupItem>
          <MDBCardSubTitle className="text-muted small">
            8 Otc 8:30{" "}
          </MDBCardSubTitle>
          <MDBListGroupItem>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Chelsea" src="/image/chelsea.png"></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Chelsea"/>
                <ListItemSecondaryAction>
                  <IconButton edge="end">-</IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="leicester city"
                    src="/image/leicester city.png"
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText primary="leicester city" />
                <ListItemSecondaryAction>
                  <IconButton edge="end">-</IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
}
