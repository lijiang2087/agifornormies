import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
      <Link href="/" className="font-heading text-xl leading-none">
        agi for normies
      </Link>
    </header>
  );
}
