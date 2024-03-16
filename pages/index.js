import Layout from "@/components/Layout/Layout";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <>
      <Layout>
        <div className="text-3l mt-4 font-bold underline text-center">
          Hello, {session?.user?.email}
        </div>
      </Layout>
    </>
  );
}
