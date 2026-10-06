import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { About, Achievements, Contact, Drawings, Education, Experience, Footer, Hero, Projects, Skills } from "@/components/Sections";

export default function Page() {
  return (
    <>
      <Loader />
      <Navbar />
      <main><Hero /><About /><Skills /><Experience /><Projects /><Drawings /><Achievements /><Education /><Contact /></main>
      <Footer />
    </>
  );
}
