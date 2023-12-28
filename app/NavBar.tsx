import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 justify-center p-5 text-black font-semibold">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
