import { ArrowDown, ArrowRight, Check, Circle, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const chain = [
  { label: "Data", note: "Examples to learn from", current: true },
  { label: "Learning", note: "Getting better from examples" },
  { label: "Neural networks", note: "Patterns built in layers" },
  { label: "Language models", note: "Predicting what comes next" },
  { label: "Reasoning", note: "Working through hard problems" },
  { label: "Tools", note: "Looking up, calculating, acting" },
  { label: "Agents", note: "Choosing and finishing steps" },
  { label: "Harnesses", note: "The setup that keeps agents useful" },
  { label: "Real-world work", note: "Useful outcomes, not demos" },
  { label: "Robotics", note: "Intelligence with hands and sensors" },
  { label: "AGI", note: "A broad, still-unsettled destination" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#1d2433]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex items-center justify-between py-6 sm:py-8">
          <Link className="font-mono text-sm font-semibold tracking-[-0.04em]" href="/">agi<span className="text-[#ec6b46]">for</span>normies</Link>
          <span className="rounded-full border border-[#dcd6c9] bg-[#fffdf8] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#677080]">Start here</span>
        </header>

        <section className="grid gap-10 pb-14 pt-10 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:pb-24 lg:pt-20">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[#677080]"><Sparkles className="size-3.5 text-[#ec6b46]" />A map, not a textbook</div>
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">How we got from data to <span className="text-[#ec6b46]">AGI.</span></h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-[#596273] sm:text-xl">A plain-English trail through the ideas behind today&apos;s AI. No vocabulary dump—just the problem each step solved.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" className="h-11 rounded-full bg-[#1d2433] px-5 text-[#fffdf8] hover:bg-[#344056]" render={<a href="#data" />}>Start with Data <ArrowRight /></Button>
              <a className="inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-[#596273] transition hover:text-[#1d2433]" href="#map">See the whole map <ArrowDown className="size-4" /></a>
            </div>
          </div>
          <div className="relative rounded-[2rem] border border-[#dcd6c9] bg-[#fffdf8] p-5 shadow-[0_18px_60px_rgba(42,48,63,0.08)] sm:p-7">
            <div className="absolute -right-7 -top-7 hidden size-24 rounded-full border border-[#f2c5b5] bg-[#ffe9e1] lg:block" />
            <p className="relative font-mono text-xs uppercase tracking-[0.15em] text-[#677080]">The one-line idea</p>
            <p className="relative mt-5 text-2xl font-medium leading-snug tracking-[-0.04em] sm:text-3xl">“AI got useful by learning patterns, then using them to do work.”</p>
            <div className="relative mt-7 rounded-2xl bg-[#f1efe8] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.13em] text-[#677080]">Think of it like</p>
              <p className="mt-2 text-sm leading-6 text-[#4f5969]">Teaching a very fast apprentice: show them examples, give them feedback, then hand them better tools and a real job.</p>
            </div>
          </div>
        </section>
      </div>

      <section id="map" className="scroll-mt-4 border-y border-[#dcd6c9] bg-[#efede5]">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="font-mono text-xs uppercase tracking-[0.14em] text-[#677080]">The knowledge tree</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">One cause-and-effect chain.</h2></div>
            <p className="max-w-sm text-sm leading-6 text-[#677080]">Follow the arrows. Each idea exists because the previous one left something important unsolved.</p>
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chain.map((item, index) => (
              <li key={item.label} className="relative">
                <div className={`flex min-h-28 flex-col justify-between rounded-2xl border p-4 transition sm:p-5 ${item.current ? "border-[#1d2433] bg-[#1d2433] text-[#fffdf8] shadow-lg shadow-[#1d2433]/10" : "border-[#dcd6c9] bg-[#fffdf8] text-[#1d2433]"}`}>
                  <div className="flex items-center justify-between"><span className={`font-mono text-xs ${item.current ? "text-[#f2b29b]" : "text-[#8a919d]"}`}>{String(index + 1).padStart(2, "0")}</span>{item.current ? <Check className="size-4 text-[#f2b29b]" aria-label="Current lesson" /> : <Circle className="size-3 text-[#b4b7ba]" aria-hidden="true" />}</div>
                  <div><h3 className="font-semibold tracking-[-0.03em]">{item.label}</h3><p className={`mt-1 text-sm leading-5 ${item.current ? "text-[#d9dce0]" : "text-[#677080]"}`}>{item.note}</p></div>
                </div>
                {index < chain.length - 1 && <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 text-[#aeb0aa] lg:block" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="data" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-9 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="font-mono text-xs uppercase tracking-[0.14em] text-[#ec6b46]">Block 01 · Data</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">Every model starts by looking.</h2></div>
          <div className="rounded-[1.75rem] border border-[#dcd6c9] bg-[#fffdf8] p-6 sm:p-8">
            <p className="text-xl font-medium leading-8 tracking-[-0.035em]">Data is the collection of examples a machine learns from.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div><p className="font-mono text-[11px] uppercase tracking-[0.13em] text-[#677080]">Why invent it?</p><p className="mt-2 text-sm leading-6 text-[#596273]">You cannot explain every rule of language, vision, or taste by hand. Examples are a shortcut to the rules.</p></div>
              <div><p className="font-mono text-[11px] uppercase tracking-[0.13em] text-[#677080]">The analogy</p><p className="mt-2 text-sm leading-6 text-[#596273]">Like showing a child thousands of dogs instead of writing a formal definition of “dog.”</p></div>
            </div>
            <div className="mt-7 border-t border-[#e6e1d7] pt-5"><p className="text-sm font-medium">Next question: What does a machine do with all those examples?</p><p className="mt-1 text-sm text-[#677080]">That&apos;s learning. Coming next.</p></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dcd6c9]"><div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-sm text-[#677080] sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>Small steps toward a useful mental model of AGI.</p><p className="font-mono text-xs">Block 01 of 11</p></div></footer>
    </main>
  );
}
