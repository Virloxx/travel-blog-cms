import SpotlightParent from '../components/homeSpotlight/spotlight';
import PostParent from '../components/homePost/post';
import Banner from '../components/homeBanner/banner';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <SpotlightParent ></SpotlightParent>
    <PostParent></PostParent>
    <Footer></Footer>
    </>
  );
}