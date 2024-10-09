// "use client";

// import React from "react";
// import Link from "next/link";

// function users({ params }) {
//   console.log(params);
//   return (
//     <div>
//       <h1>User Details</h1>
//       <h3> {params.users}</h3>
//     </div>
//   );
// }

// export default users;

// import getUsers from "../../services/getuserdetail";

// export default async function Page(props) {
//   const getUserList = getUsers();
//   const users = await getUserList;

//   const currentId = props.params.userId;
//   console.log(users[currentId - 1]);

//   return (
//     <div>
//       <h3>User detail Page</h3>
//     </div>
//   );
// }

import getUsers from "../../services/getuserdetail";

export default async function Page(props) {
  const getUserList = await getUsers();
  const users = getUserList;

  const currentId = props.params.userId;
  const userData = users[currentId - 1];

  console.log(users[currentId - 1]);

  return (
    <div>
      <h3>User detail Page</h3>
      <h4>Id: {userData.id}</h4>
      <h4>Name: {userData.name}</h4>
      <h4>Website: {userData.website}</h4>
    </div>
  );
}

export async function generateStaticParams() {
  const getUserList = getUsers();
  const users = await getUserList;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
