import React from 'react';

//API for catching users
//https://jsonplaceholder.typicode.com/users
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function UserTable() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered max-w-7xl">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody className="">
          {users.map((user) => (
            <tr key={user.id}>
              <th className="text-left">{user.name}</th>
              <th className="text-left">{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
