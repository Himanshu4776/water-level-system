import "./styles.css";
import { Container } from "./Container";

export default function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", gap: "30px" }}>
        <Container id="1" />
        <Container id="2" />
        <Container id="3" />
        <Container id="4" />
      </div>
    </div>
  );
}
