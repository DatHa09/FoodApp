export const homeBottomTabName = 'homeBottomTab';
export const homeName = 'home';
export const detailName = 'detail';
export const searchName = 'search';
export const favoriteName = 'favorite';
export const profileName = 'profile';
export const mapName = 'map';
export const cartName = 'cart';

export const colors = {
  primary: '#FF6838',
  secondary: '#cecdd1',
  secondary_2: '#e9ebee',
  textColor: '#302F3C',
  textColor_2: '#fff',
  backgroundColor: '#FFF',
  backgroundColor_2: '#f5f7f6',
};
export const categories = [
  {
    id: 1,
    name: 'Sushi',
    icon: require('../icons/categories/sushi.png'),
  },
  {
    id: 2,
    name: 'Burgers',
    icon: require('../icons/categories/hamburger.png'),
  },
  {
    id: 3,
    name: 'Donut',
    icon: require('../icons/categories/donut.png'),
  },

  {
    id: 4,
    name: 'Fries',
    icon: require('../icons/categories/fries.png'),
  },
  {
    id: 5,
    name: 'Noodle',
    icon: require('../icons/categories/noodle.png'),
  },
  {
    id: 6,
    name: 'Pizza',
    icon: require('../icons/categories/pizza.png'),
  },
  {
    id: 7,
    name: 'Rice',
    icon: require('../icons/categories/rice-bowl.png'),
  },

  {
    id: 8,
    name: 'Hotdog',
    icon: require('../icons/categories/hotdog.png'),
  },
  {
    id: 9,
    name: 'Salad',
    icon: require('../icons/categories/salad.png'),
  },
  {
    id: 10,
    name: 'Drink',
    icon: require('../icons/categories/drink.png'),
  },
];

