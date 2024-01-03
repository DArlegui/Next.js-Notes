import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 justify-center p-5 text-black font-semibold space-x-3">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Login</Link>
    </div>
  );
};

export default NavBar;
