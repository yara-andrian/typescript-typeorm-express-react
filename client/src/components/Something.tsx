import * as React from "react";
import { useState } from "react";
import { personStore } from "../reducers/person";

const EditPerson: React.FC = () => {
  const firstName = personStore((state) => state.firstName);
  const lastName = personStore((state) => state.lastName);
  const setFirstName = personStore((state) => state.setFirstName);
  const setLastName = personStore((state) => state.setLastName);
  return (
    <div>
      <div>
        First Name:
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        Last Name:
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
    </div>
  );
};

const ShowPerson: React.FC = () => {
  const [onlyFirstName, setOnlyFirstName] = useState(false);
  const firstName = personStore((state) => state.firstName);
  const lastName = personStore((state) =>
    onlyFirstName ? null : state.lastName
  );
  return (
    <div>
      <button type="button" onClick={() => setOnlyFirstName((s) => !s)}>
        {onlyFirstName ? "Showing only first name" : "Showing full name"}
      </button>
      {onlyFirstName ? (
        <div>First Name: {firstName}</div>
      ) : (
        <div>
          Full Name: {firstName} {lastName}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <EditPerson />
      <ShowPerson />
    </>
  );
};

export default App;
