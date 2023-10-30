import {
  Blog,
  Contacts,
  Hero,
  Services,
  WhyHireUs,
  WorkProcess,
} from "@/components/shared";
import Whyus from "@/components/shared/whyus";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-[90vw] mx-auto">
        <Whyus />
      </div>
      <WorkProcess />
      <Services />
      <Blog />
      <Contacts />
    </div>
  );
}
