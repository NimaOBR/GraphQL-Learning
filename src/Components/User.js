import React, { useState } from "react";

// apollot / client
import { gql, useQuery } from "@apollo/client";

// GraphQL - pholder
import { GET_User } from "../GraphQl/querie";

const User = () => {
  const [id, setId] = useState("1");
  const { loading, data, error } = useQuery(GET_User, {
    variables: { id: id },
  });
  console.log({ loading, data, error });
  const changeValueOfInput = (e) => {
    setId(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 20,
      }}
    >
      <input onChange={changeValueOfInput} placeholder="Inter your id ..." />
      {data ? (
        <>
          {" "}
          <h1>{data.user.name}</h1>
          <p>{data.user.phone}</p>
          <p>{data.user.email}</p>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default User;
