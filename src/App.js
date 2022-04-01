import logo from "./logo.svg";
import "./App.css";
import { Example2 } from "./examples/example-2-state/Example2";
import { AppRoutes } from "./routes/Routes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <AppRoutes />
    </Container>
  );
}

export default App;
