import FilterComponent from "./components/common/filters";
import LeftRightImgForm from "./components/common/leftRightImgForm";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <section className="w-full ">
      <HeroSection />
      <FilterComponent />
      <LeftRightImgForm
        title="Select What You"
        coloredText="Want"
        boldDescription="oXohub"
        description=" is created masterpices for so book and place your order"
        url="/images/others/work.png"
      />
    </section>
  );
}
