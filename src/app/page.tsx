"use client"

import * as acronyms from "@/acronyms";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Software Acronyms</h1>
      <div className="space-y-2">
        <div className="relative">
          <Input
            className="peer pe-9"
          />
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <Search aria-hidden></Search>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 m-4">
        {Object.entries(acronyms).map(([acronym, data]) => (
          <Link key={acronym} href={`/${acronym}`} className="col-span-4">
            <Card>
              <CardHeader>
                <CardTitle>{acronym}</CardTitle>
                <CardDescription>{data.nonAbbreviatedAcronym}</CardDescription>
              </CardHeader>
              <CardContent>{data.description}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
