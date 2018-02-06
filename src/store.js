import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const mutations = {};
const actions = {};

const getters = {
  filteredItems: function(state) {
    return function(filters) {
      var filteredItems = state.items;

      if (filters['season'] && filters['season'] != 'all-seasons') {
        filteredItems = filteredItems.filter(function(item) { return item.seasons.includes(filters['season']) });
      }

      if (filters['skill'] && filters['skill'] != 'all-skills') {
        filteredItems = filteredItems.filter(function(item) { return item.skills.includes(filters['skill']) });
      }

      filteredItems = filteredItems.filter(function(item) { return item.name.toLowerCase().includes(filters['name'].toLowerCase()) });

      return filteredItems;
    }
  }
};

const state = {
  "items": [
    {
      "id": 0,
      "name": "Wild Horseradish",
      "source": "Foraging during Spring.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        0
      ]
    },
    {
      "id": 1,
      "name": "Daffodil",
      "source": "Foraging during Spring. Buy from Pierre's Shop at the Flower Dance.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        0
      ]
    },
    {
      "id": 2,
      "name": "Leek",
      "source": "Foraging during Spring.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        0
      ]
    },
    {
      "id": 3,
      "name": "Dandelion",
      "source": "Foraging during Spring. Buy from Pierre's Shop at the Flower Dance.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        0
      ]
    },
    {
      "id": 4,
      "name": "Grape",
      "source": "Foraging during Summer.",
      "seasons": [
        "summer",
        "fall"
      ],
      "skills": [
        "foraging",
        "farming"
      ],
      "bundles": [
        1
      ]
    },
    {
      "id": 5,
      "name": "Spice Berry",
      "source": "Foraging during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        1
      ]
    },
    {
      "id": 6,
      "name": "Sweet Pea",
      "source": "Foraging during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        1
      ]
    },
    {
      "id": 7,
      "name": "Common Mushroom",
      "source": "Foraging during Fall Or if you have the mushroom in your cave.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        2
      ]
    },
    {
      "id": 8,
      "name": "Wild Plum",
      "source": "Foraging during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        2
      ]
    },
    {
      "id": 9,
      "name": "Hazelnut",
      "source": "Foraging during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        2
      ]
    },
    {
      "id": 10,
      "name": "Blackberry",
      "source": "Foraging during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        2
      ]
    },
    {
      "id": 11,
      "name": "Winter Root",
      "source": "Foraging during Winter or dropped by slimes on 41-79 Mines levels.",
      "seasons": [
        "winter",
        "spring",
        "summer",
        "fall"
      ],
      "skills": [
        "foraging",
        "combat"
      ],
      "bundles": [
        3
      ]
    },
    {
      "id": 12,
      "name": "Crystal Fruit",
      "source": "Foraging during Winter or dropped by coal sprites on 41-79 Mines levels.",
      "seasons": [
        "winter",
        "spring",
        "summer",
        "fall"
      ],
      "skills": [
        "foraging",
        "combat"
      ],
      "bundles": [
        3
      ]
    },
    {
      "id": 13,
      "name": "Snow Yam",
      "source": "Foraging during Winter (Using a Hoe outside the farm).",
      "seasons": [
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        3
      ]
    },
    {
      "id": 14,
      "name": "Crocus",
      "source": "Foraging during Winter.",
      "seasons": [
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        3
      ]
    },
    {
      "id": 15,
      "name": "Wood (99)",
      "source": "Chopping trees or logs using an axe.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        4,
        4
      ]
    },
    {
      "id": 16,
      "name": "Stone (99)",
      "source": "Smashing stones with a pickaxe.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        4
      ]
    },
    {
      "id": 17,
      "name": "Hardwood (10)",
      "source": "Chopping large stumps with an upgraded axe. Also in crates in the Mines",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging",
        "mining"
      ],
      "bundles": [
        4
      ]
    },
    {
      "id": 18,
      "name": "Coconut",
      "source": "Found in the desert.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        5
      ]
    },
    {
      "id": 19,
      "name": "Cactus Fruit",
      "source": "Found in the desert.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        5
      ]
    },
    {
      "id": 20,
      "name": "Cave Carrot",
      "source": "In boxes inside the mines or using the hoe on soil spots in the Mines.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        5
      ]
    },
    {
      "id": 21,
      "name": "Red Mushroom",
      "source": "Can be found in the mines or in the farm cave if you selected the mushroom perk.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging",
        "mining"
      ],
      "bundles": [
        5,
        22
      ]
    },
    {
      "id": 22,
      "name": "Purple Mushroom",
      "source": "Can be found in the mines or in the farm cave if you selected the mushroom perk.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging",
        "mining"
      ],
      "bundles": [
        5,
        23
      ]
    },
    {
      "id": 23,
      "name": "Maple Syrup",
      "source": "Harvested from maple trees using a Tapper.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        5,
        21
      ]
    },
    {
      "id": 24,
      "name": "Oak Resin",
      "source": "Harvested from oak trees using a Tapper.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        5,
        25
      ]
    },
    {
      "id": 25,
      "name": "Pine Tar",
      "source": "Harvested from pine trees using a Tapper.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        5
      ]
    },
    {
      "id": 26,
      "name": "Morel",
      "source": "In the farm cave if you selected the mushroom perk",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        5
      ]
    },
    {
      "id": "26b",
      "name": "Parsnip",
      "source": "Crops during Spring.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        6
      ]
    },
    {
      "id": 28,
      "name": "Green Bean",
      "source": "Crops during Spring.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        6
      ]
    },
    {
      "id": 29,
      "name": "Cauliflower",
      "source": "Crops during Spring.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        6
      ]
    },
    {
      "id": 30,
      "name": "Potato",
      "source": "Crops during Spring.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        6
      ]
    },
    {
      "id": 31,
      "name": "Tomato",
      "source": "Crops during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        7
      ]
    },
    {
      "id": 32,
      "name": "Hot Pepper",
      "source": "Crops during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        7
      ]
    },
    {
      "id": 33,
      "name": "Blueberry",
      "source": "Crops during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        7
      ]
    },
    {
      "id": 34,
      "name": "Melon",
      "source": "Crops during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        7
      ]
    },
    {
      "id": 35,
      "name": "Corn",
      "source": "Crops during Summer and Fall.",
      "seasons": [
        "summer",
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        8
      ]
    },
    {
      "id": 36,
      "name": "Eggplant",
      "source": "Crops during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        8
      ]
    },
    {
      "id": 37,
      "name": "Pumpkin",
      "source": "Crops during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        8
      ]
    },
    {
      "id": 38,
      "name": "Yam",
      "source": "Crops during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        8
      ]
    },
    {
      "id": 39,
      "name": "Parsnip (Gold Star) (5)",
      "source": "Crops during Spring.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        9
      ]
    },
    {
      "id": 40,
      "name": "Melon (Gold Star) (5)",
      "source": "Crops during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        9
      ]
    },
    {
      "id": 41,
      "name": "Pumpkin (Gold Star) (5)",
      "source": "Crops during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        9
      ]
    },
    {
      "id": 42,
      "name": "Corn (Gold Star) (5)",
      "source": "Crops during Summer and Fall.",
      "seasons": [
        "summer",
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        9
      ]
    },
    {
      "id": 43,
      "name": "Milk (Large)",
      "source": "Cows",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        10
      ]
    },
    {
      "id": 44,
      "name": "Egg (Large, Brown)",
      "source": "Chickens",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        10
      ]
    },
    {
      "id": 45,
      "name": "Egg (Large, White)",
      "source": "Chickens",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        10
      ]
    },
    {
      "id": 46,
      "name": "Goat Milk (Large)",
      "source": "Goats",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        10
      ]
    },
    {
      "id": 47,
      "name": "Wool",
      "source": "Sheep, Rabbits",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        10
      ]
    },
    {
      "id": 48,
      "name": "Duck Egg",
      "source": "Ducks",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        10
      ]
    },
    {
      "id": 49,
      "name": "Truffle Oil",
      "source": "Made from Truffles. Requires Oil Maker",
      "seasons": [
        "spring",
        "summer",
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 50,
      "name": "Cloth",
      "source": "Made from Wool. Requires Loom. Can also be rarely obtained by Recycling Soggy Newspaper.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "foraging"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 51,
      "name": "Goat Cheese",
      "source": "Made from Goat Milk. Requires Cheese Press.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 52,
      "name": "Cheese",
      "source": "Made from Cow Milk. Requires Cheese Press",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 53,
      "name": "Honey",
      "source": "Produced by Bees. Requires Beehive.",
      "seasons": [
        "spring",
        "summer",
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 54,
      "name": "Jelly",
      "source": "Made from any Fruit. Requires Preserves Jar.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "foraging"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 55,
      "name": "Apple",
      "source": "Gathered from Apple Trees during Fall. Fodder Bundle requires 3.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        11,
        24
      ]
    },
    {
      "id": 56,
      "name": "Apricot",
      "source": "Gathered from Apricot Trees during Spring.",
      "seasons": [
        "spring"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 57,
      "name": "Orange",
      "source": "Gathered from Orange Trees during Summer or found in farm cave if fruit perk selected.",
      "seasons": [
        "summer",
        "spring",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "foraging"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 58,
      "name": "Peach",
      "source": "Gathered from Peach Trees during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 59,
      "name": "Pomegranate",
      "source": "Gathered from Pomegranate Trees during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        11,
        25
      ]
    },
    {
      "id": 60,
      "name": "Cherry",
      "source": "Gathered from Cherry Trees during Spring or found in farm cave if fruit perk selected.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "foraging"
      ],
      "bundles": [
        11
      ]
    },
    {
      "id": 61,
      "name": "Sunfish",
      "source": "Found in Rivers, Daytime, Spring, and Summer.",
      "seasons": [
        "spring",
        "summer"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        12
      ]
    },
    {
      "id": 62,
      "name": "Catfish",
      "source": "Found in Rivers, Anytime, Spring and Fall. Only when raining.",
      "seasons": [
        "spring",
        "fall"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        12
      ]
    },
    {
      "id": 63,
      "name": "Shad",
      "source": "Found in Rivers, Daytime, Spring, Summer, and Fall. Only when raining.",
      "seasons": [
        "spring",
        "summer",
        "fall"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        12
      ]
    },
    {
      "id": 64,
      "name": "Tiger Trout",
      "source": "Found in Rivers, Daytime (Early afternoon), Fall and Winter.",
      "seasons": [
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        12
      ]
    },
    {
      "id": 65,
      "name": "Largemouth Bass",
      "source": "Found in Lakes, Daytime, All Seasons.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        13
      ]
    },
    {
      "id": 66,
      "name": "Carp",
      "source": "Found in Lakes, Anytime, All Seasons.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        13
      ]
    },
    {
      "id": 67,
      "name": "Bullhead",
      "source": "Found in Lakes, Anytime, All Seasons.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        13
      ]
    },
    {
      "id": 68,
      "name": "Sturgeon",
      "source": "Found in Lakes, Daytime, Summer and Winter.",
      "seasons": [
        "summer",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        13
      ]
    },
    {
      "id": 69,
      "name": "Sardine",
      "source": "Found in the Ocean, Daytime, Spring, Fall, and Winter.",
      "seasons": [
        "spring",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        14
      ]
    },
    {
      "id": 70,
      "name": "Tuna",
      "source": "Found in the Ocean, Daytime, Summer and Winter.",
      "seasons": [
        "summer",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        14
      ]
    },
    {
      "id": 71,
      "name": "Red Snapper",
      "source": "Found in the Ocean, Daytime, Summer and Fall. Only when raining.",
      "seasons": [
        "summer",
        "fall"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        14
      ]
    },
    {
      "id": 72,
      "name": "Tilapia",
      "source": "Found in the Ocean, Daytime, Summer and Fall.",
      "seasons": [
        "summer",
        "fall"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        14
      ]
    },
    {
      "id": 73,
      "name": "Walleye",
      "source": "Found in Rivers, Nighttime, Fall and Winter. Only when raining.",
      "seasons": [
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        15
      ]
    },
    {
      "id": 74,
      "name": "Bream",
      "source": "Found in Rivers, Nighttime, All Seasons.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        15
      ]
    },
    {
      "id": 75,
      "name": "Eel",
      "source": "Found in the Ocean, Nighttime, Spring or Fall. Only when raining.",
      "seasons": [
        "spring",
        "fall"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        15
      ]
    },
    {
      "id": 76,
      "name": "Lobster",
      "source": "Gathered from Crab Pots.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 77,
      "name": "Crayfish",
      "source": "Gathered from Crab Pots. Rivers, Spring",
      "seasons": [
        "spring"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 78,
      "name": "Crab",
      "source": "Gathered from Crab Pots. Also drops from killing hermit crabs in The Mines.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing",
        "combat"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 79,
      "name": "Cockle",
      "source": "Gathered from Crab Pots. Can be foraged from areas with sand.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing",
        "foraging"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 80,
      "name": "Mussel",
      "source": "Gathered from Crab Pots. Can be foraged from areas with sand.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing",
        "foraging"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 81,
      "name": "Shrimp",
      "source": "Gathered from Crab Pots.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 82,
      "name": "Snail",
      "source": "Gathered from Crab Pots.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 83,
      "name": "Periwinkle",
      "source": "Gathered from Crab Pots.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 84,
      "name": "Oyster",
      "source": "Gathered from Crab Pots. Can be foraged from areas with sand.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing",
        "foraging"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 85,
      "name": "Clam",
      "source": "Gathered from Crab Pots. Can be foraged from areas with sand.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing",
        "foraging"
      ],
      "bundles": [
        16
      ]
    },
    {
      "id": 86,
      "name": "Pufferfish",
      "source": "Found in the Ocean, Early Afternoon, Summer. May also be purchased from the Traveling Cart.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        17
      ]
    },
    {
      "id": 87,
      "name": "Ghostfish",
      "source": "Found in ponds in The Mines, Anytime, All Seasons. May also be dropped by Ghosts.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing",
        "combat"
      ],
      "bundles": [
        17
      ]
    },
    {
      "id": 88,
      "name": "Sandfish",
      "source": "Found in the pond at Calico Desert. May also be purchased from the Traveling Cart.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing",
        "combat"
      ],
      "bundles": [
        17
      ]
    },
    {
      "id": 89,
      "name": "Woodskip",
      "source": "Found in the Secret Woods, Anytime, All Seasons. May also be purchased from the Traveling Cart.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        17
      ]
    },
    {
      "id": 90,
      "name": "Copper Bar",
      "source": "Smelting copper ore in the furnace.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        18
      ]
    },
    {
      "id": 91,
      "name": "Iron Bar",
      "source": "Smelting iron ore in the furnace.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        18
      ]
    },
    {
      "id": 92,
      "name": "Gold Bar",
      "source": "Smelting gold ore in the furnace.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        18
      ]
    },
    {
      "id": 93,
      "name": "Quartz",
      "source": "Found on all levels of The Mines and in geodes.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        19
      ]
    },
    {
      "id": 94,
      "name": "Earth Crystal",
      "source": "Found on levels 1 - 39 of The Mines and in geodes.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        19
      ]
    },
    {
      "id": 95,
      "name": "Frozen Tear",
      "source": "Found on levels 40 - 79 of The Mines and in geodes.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        19
      ]
    },
    {
      "id": 96,
      "name": "Fire Quartz",
      "source": "Found on levels 80 - 120 of The Mines and in magma geodes.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        19
      ]
    },
    {
      "id": 97,
      "name": "Slime (99)",
      "source": "Dropped by Slimes in The Mines.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "combat"
      ],
      "bundles": [
        20
      ]
    },
    {
      "id": 98,
      "name": "Bat Wing (10)",
      "source": "Dropped by Bats in The Mines.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "combat"
      ],
      "bundles": [
        20
      ]
    },
    {
      "id": 99,
      "name": "Solar Essence",
      "source": "Dropped by Ghosts in The Mines.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "combat"
      ],
      "bundles": [
        20
      ]
    },
    {
      "id": 100,
      "name": "Void Essence",
      "source": "Dropped by Shadow Brutes in The Mines.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "combat"
      ],
      "bundles": [
        20
      ]
    },
    {
      "id": 101,
      "name": "Fiddlehead Fern",
      "source": "Found in the Secret Woods during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        21
      ]
    },
    {
      "id": 102,
      "name": "Truffle",
      "source": "Found by pigs while grazing outdoors.",
      "seasons": [
        "spring",
        "summer",
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        21
      ]
    },
    {
      "id": 103,
      "name": "Poppy",
      "source": "Crops during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        21
      ]
    },
    {
      "id": 104,
      "name": "Maki Roll",
      "source": "Acquired by Cooking. Recipe available from the cooking channel on Summer 21 during odd years.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        21
      ]
    },
    {
      "id": 105,
      "name": "Fried Egg",
      "source": "Acquired by Cooking.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        21
      ]
    },
    {
      "id": 106,
      "name": "Sea Urchin",
      "source": "Can be foraged on the far right side of the beach, accessible after using 300 wood to fix the bridge.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        22
      ]
    },
    {
      "id": 107,
      "name": "Sunflower",
      "source": "Crops during Fall.",
      "seasons": [
        "fall"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        22
      ]
    },
    {
      "id": 108,
      "name": "Duck Feather",
      "source": "Produced by ducks in the coop (similar to how chickens and ducks lay eggs)",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        22
      ]
    },
    {
      "id": 109,
      "name": "Aquamarine",
      "source": "Can be found in stones and boxes in The Mines.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        22
      ]
    },
    {
      "id": 110,
      "name": "Red Cabbage",
      "source": "Crops during the Summer. Seeds can be purchased from Pierre's Year 2 and onward. Can be purchased from the Traveling Cart",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        22
      ]
    },
    {
      "id": 111,
      "name": "Nautilus Shell",
      "source": "Found by foraging from the beach in the Winter.",
      "seasons": [
        "winter"
      ],
      "skills": [
        "foraging"
      ],
      "bundles": [
        23
      ]
    },
    {
      "id": 112,
      "name": "Chub",
      "source": "Can be found in the mountain lake and river during all seasons.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "fishing"
      ],
      "bundles": [
        23
      ]
    },
    {
      "id": 113,
      "name": "Frozen Geode",
      "source": "Found on levels 40-79 of The Mines.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "mining"
      ],
      "bundles": [
        23
      ]
    },
    {
      "id": 114,
      "name": "Wheat (10)",
      "source": "Crops during Summer.",
      "seasons": [
        "summer"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        24
      ]
    },
    {
      "id": 115,
      "name": "Hay (10)",
      "source": "Purchased from Marnie at The Ranch or created by using the sickle on grass once you have a silo.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming"
      ],
      "bundles": [
        24
      ]
    },
    {
      "id": 117,
      "name": "Wine",
      "source": "Produced by putting most fruits into a keg.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "foraging"
      ],
      "bundles": [
        25
      ]
    },
    {
      "id": 118,
      "name": "Rabbit's Foot",
      "source": "Dropped by Rabbits in the Coop, also dropped by a Serpent in Skull Cavern (0.8%).",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "combat"
      ],
      "bundles": [
        25
      ]
    },
    {
      "id": 119,
      "name": "2,500 Gold",
      "source": "Collect 2,500 Gold and turn in.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "mining",
        "foraging",
        "fishing",
        "combat"
      ],
      "bundles": [
        26
      ]
    },
    {
      "id": 120,
      "name": "5,000 Gold",
      "source": "Collect 5,000 Gold and turn in.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "mining",
        "foraging",
        "fishing",
        "combat"
      ],
      "bundles": [
        27
      ]
    },
    {
      "id": 121,
      "name": "10,000 Gold",
      "source": "Collect 10,000 Gold and turn in.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "mining",
        "foraging",
        "fishing",
        "combat"
      ],
      "bundles": [
        28
      ]
    },
    {
      "id": 122,
      "name": "25,000 Gold",
      "source": "Collect 25,000 Gold and turn in.",
      "seasons": [
        "spring",
        "summer",
        "fall",
        "winter"
      ],
      "skills": [
        "farming",
        "mining",
        "foraging",
        "fishing",
        "combat"
      ],
      "bundles": [
        29
      ]
    }
  ],
  seasons: [
    {
      "id": "spring",
      "name": "Spring"
    },
    {
      "id": "summer",
      "name": "Summer"
    },
    {
      "id": "fall",
      "name": "Fall"
    },
    {
      "id": "winter",
      "name": "Winter"
    }
  ],
  skills: [
    {
      "id": "farming",
      "name": "Farming"
    },
    {
      "id": "mining",
      "name": "Mining"
    },
    {
      "id": "foraging",
      "name": "Foraging"
    },
    {
      "id": "fishing",
      "name": "Fishing"
    },
    {
      "id": "combat",
      "name": "Combat"
    }
  ]
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});
