import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main"

function App() {
  return (
    <Grid
      templateAreas={`"nav" "main" "footer"`}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main">
        <Main></Main>
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
