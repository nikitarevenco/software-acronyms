import * as acronyms from "@/acronyms";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      {Object.entries(acronyms).map(([acronym, data]) => (
        <Link key={acronym} href={`/${acronym}`}>
          {acronym}
          {JSON.stringify(data.origin)}
        </Link>
      ))}
    </div>
  );
}
