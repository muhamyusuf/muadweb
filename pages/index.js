import { Footer, Navbar } from '../components';
import {
  Story,
  // Explore,
  Feedback,
  Principle,
  Hero,
  Insights,
  WhatsNew,
  Why,
  World,
} from '../sections';

const Home = () => (
  <div className="overflow-hidden bg-primary-blue">
    <Navbar />
    <Hero />
    <div className="relative bg-[#f4f4f4]">
      <Why />
      <Principle />
      <WhatsNew />
      {/* <Explore /> */}
      <Story />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
