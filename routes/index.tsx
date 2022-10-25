import { Head } from "$fresh/runtime.ts";
import { JSX } from "preact";
import { Code } from "../components/Code.tsx";
import { Contact } from "../components/Contact.tsx";
import { Songs } from "../components/Songs.tsx";

function Section({ children }: { children: JSX.Element }) {
  return <div className="w-60">{children}</div>
}

export default function Home() {
  return (
    <>
      <Head>
        <title>inherit desire to be written in rust</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-4  ">
        <Section>
          <Contact />
        </Section>
        <div className=" mt-5 space-y-14  bg-opacity-90 py-2">
          <Section>
            <Code />
          </Section>
          <Section>
            <Songs />
          </Section>
        </div>
        <footer className="mt-10">
          <Section>
            <div className="flex flex-row justify-center items-center space-x-3">
              <a href="https://fresh.deno.dev">
                <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge-dark.svg" alt="Made with Fresh" />
              </a>
              <a href="https://github.com/jesuscovam/my-website-deno" class="text-indigo-400 underline cursor-pointer">source</a>
            </div>
          </Section>
        </footer>
      </div>
    </>
  );
}
