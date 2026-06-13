import Banner from "@/component/Home/Banner";
import ProcessSteps from "@/component/Home/ProcessSteps";
import Services from "@/component/Home/Services";
import WhyChoose from "@/component/Home/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Services />
      <WhyChoose />
      <ProcessSteps />
    </>
  );
}
