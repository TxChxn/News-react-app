import React from "react";
import Container from "@material-ui/core/Container";
import Submenu from "./Submenu";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

function Menu() {
  const sections = [
    { title: "News", url: "#" },
    { title: "Sport", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
  ];
  return (
    <Container >
      <MDBRow>
        <MDBCol md="8" className="col-example">
          <Submenu sections={sections} />
        </MDBCol>
        <MDBCol md="4" className="col-example"></MDBCol>
      </MDBRow>
    </Container>
  );
}

export default Menu;
