import Hero from "./Hero";
import Slider from "./Slider";
import Discovery from "./Discovery";
import Footer from "./Footer";
import Intro from "./Intro";
import FindMore from "./FindMore";
import HowItWorks from "./HowItWworks";

const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <FindMore />
            <HowItWorks />
            <Slider />
            <Discovery />
            <Footer />
        </>
    );
}

export default Home;