import type { Person } from "../../models/PersonType";
import useFetchRandomUser from "../../hooks/useFetchRandomPerson";
import { useState } from "react";
import PersonCard from "./PersonCard/PersonCard";

function Main() {
  const [numPeople, setNumPeople] = useState(0);
  const { peopleList, loading, setPeopleList } = useFetchRandomUser(numPeople);

  const togglefav = (id: number) => {
    setPeopleList((prev) =>
      prev.map((person) =>
        person.id === id ? { ...person, fav: !person.fav } : person,
      ),
    );
  };

  const loadingPerson: Person = {
    id: -1,
    name: "Loading",
    age: -1,
    fav: false,
  };

  return (
    <>
      <p>Some dude from the gas station</p>
      <hr />
      <div className="names">
        {peopleList.slice(0, numPeople).map((person) => (
          <PersonCard key={person.id} person={person} togglefav={togglefav} />
        ))}
        {loading && (
          <PersonCard key={-1} person={loadingPerson} togglefav={togglefav} />
        )}
        <p>{numPeople}</p>
      </div>
      <button onClick={() => setNumPeople((prev) => prev + 1)}>
        {" "}
        Add a Rando
      </button>
    </>
  );
}

export default Main;
