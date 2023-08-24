
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <section>
        <h1 className="text-4xl font-bold">Hello World</h1>
        <p className="text-xl">
          This is a <a href="https://trpc.io">tRPC</a> app.
        </p>
        <p className="text-xl">
          <a href="https://nextjs.org">Next.js</a> +{" "}
          <a href="https://tailwindcss.com">Tailwind CSS</a> +{" "}
          <a href="https://www.typescriptlang.org">TypeScript</a>
        </p>
      </section>
    </>
  );
}
