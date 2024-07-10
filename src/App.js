import Cards from "./components/Cards";
import Header from "./components/Header";
import vater from "../src/images/vater.png"
import mutter from "../src/images/mutter.png"
import kind from "../src/images/kind.png"
import bruder from "../src/images/bruder.png"
import schwester from "../src/images/schwester.png"
//import { useState } from "react";

const cardList = [
  {id: 1, name: "Vater", type: "der", description: "Article: der, translation: Father, singular: der Vater, plural: die Väter", image: vater},
  {id: 2, name: "Mutter", type: "die", description: "Article: die, translation: Mother, singular die Mutter, plural: die Mütter", image: mutter},
  {id: 3, name: "Kind", type: "das", description: "Article: das, translation: Child, singular: das Kind, plural: die Kinder", image: kind},
  {id: 4, name: "Bruder", type: "der", description: "Article: der, translation: Brother, singular: der Bruder, plural: die Brüder", image: bruder},
  {id: 5, name: "Schwester", type: "die", description: "Article: die, translation: Sister, singular die Schwester, plural: die Schwestern", image: schwester}
];

function App() {
  //const [cardList, setCardList] = useState([]);
  return (
    <div className="appWrapper">
      <Header /> 
      <div className="cardWrapper">
        {cardList.map((cardItem) => 
        <Cards 
          key={cardItem.id} 
          name={cardItem.name} 
          description={cardItem.description}
          type={cardItem.type}
          image={cardItem.image} />)}
      </div>
    </div>
  );
}

export default App;
