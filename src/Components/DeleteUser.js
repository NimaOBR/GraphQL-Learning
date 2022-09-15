import React, { useState } from "react";

// graphQl - pholder
import { DELETE_USER } from "../GraphQl/mutation";

// apollo / client
import { useMutation } from "@apollo/client";

// css
import "../App.css";

const DeleteUser = () => {
  const [id, setId] = useState();
  const [deleteuser, { loading, data, error, called }] = useMutation(
    DELETE_USER,
    { variables: { id: id } }
  );
  console.log({ loading, data, error, called });

  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
      <input
        className="inputDeleted"
        value={id}
        type="text"
        onChange={(e) => setId(e.target.value)}
      />
      <button className="buttonDeleted" onClick={deleteuser}>
        DELETE
      </button>
      {data && (
        <>
          <h1 style={{ color: "green", margin: "30px auto" }}>DELETED ✔</h1>
        </>
      )}
    </div>
  );
};

export default DeleteUser;
