import FilterComponent from "./components/common/filters";
import LeftRightImgForm from "./components/common/leftRightImgForm";
import Sliders from "./components/common/sliders";
import HeroSection from "./components/heroSection";
const items = [
  {
    id: 1,
    category: "Mobile App Designs",
    src: "/images/categories/mobile-app-design.png",
  },
  {
    id: 2,
    category: "Mockups Designs",
    src: "/images/categories/mockups-design.png",
  },
  {
    id: 3,
    category: "Banners/Flyers",
    src: "/images/categories/banners-flyers.png",
  },
  { id: 4, category: "Logos", src: "/images/categories/logos.png" },
  {
    id: 5,
    category: "Visiting Cards",
    src: "/images/categories/visiting-cards.png",
  },
  { id: 6, category: "Wireframes", src: "/images/categories/wireframes.png" },
  { id: 7, category: "Dashboard", src: "/images/categories/dashboard.png" },
  { id: 8, category: "Portfolios", src: "/images/categories/portfolios.png" },
];

const sliderItems = [
  {
    id: 1,
    category: "Mobile App Designs",
    src: "/images/slider/logo1.png",
  },
  {
    id: 2,
    category: "Mockups Designs",
    src: "/images/slider/logo2.png",
  },
  {
    id: 3,
    category: "Banners/Flyers",
    src: "/images/slider/logo3.png",
  },
  { id: 4, category: "Logos", src: "/images/slider/logo4.png" },
  {
    id: 5,
    category: "Visiting Cards",
    src: "/images/slider/logo5.png",
  },
  { id: 6, category: "Wireframes", src: "/images/slider/logo6.png" },
  { id: 7, category: "Dashboard", src: "/images/slider/logo7.png" },
  { id: 8, category: "Portfolios", src: "/images/slider/logo8.png" },
];
export default function Home() {
  return (
    <section className="w-full ">
      <HeroSection />
      <FilterComponent />
      <Sliders images1={sliderItems} images2={sliderItems} />
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
