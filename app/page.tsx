// import { getServerSession } from 'next-auth';
// import Link from 'next/link';
// import { authOptions } from './api/auth/[...nextauth]/route';
// import ProductCard from './components/ProductCard';

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   return (
//     <main>
//       <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
//       <Link href="/users">User</Link>
//       <Link href="/users/new">New User</Link>
//       <ProductCard />
//     </main>
//   );
// }

/* Optimization */
import Image from 'next/image';
import coffee from '@/public/images/coffee.jpg';

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-contain"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}

/* Notes
style={{objectFit: 'cover' or 'contain'}}
sizes="100vw"
(max-width: 480px) 100vw,  //Smartphone devices
(max-width: 768px) 50vw,  //Tablet devices
33vw 
*/
