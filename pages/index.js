import Link from "next/link";
export default function Home() {
  return (
    <div >
     <h1>The HomePage</h1>
     <ul>
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <a href="/clients">Client Page</a>
      </li>
     </ul>
    </div>
  );
}
