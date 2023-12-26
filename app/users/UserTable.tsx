import { sort } from 'fast-sort'; //npm i fast-sort
import Link from 'next/link';

//API for catching users
//https://jsonplaceholder.typicode.com/users
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

export default async function UserTable({ sortOrder }: Props) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(sortOrder === 'email' ? (user) => user.email : (user) => user.name);

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className="table table-bordered max-w-7xl">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {sortedUsers.map((user) => (
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
