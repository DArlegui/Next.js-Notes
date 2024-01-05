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

// /* Optimizing Images */
// import Image from 'next/image';
// import coffee from '@/public/images/coffee.jpg';

// export default async function Home() {
//   return (
//     <main className="relative h-screen">
//       <Image
//         src="https://bit.ly/react-cover"
//         alt="Coffee"
//         fill
//         className="object-contain"
//         sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
//         quality={100}
//         priority
//       />
//     </main>
//   );
// }

/* Notes
style={{objectFit: 'cover' or 'contain'}}
sizes="100vw"
(max-width: 480px) 100vw,  //Smartphone devices
(max-width: 768px) 50vw,  //Tablet devices
33vw 
*/

/* Search Engine Optimization */
// import { Metadata } from 'next';

// export async function generatedMetadata(): Promise<Metadata> {
//   const product = await fetch('');
//   return {
//     title: 'product.title',
//     description: '....',
//   };
// }

/* Default */
'use client';
// import HeavyComponent from './components/HeavyComponent';
import { useState } from 'react';
// import _ from 'lodash';
// import dynamic from 'next/dynamic';
// const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  // const [isVisible, setVisible] = useState(false);
  return (
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}>
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}
