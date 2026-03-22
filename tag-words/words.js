const PUZZLES = {
  3: [
    { theme: "a seed grows into a tree", chain: [
      { word:"seed", clue:"Tiny package from which a plant grows", letters:4 },
      { word:"dirt", clue:"The loose soil you dig in a garden", letters:4 },
      { word:"tree", clue:"Tall woody plant with branches and leaves", letters:4 }
    ]},
    { theme: "both creatures of darkness and the wild", chain: [
      { word:"wolf", clue:"Wild howling pack animal, cousin to the dog", letters:4 },
      { word:"fawn", clue:"A newborn deer with a spotted coat", letters:4 },
      { word:"night", clue:"The dark hours after sunset", letters:5 }
    ]},
    { theme: "both part of the sea", chain: [
      { word:"tide", clue:"The daily rise and fall of the sea", letters:4 },
      { word:"echo", clue:"A sound that bounces back to you", letters:4 },
      { word:"ocean", clue:"The vast body of salt water covering the earth", letters:5 }
    ]},
    { theme: "both found in trees", chain: [
      { word:"leaf", clue:"Flat green part of a plant that catches sunlight", letters:4 },
      { word:"fern", clue:"A leafy plant that loves damp and shade", letters:4 },
      { word:"nest", clue:"A bird's cosy home woven from twigs", letters:4 }
    ]},
    { theme: "both part of a stormy day", chain: [
      { word:"rain", clue:"Water droplets falling from clouds", letters:4 },
      { word:"noon", clue:"The middle of the day when shadows are shortest", letters:4 },
      { word:"night", clue:"The dark part of the day after sunset", letters:5 }
    ]}
  ],
  5: [
    { theme: "both associated with warmth and shelter", chain: [
      { word:"flame", clue:"A burning tongue of fire", letters:5 },
      { word:"edge",  clue:"The sharp boundary where something ends", letters:4 },
      { word:"ember", clue:"A glowing fragment from a dying fire", letters:5 },
      { word:"robin", clue:"Small bird with a red breast", letters:5 },
      { word:"nest",  clue:"A structure birds build from twigs to raise young", letters:4 }
    ]},
    { theme: "both found at the ocean's edge", chain: [
      { word:"shore", clue:"Where the land meets the sea", letters:5 },
      { word:"echo",  clue:"A reflected sound that repeats", letters:4 },
      { word:"ocean", clue:"The vast body of salt water", letters:5 },
      { word:"nook",  clue:"A small hidden sheltered corner", letters:4 },
      { word:"kelp",  clue:"A tall seaweed found in cold coastal waters", letters:4 }
    ]},
    { theme: "the moon controls the ocean tides", chain: [
      { word:"moon",  clue:"The bright orb that lights the night sky", letters:4 },
      { word:"north", clue:"The direction a compass needle points", letters:5 },
      { word:"haze",  clue:"A thin mist that blurs the air", letters:4 },
      { word:"echo",  clue:"A sound that bounces back from a surface", letters:4 },
      { word:"ocean", clue:"Vast salt water covering most of the earth", letters:5 }
    ]},
    { theme: "both found in woodland", chain: [
      { word:"robin", clue:"A small bird with an orange-red breast", letters:5 },
      { word:"nest",  clue:"A birds's home made from twigs and grass", letters:4 },
      { word:"twig",  clue:"A thin small branch snapped from a tree", letters:4 },
      { word:"grove", clue:"A small cluster of trees", letters:5 },
      { word:"elder", clue:"A shrub with white flowers and dark berries", letters:5 }
    ]},
    { theme: "both powerful and elemental", chain: [
      { word:"storm", clue:"Violent weather with strong wind and rain", letters:5 },
      { word:"maple", clue:"A tree famous for its leaf-shaped symbol and sweet syrup", letters:5 },
      { word:"earth", clue:"The soil beneath your feet; also our planet", letters:5 },
      { word:"hedge", clue:"A row of closely planted shrubs forming a boundary", letters:5 },
      { word:"ember", clue:"A glowing piece of a dying fire", letters:5 }
    ]}
  ],
  7: [
    { theme: "both parts of a flowering plant", chain: [
      { word:"petal",  clue:"One of the coloured parts of a flower", letters:5 },
      { word:"lark",   clue:"A small songbird known for soaring and singing", letters:4 },
      { word:"kneel",  clue:"To rest your weight on one or both knees", letters:5 },
      { word:"lemon",  clue:"A sour yellow citrus fruit", letters:5 },
      { word:"nook",   clue:"A small hidden or sheltered corner", letters:4 },
      { word:"knoll",  clue:"A small rounded grassy hill", letters:5 },
      { word:"lily",   clue:"A tall flower with large trumpet-shaped blooms", letters:4 }
    ]},
    { theme: "both signs of the British countryside", chain: [
      { word:"spring", clue:"The season after winter when flowers bloom", letters:6 },
      { word:"grove",  clue:"A small peaceful cluster of trees", letters:5 },
      { word:"elder",  clue:"A shrub whose berries are used to make cordial", letters:5 },
      { word:"robin",  clue:"A small bird with a red breast", letters:5 },
      { word:"nest",   clue:"A structure birds weave to hold their eggs", letters:4 },
      { word:"twig",   clue:"A thin small branch from a tree", letters:4 },
      { word:"grass",  clue:"The green blades covering lawns and meadows", letters:5 }
    ]},
    { theme: "both biting moments in a winter's day", chain: [
      { word:"frost",  clue:"A thin layer of ice crystals that forms overnight", letters:5 },
      { word:"thorn",  clue:"A sharp spike on a rose stem", letters:5 },
      { word:"night",  clue:"The dark hours after sunset", letters:5 },
      { word:"tide",   clue:"The regular rise and fall of the sea", letters:4 },
      { word:"ember",  clue:"A glowing piece of a dying fire", letters:5 },
      { word:"rain",   clue:"Water falling from clouds", letters:4 },
      { word:"noon",   clue:"Midday — when the sun is at its highest", letters:4 }
    ]},
    { theme: "both vast and mysterious", chain: [
      { word:"ocean",  clue:"The vast body of salt water covering the earth", letters:5 },
      { word:"nook",   clue:"A small hidden corner", letters:4 },
      { word:"kelp",   clue:"A tall brown seaweed that forms underwater forests", letters:4 },
      { word:"pine",   clue:"An evergreen tree with needle-like leaves", letters:4 },
      { word:"ember",  clue:"A glowing fragment from a dying fire", letters:5 },
      { word:"rain",   clue:"Water droplets falling from the sky", letters:4 },
      { word:"north",  clue:"The direction toward the pole; cold and remote", letters:5 }
    ]},
    { theme: "both associated with a peaceful morning", chain: [
      { word:"bread",  clue:"A baked loaf made from flour and water", letters:5 },
      { word:"dusk",   clue:"The soft twilight just after sunset", letters:4 },
      { word:"kneel",  clue:"To lower yourself onto your knees", letters:5 },
      { word:"lemon",  clue:"A sharp-tasting yellow citrus fruit", letters:5 },
      { word:"nook",   clue:"A cosy hidden corner", letters:4 },
      { word:"knoll",  clue:"A small gentle hill", letters:5 },
      { word:"lark",   clue:"A bird famous for singing at dawn", letters:4 }
    ]}
  ]
};
