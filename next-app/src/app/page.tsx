import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Next.js Application</h1>
      <hr />
      <Link href="http://localhost:3002">Go to Nuxt.js App</Link>
    </div>
  );
}
