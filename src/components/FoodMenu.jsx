import axios from "axios";
import { useEffect, useState } from "react";

export const FoodMenu = () => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/foodItems")
      .then(({ data: { foodItems } }) => setFoodList(foodItems));
  }, []);

  return (
    <div className="container">
      <ul>
        {foodList.map(({ id, name, image, price, rating, time }) => {
          return (
            <div key={id}>
              <li>{name}</li>
              <li>{price}</li>
              <li>{rating}</li>
              <li>{time}</li>
              <li>
                <img src={image} alt="FoodImage" />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
