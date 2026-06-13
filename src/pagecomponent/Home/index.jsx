import Banner from "@/component/Home/Banner";
import DoctorsAppointment from "@/component/Home/DoctorsAppointment";
import ProcessSteps from "@/component/Home/ProcessSteps";
import Services from "@/component/Home/Services";
import Stats from "@/component/Home/Stats";
import TreatmentVideo from "@/component/Home/TreatmentVideo";
import WhyChoose from "@/component/Home/WhyChoose";
import NewsArticles from "@/component/Home/NewsArticles";
import Testimonials from "@/component/Home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Services />
      <WhyChoose />
      <ProcessSteps />
      <TreatmentVideo />
      <Stats />
      <DoctorsAppointment />
      <NewsArticles />
      <Testimonials />
    </>
  );
}
