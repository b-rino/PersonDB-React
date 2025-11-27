import { useEffect, useState } from "react";

function PersonForm({ blankPerson, personToEdit, mutatePerson }) {
  const [person, setPerson] = useState({ ...personToEdit });

  useEffect(() => {
    setPerson(personToEdit);
  }, [personToEdit]);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.id;
    setPerson({ ...person, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault(); //for at stoppe event bubbling, da enhver button har submit-funktion som default!
    console.log("submit", person);
    mutatePerson(person);
    //callback funktion fra App.jsx, som enten indsætter eller opdaterer en person (alt efter om id er tomt eller ej)
  }

  return (
    <div>
      <h1>Add/Edit Person</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input
          name="id"
          id="id"
          type="text"
          readOnly
          placeholder="id"
          value={person.id}
        />
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="name"
          value={person.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          name="age"
          id="age"
          type="number"
          min="1"
          max="120"
          placeholder="age"
          value={person.age}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="email"
          value={person.email}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={person.gender}
          onChange={handleChange}
        >
          <option defaultChecked>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button>Update</button>
        <button type="button" onClick={() => setPerson(blankPerson)}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default PersonForm;
