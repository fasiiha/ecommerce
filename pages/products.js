import Layout from "@/components/Layout/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <Layout>
        <Link href={"products/newproduct"}></Link>
      </Layout>
    </>
  );
}
