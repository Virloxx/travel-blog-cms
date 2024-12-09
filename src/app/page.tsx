import SpotlightParent from '../components/homeSpotlight/spotlight';
import Banner from '../components/homeBanner/banner';
import Posts from '../components/homePosts/posts';

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <SpotlightParent ></SpotlightParent>
    <Posts></Posts>
    </>
  );
}