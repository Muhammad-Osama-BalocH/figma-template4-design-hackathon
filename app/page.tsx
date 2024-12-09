import LatestBlog from "./components/blog";
import FeaturedProducts from "./components/featured";
import HeroSection from "./components/hero";
import Latest from "./components/latest";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <Latest/>
      <LatestBlog/>
    </div>
  );
}
