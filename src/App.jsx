import "./styles/App.css";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import React, { useState, useEffect } from "react";
import { fetchData } from "./util/persistence";

const blankPerson = {
  id: "",
  age: "",
  name: "",
  email: "",
  gender: "",
};

function App() {
  const [persons, setPersons] = useState([]);
  const [personToEdit, setPersonToEdit] = useState(blankPerson);

  const APIURL = "http://localhost:3000/api";

  function editPerson(person) {
    setPersonToEdit(person);
  }

  function getPersons(callback) {
    fetchData(APIURL, callback);
  }

  function deletePersonById(id) {
    //Fjern fra API
    fetchData(`${APIURL}/${id}`, () => {}, "DELETE");
    //Fjern fra persons array
    setPersons([...persons].filter((person) => person.id != id));
  }

  useEffect(() => {
    getPersons((data) => setPersons(data));
  }, []);

  return (
    <div className="container">
      <h1>Person DB</h1>
      <PersonForm blankPerson={blankPerson} personToEdit={personToEdit} />
      <PersonList
        persons={persons}
        deletePersonById={deletePersonById}
        editPerson={editPerson}
      />
    </div>
  );
}

export default App;
