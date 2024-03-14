import React from "react";
import './../styles/App.css';
import Todo from './Todo';
const App = () => {
    const [dish, setDish] = useState(Data);
    const filterDish = (category) => {
      if (category === "all") {
        setDish(Data); // Reset to display all dishes
      } else {
        const newData = Data.filter((item) => item.category === category);
        setDish(newData);
      }
    };
  return (
    <>
      <h1>Our Menu</h1>
      <div className="btn-group">
        <button
          onClick={() => {
            filterDish("all");
          }}
        >
          All
        </button>
        <button id="filter-btn-1"
          onClick={() => {
            filterDish("breakfast");
          }}
        >
          Breakfast
        </button>
        <button
        id="filter-btn-2"
          onClick={() => {
            filterDish("lunch");
          }}
        >
          Lunch
        </button>
        <button
        id="filter-btn-3"
          onClick={() => {
            filterDish("shakes");
          }}
        >
          Shakes
        </button>
      </div>

      <div className="product-div">
        {dish.map((items) => {
          return (
            <>
              <img src={items.img} width={200} height={200} />
              <div className="align-vertical">
                <div className="content">
                  <h3>{items.title}</h3>
                  <p className="price">{items.price}</p>
                </div>
                <p className="description">{items.desc}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default App

