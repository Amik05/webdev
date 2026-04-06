import type { Person } from "../../../models/PersonType";

function PersonCard({
  person,
  togglefav,
}: {
  person: Person;
  togglefav: (id: number) => void;
}) {
  return (
    <>
      Name: {person.name} <br />
      Age: {person.age} <br />
      <img src={person.profilePic} alt="profile pic" /> <br />
      <span className="fav-btn" onClick={() => togglefav(person.id)}>
        {person.fav ? "❤️" : "🩶"} <br />
      </span>
      <hr />
    </>
  );
}

export default PersonCard;
