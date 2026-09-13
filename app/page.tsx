import Link from "next/link";

import { Picture } from "@/components/picture";
import { SiteHeader } from "@/components/site-header";
import { getTopic, topics } from "@/lib/topics";

export default function Home() {
  const agi = getTopic("agi");

  return (
    <main className="bg-paper text-ink">
      <SiteHeader />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:pb-24 lg:pt-12">
        <div className="max-w-xl">
          <h1 className="font-heading text-[3.15rem] leading-[1.05] sm:text-6xl lg:text-[4.35rem]">
            How we got from data to <span className="text-pop">AGI.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-quiet">
            A plain English guide through the ideas behind today&apos;s AI.
          </p>
        </div>
        <Picture
          className="aspect-[4/3] min-h-56 w-full"
          src={agi?.image}
          alt={agi?.imageAlt ?? ""}
        />
      </section>

      <section
        id="map"
        className="mx-auto max-w-6xl scroll-mt-6 px-5 pb-20 sm:px-8 sm:pb-28"
      >
        <h2 className="font-heading text-[2.125rem] sm:text-[2.875rem]">The chain</h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((item, index) => (
            <li key={item.slug}>
              <Link
                href={`/${item.slug}`}
                className="block rounded-2xl p-3 ring-1 ring-ink/10 transition hover:bg-paper-2/70"
              >
                <Picture
                  className="aspect-[5/4] w-full"
                  src={item.image}
                  alt=""
                />
                <p className="mt-3 text-sm tabular-nums text-quiet">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-2xl leading-tight">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm leading-6 text-quiet">{item.note}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
