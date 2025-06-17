const foodData = [
  {
    foodId: "FOOD001",
    name: "Paneer Tikka",
    type: "Starters",
    calories: 220,
    isVeg: true,
    price: 120,
    description: "Grilled paneer cubes with spices",
    imageUrl: "https://example.com/paneer.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD002",
    name: "Chicken Tandoori",
    type: "Starters",
    calories: 300,
    isVeg: false,
    price: 180,
    description: "Smoky and spicy tandoori chicken",
    imageUrl: "https://example.com/tandoori.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD003",
    name: "Masala Dosa",
    type: "Main Course",
    calories: 270,
    isVeg: true,
    price: 80,
    description: "Crispy dosa with potato masala",
    imageUrl: "https://example.com/masala-dosa.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD004",
    name: "Butter Chicken",
    type: "Main Course",
    calories: 400,
    isVeg: false,
    price: 200,
    description: "Creamy chicken curry with butter",
    imageUrl: "https://example.com/butter-chicken.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD005",
    name: "Rajma Chawal",
    type: "Main Course",
    calories: 350,
    isVeg: true,
    price: 90,
    description: "Red kidney beans curry with rice",
    imageUrl: "https://example.com/rajma.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD006",
    name: "Biryani",
    type: "Main Course",
    calories: 450,
    isVeg: false,
    price: 150,
    description: "Fragrant rice cooked with spices and chicken",
    imageUrl: "https://example.com/biryani.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD007",
    name: "Chole Bhature",
    type: "Main Course",
    calories: 390,
    isVeg: true,
    price: 110,
    description: "Spicy chickpeas served with fried bread",
    imageUrl: "https://example.com/chole.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD008",
    name: "Samosa",
    type: "Snacks",
    calories: 160,
    isVeg: true,
    price: 20,
    description: "Crispy fried pastry with spicy filling",
    imageUrl: "https://example.com/samosa.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD009",
    name: "Pav Bhaji",
    type: "Snacks",
    calories: 280,
    isVeg: true,
    price: 70,
    description: "Spiced mashed veggies served with buns",
    imageUrl: "https://example.com/pavbhaji.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD010",
    name: "Dhokla",
    type: "Snacks",
    calories: 150,
    isVeg: true,
    price: 50,
    description: "Steamed chickpea flour cake",
    imageUrl: "https://example.com/dhokla.jpg",
    available: true,
    stallId: "666abc1234567890"
  },

  // Desserts
  {
    foodId: "FOOD011",
    name: "Gulab Jamun",
    type: "Dessert",
    calories: 320,
    isVeg: true,
    price: 40,
    description: "Sweet milk-based fried balls soaked in syrup",
    imageUrl: "https://example.com/gulabjamun.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD012",
    name: "Rasgulla",
    type: "Dessert",
    calories: 290,
    isVeg: true,
    price: 40,
    description: "Soft syrupy cottage cheese balls",
    imageUrl: "https://example.com/rasgulla.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD013",
    name: "Kheer",
    type: "Dessert",
    calories: 260,
    isVeg: true,
    price: 50,
    description: "Sweet rice pudding with dry fruits",
    imageUrl: "https://example.com/kheer.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD014",
    name: "Jalebi",
    type: "Dessert",
    calories: 330,
    isVeg: true,
    price: 30,
    description: "Crispy coil-shaped dessert soaked in syrup",
    imageUrl: "https://example.com/jalebi.jpg",
    available: true,
    stallId: "666abc1234567890"
  },

  // Beverages
  {
    foodId: "FOOD015",
    name: "Masala Chai",
    type: "Beverages",
    calories: 120,
    isVeg: true,
    price: 20,
    description: "Spiced Indian tea with milk",
    imageUrl: "https://example.com/masalachai.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD016",
    name: "Lassi",
    type: "Beverages",
    calories: 180,
    isVeg: true,
    price: 40,
    description: "Sweet yogurt-based drink",
    imageUrl: "https://example.com/lassi.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
  {
    foodId: "FOOD017",
    name: "Buttermilk",
    type: "Beverages",
    calories: 90,
    isVeg: true,
    price: 30,
    description: "Spiced diluted curd drink",
    imageUrl: "https://example.com/buttermilk.jpg",
    available: true,
    stallId: "666abc1234567890"
  },
// Add 23 more (you can duplicate/edit the above to reach 40)
];

module.exports = foodData;