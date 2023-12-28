import Link from 'next/link';
import UserTable from './UserTable';

interface Props {
  searchParams: { sortOrder: string };
}

const page = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};
export default page;
