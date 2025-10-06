import { Search, SlidersHorizontal, Star, Heart } from "lucide-react";

const data = [
  {
    id: "1",
    name: "CheeseBurger",
    summary: "Wendy's burger",
    price: 4.16,
    rating: 4.9,
    image: "./assets/cheeseburger.png",
  },
  {
    id: "2",
    name: "Hamburger",
    summary: "Veggie burger",
    price: 6.25,
    rating: 1.6,
    image: "./assets/veggie.png",
  },
  {
    id: "3",
    name: "Hamburger",
    summary: "Chicken burger",
    price: 6.75,
    rating: 4.6,
    image: "./assets/chickenburger.png",
  },
  {
    id: "4",
    name: "Hamburger",
    summary: "Fried Chicken burger",
    price: 5.99,
    rating: 4.5,
    image: "./assets/friedchickenburger.png",
  },
];

export default function Homepage() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="headerContent">
          <h1 className="headerTitle">Foodgo</h1>
          <figure>
            <img className="pfp" src="./assets/kanye-east.gif" alt="Profile" />
          </figure>
        </div>
        <h2 className="headerUnderTitle">Order your favourite food!</h2>
        <nav className="headerNav">
          <div>
            <div>
              <Search color="black" size={24} className="searchSVG" />
              <input
                placeholder="Search"
                type="text"
                name="search"
                id="search"
              />
            </div>
            <figure>
              <SlidersHorizontal color="white" size={25} />
            </figure>
          </div>
        </nav>
      </header>
      <main className="main">
        <div className="grid">
          {data.map((data) => {
            return (
              <div className="figCard">
                <figure>
                  <div className="figImg">
                    <img src={data.image} alt="" />
                  </div>
                  <figcaption>{data.name}</figcaption>
                  <p>{data.summary}</p>
                </figure>
                <div className="svgContainer">
                  <div className="rating">
                    <Star className="star" />
                    <h4>{data.rating}</h4>
                  </div>
                  <Heart className="heart" />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
