import SpotlightParent from '../components/homeSpotlight/spotlight';
import Banner from '../components/homeBanner/banner';
import Posts from '../components/homePosts/posts';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <SpotlightParent ></SpotlightParent>
    <Posts></Posts>
    <Footer></Footer>
    </>
  );
}