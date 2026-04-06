import "./App.css";

const title = "Randos on the web";
const tech = ["React", "Vite", "TS"];

interface Person {
  id: number;
  name: string;
  age: number;
}

const peopleList: Person[] = [
  { id: 1, name: "Amr", age: 55 },
  { id: 2, name: "bmr", age: 2 },
  { id: 3, name: "cmr", age: 5 },
];

function Header({ title }: { title: string }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

function Footer({ tech }: { tech: string[] }) {
  return (
    <>
      <div>
        |
        {tech.map((tech, index) => (
          <span key={index}> {tech} |</span>
        ))}
      </div>

      <p>Current Year {new Date().getFullYear()}</p>
    </>
  );
}

function PersonCard({ person }: { person: Person }) {
  return (
    <>
      Name: {person.name} <br />
      Age: {person.age}
      <hr />
    </>
  );
}

function Main({ peopleList }: { peopleList: Person[] }) {
  return (
    <>
      <p>Some dude from the gas station</p>
      <hr />
      <div className="names">
        {peopleList.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header title={title} />
      <Main peopleList={peopleList} />
      <Footer tech={tech} />
    </>
  );
}

export default App;
