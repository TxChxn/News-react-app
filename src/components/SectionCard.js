import React from "react";
import Container from "@material-ui/core/Container";
import Subcard from './Subcard'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Submenu from "./Submenu";



export default function App() {
    const sections = [
        { title: "All", url: "#" },
        { title: "Rugby World Cup", url: "#" },
        { title: "Business", url: "#" },
        { title: "Soccer", url: "#" },
        { title: "Rugby", url: "#" },
        { title: "Golf", url: "#" },
        { title: "Racing", url: "#" },
        { title: "Woman in sport", url: "#" },
      ];

  return (
    <Container className="pt-3">
        
      <MDBRow>
        <MDBCol md="8" className="col-example">
        <Submenu sections={sections} />
          <MDBCard style={{ maxWidth: "auto" }}>
            <MDBRow className="g-0">
              <MDBCol md="4">
            
                <MDBCardImage pt-1
                  src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="col-example">
          <Subcard />
        </MDBCol>
      </MDBRow>
    </Container>
  );
}
