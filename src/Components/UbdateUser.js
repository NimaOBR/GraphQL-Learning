import React, { useState } from "react";

// apollo / client
import { useMutation } from "@apollo/client";

//css
import "../App.css";

// GraphQl - pholder
import { UBDATE_USER } from "../GraphQl/mutation";

const UbdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const [ubdateuser, { loading, data, error, called }] = useMutation(
    UBDATE_USER,
    {
      variables: {
        id: id,
        name: name,
      },
    }
  );
  console.log({ loading, data, error, called });
  return (
    <div className="cointainer">
      <input
        type="text"
        value={id}
        placeholder="Enter id ..."
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={ubdateuser}>CREATE_USER</button>

      {data && (
        <>
          <p>🔺 id: ➡ {data.updateUser.id}</p>
          <p>🔺 name: ➡{data.updateUser.name}</p>
          <h1 style={{ color: "green" }}>UBDATED ✔</h1>
        </>
      )}
    </div>
  );
};

export default UbdateUser;
