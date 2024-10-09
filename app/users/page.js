"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import getUsers from "../services/getuserdetail";

export default function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      const userList = await getUsers();
      // const userList = await getUsers();
      setUsers(userList);
    };

    getUserList();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users?.map((user) => (
        <h2>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
}
