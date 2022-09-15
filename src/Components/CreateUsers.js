import React, { useState } from "react";

// apollo / client
import { useMutation } from "@apollo/client";

//css
import "../App.css";

// GraphQl - pholder
import { CREATE_USER } from "../GraphQl/mutation";

const CreateUsers = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createuser, { loading, data, error, called }] = useMutation(
    CREATE_USER,
    {
      variables: {
        name: name,
        username: username,
        email: email,
        phone: phone,
      },
    }
  );
  console.log({ loading, data, error, called });
  return (
    <div className="cointainer">
      <input
        type="text"
        value={name}
        placeholder="Enter name ..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={username}
        placeholder="Enter username ..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Enter your email ..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="Enter your phone ..."
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={createuser}>CREATE_USER</button>

      {data && (
        <>
          <p>🔺 name: ➡{data.createUser.name}</p>
          <p>🔺 username: ➡ {data.createUser.username}</p>
          <p>🔺 email: ➡ {data.createUser.email}</p>
          <p>🔺 phone: ➡ {data.createUser.phone}</p>
          <h1 style={{ color: "green" }}>CREATED ✔</h1>
        </>
      )}
    </div>
  );
};

export default CreateUsers;
