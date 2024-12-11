import SpotlightParent from '../components/homeSpotlight/spotlight';
import FeatureParent from '../components/homeFeature/feature';
import Banner from '../components/homeBanner/banner';
import Posts from '../components/homePosts/posts';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <SpotlightParent ></SpotlightParent>
    <FeatureParent></FeatureParent>
    <Posts></Posts>
    <Footer></Footer>
    </>
  );
}