const FoodItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 180,
     category: "Biryani",
    image:
      "https://static.vecteezy.com/system/resources/previews/068/286/629/large_2x/delicious-chicken-biryani-recipe-2023-photo.jpg",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: 160,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0WaJJjIKPdt_np1witzZWm3RtOLNqDD1Hw&s",
  },
  {
    id: 3,
    name: "Veg Fried Rice",
    price: 120,
     category: "Biryani",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/040/986/112/small/ai-generated-indian-biryani-rice-professional-advertising-foodgraphy-photo.jpg",
  },
  {
    id: 4,
    name: "Pizza",
    price: 250,
    category: "Pizza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEqZ9bZtzOUYpNDlXSmB9DOJ1szsKpT3MDQ&s",
  },
  {
    "id": 5,
    "name": "Paneer Tikka",
    "price": 150,
    "image": "https://lentillovingfamily.com/wp-content/uploads/2025/08/paneer-tikka-2.jpg"
  },
  {
    "id": 6,
    "name": "Chicken Wings",
    "price": 200,
     category: "Biryani",
    "image": "https://www.thecookierookie.com/wp-content/uploads/2024/02/bbq-chicken-wings-recipe-featured-image.jpg"
  },
  {
    "id": 7,
    "name": "Veg Burger",
    "price": 120,
    category: "Pizza",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_FuyUbWUjn6u0FXPnF8eu1BSwtdV4Wkq3Nw&s"
  },
  {
    "id": 8,
    "name": "Grilled Chicken Sandwich",
    "price": 180,
    "image": "https://www.southernliving.com/thmb/G7iX74IV4kpYq2pzQrORZyeL9P8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27737_SupT_spinbottl_008-1c7b541f7a9f473cb064d686546231d7.jpg"
  },
  {
    "id": 9,
    "name": "Pasta Alfredo",
    "price": 160,
    category: "Pizza",
    "image": "https://www.dinner-mom.com/wp-content/uploads/2024/02/one-pot-alfredo-recipe.jpg"
  },
  {
    "id": 10,
    "name": "Margherita Pizza",
    "price": 220,
     category: "Pizza",
    "image": "https://au.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?v=1737368217&width=1080"
   
  },
  {
    "id": 11,
    "name": "Chocolate Brownie",
    "price": 100,
     category: "Snacks",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRohCyJxMq1h0yhVWZbAnvCW_qKJemnRLL2Nw&s"
  },
  {
    "id": 12,
    "name": "Ice Cream Sundae",
    "price": 120,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bq9i_3iZ7b0S8KiVoji9uhLmSsTXFhWUxQ&s"
  },
  {
    "id": 13,
    "name": "Gulab Jamun",
    "price": 80,
     category: "Snacks",
    "image": "https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp"
  },
  {
    "id": 14,
    "name": "Soft Drinks",
    "price": 50,
    "image": "https://cdn.shopify.com/s/files/1/0517/4609/files/HD-Coca-Cola-Photos_large.jpg?v=1544425170"
  },
  {
    "id": 15,
    "name": "Fresh Lemonade",
    "price": 60,
    "image": "https://brownthumbmama.com/wp-content/uploads/2016/02/LemonadePitcherOPT.jpg"
  },
  {
    "id": 16,
    "name": "Hot Coffee",
    "price": 70,
    "image": "https://t3.ftcdn.net/jpg/05/34/82/24/360_F_534822425_9Ok2L60rSndeunIM6sELPKvuDqzhopX7.jpg"
  },
  {
    "id": 17,
    "name": "Milkshake (Chocolate)",
    "price": 100,
     category: "Snacks",
    "image": "https://static.vecteezy.com/system/resources/thumbnails/025/276/210/small/three-milkshakes-chocolate-strawberry-professional-foodgraphy-ai-generated-photo.jpg"
  },
  {
    "id": 18,
    "name": "Fried Fish",
    "price": 220,
    "image": "https://butteroverbae.com/wp-content/uploads/2018/11/spicy-fish-fry-served.jpg"
  },
  {
    "id": 19,
    "name": "Veg Manchurian",
    "price": 140,
    "image": "https://www.yummytummyaarthi.com/wp-content/uploads/2022/08/veg-manchurian-1.jpeg"
  },
  {
    "id": 20,
    "name": "Chicken Shawarma",
    "price": 200,
    "image": "https://i.ytimg.com/vi/_ChlVSXEV3c/maxresdefault.jpg"
  },
  {
    "id": 21,
    "name": "Cheese Sandwich",
    "price": 120,
     category: "Snacks",
    "image": "https://assets.epicurious.com/photos/59b2bccaed60845e59e6d3d1/1:1/w_3743,h_3743,c_limit/shutterstock_321217517.jpg"
  },
  {
    "id": 22,
    "name": "Chilli Paneer",
    "price": 160,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGoDVklE1HxNnmwlpH1OOvsu5aV2FCwCSxw&s"
  },
  {
    "id": 23,
    "name": "Veg Noodles",
    "price": 130,
    "image": "https://www.sharmispassions.com/wp-content/uploads/2012/09/HakkaNoodles4-e1689045142580-500x500.jpg"
  },
  {
    "id": 24,
    "name": "Tandoori Chicken",
    "price": 240,
     category: "Biryani",
    "image": "https://sinfullyspicy.com/wp-content/uploads/2014/07/1200-by-1200-images-2.jpg"
  },
  {
    "id": 25,
    "name": "Chocolate Muffin",
    "price": 90,
     category: "Snacks",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LEGAw59QmkjQ45OACoN7MQyTmcCUFGohZg&s"
  }
];
export default FoodItems;