
import Directory from "../../components/directory/Directory.component.js";
import { Outlet } from "react-router-dom";



const categories = [
  {
    id: "id1",
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    subtitle:"shop now"
  },
  {
    id: "id2",
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    subtitle:"shop now"
  },
  {
    id: "id3",
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    subtitle:"shop now"
  },
  {
    id: "id4",
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    subtitle:"shop now"
  },
  {
    id: "id5",
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    subtitle:"shop now"
  }
];

const Home = () => {
  return (
    <>
    <Outlet/>
    
          <Directory categories={categories}/>
    </>
  );
}

export default Home;
