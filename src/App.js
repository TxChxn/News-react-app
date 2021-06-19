import "./App.css";
import Header from "./components/Header";
import SectionCard from "./components/SectionCard";
import Container from "@material-ui/core/Container";
import Content from "./components/Content";



function App() {
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
    <>
      <Container maxWidth="lg" className="py-5">
        <Header title="THE IRISH ITIMES" sections={sections} />
      </Container>
      <SectionCard />
      <Content />
    </>
  );
}

export default App;
