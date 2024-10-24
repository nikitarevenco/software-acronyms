import { Acronym } from "@/lib/acronym";

export default async function Page({
  params,
}: {
  params: { acronym: string };
}) {
  const { acronym } = await params;
  const acr = (await import(`@/acronyms/${acronym}`)) as Acronym;

  return <div>My Post: {JSON.stringify(acr)}</div>;
}