export const foodsData = [
  {
    id: 1,
    name: 'Honey Mustard Chicken Burger',
    photo: require('../images/honey-mustard-chicken-burger.jpg'),
    description:
      'Grilled honey mustard chicken sandwiches are awesome! So delicious!',
    calories: 300,
    price: 9.99,
    qty: 35,
    categories: 2,
    rating: '4.7',
    durations: '15-25 min',
  },
  {
    id: 2,
    name: 'Crispy Chicken Burger',
    photo: require('../images/crispy-chicken-burger.jpg'),
    description:
      'Crispy Chicken Burger served on a toasted brioche bun, with jalapenos.',
    calories: 354,
    price: 10.99,
    qty: 40,
    categories: 2,
    rating: '4.7',
    durations: '15-25 min',
  },
  {
    id: 3,
    name: 'Pepsi',
    photo: require('../images/pepsi.png'),
    description: 'Add on Pepsi',
    calories: 150,
    price: 2,
    qty: 50,
    categories: 10,
    rating: '4.7',
    durations: '15-25 min',
  },
  {
    id: 4,
    name: 'Krushers Soda Chanh',
    photo: require('../images/krushers-soda-chanh.png'),
    description: 'Krushers Soda Chanh',
    calories: 150,
    price: 2,
    qty: 50,
    categories: 10,
    rating: '4.7',
    durations: '15-25 min',
  },
  {
    id: 5,
    name: 'Krushers Trà Thanh Yên',
    photo: require('../images/krushers-thanh-yen-tea.png'),
    description: 'Krushers Trà Thanh Yên',
    calories: 150,
    price: 2,
    qty: 50,
    categories: 10,
    rating: '4.7',
    durations: '15-25 min',
  },
  {
    id: 6,
    name: 'French Fries',
    photo: require('../images/french-fries.jpeg'),
    description:
      'Everyone loves a skinny chip and these double-fried ones are great with aioli.',
    calories: 480,
    price: 12.99,
    qty: 46,
    categories: 4,
    rating: '4.7',
    durations: '15-25 min',
  },
  {
    id: 7,
    name: 'Baked French Fries',
    photo: require('../images/baked-fries.jpg'),
    description:
      'Baked french fries with granulated garlic, chives and parsley.',
    calories: 200,
    price: 13.99,
    qty: 25,
    categories: 4,
    rating: '4.7',
    durations: '15-25 min',
  },
  {
    id: 8,
    name: 'Chicago Hotdog',
    photo: require('../images/chicago-hot-dog.jpg'),
    description:
      "With their bold toppings, Chicago hot dogs are one of the city's most famous food traditions",
    calories: 290,
    price: 6.99,
    qty: 40,
    categories: 8,
    rating: '4.7',
    durations: '15-25 min',
  },
  {
    id: 9,
    name: 'Patagonia Hot Dogs',
    photo: require('../images/patagonia-hot-dog.jpg'),
    description: 'Patagonia Hot Dogs With Avocado Mayo',
    calories: 270,
    price: 5.99,
    qty: 35,
    categories: 8,
    rating: '4.0',
    durations: '15-25 min',
  },
  {
    id: 10,
    name: 'Hawaiian Pizza',
    photo: require('../images/hawaiian-pizza.jpg'),
    description:
      'Hawaiian pizza is the perfect combination of sweet and savory flavors loaded on top of a crispy crust.',
    calories: 2158,
    price: 5.99,
    qty: 35,
    categories: 6,
    rating: '4.0',
    durations: '30-45 min',
  },
  {
    id: 11,
    name: 'Pizza',
    photo: require('../images/pizza.jpg'),
    description: 'Pizza, lorem ipsum dolor sit amet, consectetur adip',
    calories: 2269,
    price: 7.99,
    qty: 40,
    categories: 6,
    rating: '4.0',
    durations: '30-45 min',
  },
  {
    id: 12,
    name: 'Nigirizushi',
    photo: require('../images/nigirizushi.jpg'),
    description:
      'Unlike traditional sushi rolls, this simple rice and seafood dish is both easy to make and easy to eat',
    calories: 60,
    price: 9.99,
    qty: 35,
    categories: 1,
    rating: '4.9',
    durations: '25-35 min',
  },
  {
    id: 13,
    name: 'Chirashizushi',
    photo: require('../images/chirashizushi.jpg'),
    description:
      'Chirashizushi is served on plates or in bowls with colorful toppings.',
    calories: 450,
    price: 11.99,
    qty: 40,
    categories: 1,
    rating: '4.9',
    durations: '25-35 min',
  },
  {
    id: 14,
    name: 'Makimono',
    photo: require('../images/makimono.jpg'),
    description:
      'Makimono is the most popular type of sushi roll, the fillings are placed in the middle of the rice.',
    calories: 170,
    price: 12.99,
    qty: 40,
    categories: 1,
    rating: '4.9',
    durations: '25-35 min',
  },
  {
    id: 15,
    name: 'Gunkan',
    photo: require('../images/gunkan.jpg'),
    description:
      'A type of sushi in which the rice is covered with seaweed, and the top is covered with crab eggs, salmon roe, cod roe, etc.',
    calories: 73,
    price: 11.99,
    qty: 40,
    categories: 1,
    rating: '4.9',
    durations: '25-35 min',
  },
  {
    id: 16,
    name: 'Oshizushi',
    photo: require('../images/oshizushi.jpg'),
    description:
      'A type of sushi that is pressed in a wooden mold and then cut into bite-sized pieces with a knife.',
    calories: 140,
    price: 10.99,
    qty: 40,
    categories: 1,
    rating: '4.9',
    durations: '25-35 min',
  },
  {
    id: 17,
    name: 'Temaki',
    photo: require('../images/temaki.jpg'),
    description:
      'A type of sushi molded into a cone, inside is rice, seafood and vegetables.',
    calories: 150,
    price: 10.99,
    qty: 40,
    categories: 1,
    rating: '4.9',
    durations: '25-35 min',
  },
  {
    id: 18,
    name: 'Summer Asian Slaw',
    photo: require('../images/summer-asian-slaw.jpg'),
    description: 'A tahini miso dressing gives it a creamy umami coating.',
    calories: 64,
    price: 3,
    qty: 100,
    categories: 9,
    rating: '4.9',
    durations: '25-35 min',
  },
  {
    id: 19,
    name: 'Broccoli Salad',
    photo: require('../images/broccoli-salad.jpg'),
    description:
      "You won't miss the bacon in this lightened-up take on classic broccoli salad.",
    calories: 64,
    price: 3,
    qty: 100,
    categories: 9,
    rating: '4.9',
    durations: '25-35 min',
  },
  {
    id: 20,
    name: 'Shanghai Style Fried Noodles',
    photo: require('../images/shanghai-style-fried-noodles.jpg'),
    description:
      'Flavourful and authentic Shanghai fried noodles with chicken, mushrooms, and bok choy.',
    calories: 410,
    price: 6.99,
    qty: 35,
    categories: 5,
    rating: '4.7',
    durations: '25-30 min',
  },
  {
    id: 21,
    name: 'Beef Noodle Stir Fry',
    photo: require('../images/beef-noodle-stir-fry.jpg'),
    description: 'This beef noodle stir fry is delicious and flavorful.',
    calories: 358,
    price: 7.99,
    qty: 40,
    categories: 5,
    rating: '4.7',
    durations: '25-30 min',
  },
  {
    id: 22,
    name: 'Biang Biang Spicy Noodles',
    photo: require('../images/biang-biang-spicy-noodles.jpg'),
    description:
      'Flavourful and vegan noodle dish made with a few ingredients.',
    calories: 370,
    price: 7.99,
    qty: 40,
    categories: 5,
    rating: '4.7',
    durations: '25-30 min',
  },
  {
    id: 23,
    name: 'Stir-Fried Rice Cakes with Shrimp',
    photo: require('../images/stir-fried-rice-cakes-with-shrimp.jpg'),
    description:
      'Stir-fried rice cakes with shrimp, bok choy, and bean sprouts in a delicious peanut butter sauce is a quick 10-minute one pan meal.',
    calories: 348,
    price: 6.99,
    qty: 40,
    categories: 7,
    rating: '4.7',
    durations: '25-30 min',
  },
  {
    id: 24,
    name: 'Shrimp and Rice',
    photo: require('../images/shrimp-and-rice.jpg'),
    description:
      "As far as weeknight shrimp dinners go, it's hard to go wrong with shrimp and rice.",
    calories: 329,
    price: 5.99,
    qty: 35,
    categories: 7,
    rating: '4.5',
    durations: '20-30 min',
  },
  {
    id: 25,
    name: 'Mushroom Risotto',
    photo: require('../images/mushroom-risotto.jpg'),
    description: 'Risotto with Crimini mushrooms and Parmesan cheese.',
    calories: 349,
    price: 6.99,
    qty: 40,
    categories: 7,
    rating: '4.5',
    durations: '20-30 min',
  },
  {
    id: 26,
    name: 'Stir-Fried Rice Cakes with Shrimp',
    photo: require('../images/stir-fried-rice-cakes-with-shrimp.jpg'),
    description: 'Stir-fried rice cakes with shrimp, bok choy, and bean.',
    calories: 348,
    price: 5.99,
    qty: 40,
    categories: 7,
    rating: '4.5',
    durations: '20-30 min',
  },
  {
    id: 27,
    name: 'Paella Verdura',
    photo: require('../images/paella-verdura.jpg'),
    description:
      'This veggie-packed paella comes together in under an hour, and, even better, most of the cooking happens in the oven.',
    calories: 370,
    price: 9.99,
    qty: 40,
    categories: 7,
    rating: '4.5',
    durations: '20-30 min',
  },
  {
    id: 28,
    name: 'Yeast Doughnuts',
    photo: require('../images/yeast-doughnuts.jpg'),
    description:
      "The best recipe you'll ever find for light and fluffy yeast doughnuts! I promise!",
    calories: 360,
    price: 5.98,
    qty: 35,
    categories: 3,
    rating: '4.6',
    durations: '15-20 min',
  },
  {
    id: 29,
    name: 'Doughnut Dough',
    photo: require('../images/doughnut-dough.jpg'),
    description:
      "Once you've tasted these irresistibly plump and sugary treats from doughnut master Justin Gellatly.",
    calories: 360,
    price: 6.99,
    qty: 40,
    categories: 3,
    rating: '4.6',
    durations: '15-20 min',
  },
];