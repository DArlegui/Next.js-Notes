'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 justify-center p-5 text-black font-semibold space-x-3">
      <Link href="/">Next.js</Link>
      <Link href="/users">Users</Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && <div>{session.user!.name}</div>}
      {status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  );
};

export default NavBar;
