const restList = [
  {
    restName: "Krimmy Thickshakes",
    id: 750845,
    restCuisine: "Milk shakes, Thick shakes",
    restRating: "4.0 *",
    delvTime: "25-30 mins",
    promoted: true,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tblyu7pexxqrxlhhdhzm",
  },
  {
    restName: "Rolls King",
    id: 120196,
    restCuisine: "Rolls, Wraps, Fast-food",
    restRating: "3.8 *",
    delvTime: "15-20 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/swqonxjf0mv406jhzt9t",
  },
  {
    restName: "Cake Zone Patisserie",
    id: 376101,
    restCuisine: "Bakery, Desserts, Sweets",
    restRating: "4.7 *",
    delvTime: "26-32 mins",
    promoted: true,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/e34f65ba-aa4b-46be-90cd-a096f2f75b53_511927www.jpg",
  },
  {
    restName: "La Pino'z",
    id: 677399,
    restCuisine: "Pizza, Momos, Burgers",
    restRating: "3.1 *",
    delvTime: "25-30 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d20fdc8c86aa8bd0638f47dd013d46f9",
  },
  {
    restName: "KFC",
    id: 774103,
    restCuisine: "Chicken bucket, Rolls, Desserts",
    restRating: "4.2 *",
    delvTime: "35-40 mins",
    promoted: true,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5d0c595a-dfb2-472b-8ca0-f4701adaa38d_774103.JPG",
  },
  {
    restName: "Pista House cakes",
    id: 636793,
    restCuisine: "Bakery, Sweets, Desserts",
    restRating: "3.9 *",
    delvTime: "15-20 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/31ea22eda5c6e935f04f45e97e54b5d6",
  },
  {
    restName: "Chinese Wok",
    id: 491518,
    restCuisine: "Chinese, Tibetan, Asian",
    restRating: "3.9 *",
    delvTime: "35-40 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
  },
  {
    restName: "Roast 24 Seven",
    id: 618651,
    restCuisine: "Coffee, Cafe, Desserts",
    restRating: "3.5 *",
    delvTime: "15-25 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/20d068b9982f8e71f9f570c7a36b3db9",
  },
  {
    restName: "Churrolto",
    id: 401807,
    restCuisine: "Desserts, Italian, Mexican",
    restRating: "4.2 *",
    delvTime: "25-30 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y6z6qksjn0nevshhssqt",
  },
  {
    restName: "Millet Express",
    id: 242994,
    restCuisine: "Healthy food, South Indian",
    restRating: "3.9 *",
    delvTime: "15-25 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/75f8103a06f57c043f26343fa42e23e2",
  },
  {
    restName: "Gappe Vappe Almond House",
    id: 134419,
    restCuisine: "IceCream",
    restRating: "4.7 *",
    delvTime: "35-40 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/16d2e5fd3b43981064c851a5ddba7ef7",
  },
  {
    restName: "45th Avenue-Karachi Bakery",
    id: 779181,
    restCuisine: "IceCream",
    restRating: "3.9 *",
    delvTime: "35-40 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/b7d647af-5e90-49c4-83f2-1f7a779248c0_779181.jpg",
  },
  {
    restName: "Shah-Ghouse Restaurant ",
    id: 33040,
    restCuisine: "Biryani, Chinese, Mughlai",
    restRating: "4.2 *",
    delvTime: "15-20 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hnx9nazpxdpqpypjo8ld",
  },
  {
    restName: "Roast ",
    id: 65665,
    restCuisine: "Cafe, Desserts, Cafe",
    restRating: "4.2 *",
    delvTime: "15-20 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4c3c3f544973bcc198947681e81325e4",
  },
  {
    restName: "Roast ",
    id: 355756,
    restCuisine: "IceCream, Desserts",
    restRating: "4.2 *",
    delvTime: "15-20 mins",
    promoted: false,
    restImageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jtwv62bhfyagbdncengw",
  },
];

export default restList;
