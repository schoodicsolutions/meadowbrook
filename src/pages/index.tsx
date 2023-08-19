
import Layout from "~/components/Layout";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Layout>
        Hello world!
      </Layout>
    </>
  );
}
