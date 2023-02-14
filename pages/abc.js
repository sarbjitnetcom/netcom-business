import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { feedbackActive, teamSliderActive } from "../src/sliderProps";
import counter from '../src/components/Counter';
import ClientsFeedback from "../src/components/home1/ClientsFeedback";
const About = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Abo<span>ut us</span>`} titleText="About" />
       <h1>WELCOMe</h1>
       <ClientsFeedback />

    </Layout>
  );
};
export default About;
