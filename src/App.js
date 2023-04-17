import "./App.css";
import './categories.styles.scss'
import Directory from "./components/directory/Directory.component.js";



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

const App = () => {
  return (
    <div className="categories-container">
          <Directory categories={categories}/>
    </div>
  );
}

export default App;
