import { createServer } from "miragejs";
import { v4 } from "uuid";

export default function setupMockServer() {
  createServer({
    routes() {
      this.get("/api/foodItems", () => ({
        foodItems: [
          {
            id: v4(),
            name: "xyz",
            image:
              "https://b.zmtcdn.com/data/dish_images/87d7c630082f7fc8cfc5ad917e7228021602870921.png",
            price: 20,
            rating: 4.3,
            time: 33,
          },
        ],
      }));
    },
  });
}

/*
id:
name:
image: 
price:
rating: 
delivery-time:

*/
