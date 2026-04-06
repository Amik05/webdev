import "./App.css";
import { Main, Header, Footer } from "./components";

function App() {
  const title = "Randos on the web";
  const tech = ["React", "Vite", "TS"];
  return (
    <>
      <Header title={title} />
      <Main />
      <Footer tech={tech} />
    </>
  );
}

export default App;
