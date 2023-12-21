//API for catching users
//https://jsonplaceholder.typicode.com/users
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
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
};
export default page;
