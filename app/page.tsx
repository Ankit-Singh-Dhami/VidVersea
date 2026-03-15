import { UserButton } from "@clerk/nextjs";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Features from "./_components/Feature";

const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default Page;
