import React, { useState } from "react";

// apollot / client
import { gql, useLazyQuery, useQuery } from "@apollo/client";

// GraphQL - pholder
import { GET_User } from "../GraphQl/querie";

const UserOnClick = () => {
  const [id, setId] = useState("");
  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_User, {
    variables: { id: id },
  });
  console.log({ loading, data, error, called });
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
      <input
        value={id}
        onChange={changeValueOfInput}
        placeholder="Inter your id ..."
      />
      <button type="submit" style={{ marginTop: 20 }} onClick={() => getUser()}>
        Get User
      </button>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Somthing error ‼</h1>}
      {data && called && (
        <>
          {" "}
          <h1>{data.user.name}</h1>
          <p>{data.user.phone}</p>
          <p>{data.user.email}</p>
        </>
      )}
    </div>
  );
};

export default UserOnClick;
