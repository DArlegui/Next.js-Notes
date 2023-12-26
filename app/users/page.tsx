import UserTable from './UserTable';

interface Props {
  searchParams: { sortOrder: string };
}

const page = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};
export default page;
