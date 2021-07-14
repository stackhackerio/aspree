import { NextSeo } from "next-seo";
import Layout from "@/components/layout";
import Home from "@/components/home";

const config = {
  title: "Home",
};

export default function HomePage() {
  return (
    <Layout>
      <NextSeo {...config} />
      <Home />
    </Layout>
  );
}
