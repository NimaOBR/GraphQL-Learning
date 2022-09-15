import React from "react";

// @apollo/client
import { gql, useQuery } from "@apollo/client";

// GraphQl - pholder
import { Get_Users } from "../GraphQl/querie";

const Users = () => {
  const { loading, data, error } = useQuery(Get_Users);
  console.log(data, error);
  if (error) return <h1>Somthing wrong ... !!</h1>;
  if (loading)
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        Loading ...
      </h1>
    );
  return (
    <div>
      {data.users.data.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: "#ddd",
            margin: 10,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
