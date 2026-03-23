const PUZZLES = {
  3: [
    { theme: "a seed grows into a tree", chain: [
      { word:"seed", clue:"Tiny package from which a plant grows", letters:4 },
      { word:"dirt", clue:"The loose soil you dig in a garden", letters:4 },
      { word:"tree", clue:"Tall woody plant with branches and leaves", letters:4 }
    ]},
    { theme: "all creatures of the wild", chain: [
      { word:"wolf", clue:"Wild howling pack animal, cousin to the dog", letters:4 },
      { word:"fawn", clue:"A newborn deer with a spotted coat", letters:4 },
      { word:"newt", clue:"A small amphibian that lurks in ponds and damp woodland", letters:4 }
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
    { theme: "both lights in the night sky", chain: [
      { word:"moon", clue:"The silvery orb that orbits the Earth and rules the tides", letters:4 },
      { word:"nova", clue:"A star that suddenly blazes with intense brightness", letters:4 },
      { word:"aurora", clue:"Shimmering curtains of colour that dance near the poles", letters:6 }
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
    { theme: "both found by the river", chain: [
      { word:"otter", clue:"A sleek, playful mammal that hunts fish in rivers and streams", letters:5 },
      { word:"reed",  clue:"A tall slender grass that fringes rivers and marshes", letters:4 },
      { word:"duck",  clue:"A waterbird with a wide flat bill and webbed feet", letters:4 },
      { word:"kite",  clue:"A fork-tailed bird of prey that soars on thermals", letters:4 },
      { word:"egret", clue:"A slender white wading bird that stands motionless in shallows", letters:5 }
    ]}
  ],
  7: [
    { theme: "both found in a summer meadow", chain: [
      { word:"poppy",  clue:"A blood-red wildflower with papery petals that dots summer fields", letters:5 },
      { word:"yarrow", clue:"A feathery-leaved wildflower with flat-topped clusters of tiny blooms", letters:6 },
      { word:"wren",   clue:"Britain's tiniest bird, with a surprisingly loud song", letters:4 },
      { word:"nectar", clue:"The sweet liquid bees gather from flower to flower", letters:6 },
      { word:"rabbit", clue:"A long-eared grazer that nibbles the meadow grass at dusk", letters:6 },
      { word:"toad",   clue:"A warty amphibian that hides in the damp corners of the meadow", letters:4 },
      { word:"daisy",  clue:"The cheerful white flower you pick to make a chain", letters:5 }
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
    { theme: "both sensations of a bitter winter", chain: [
      { word:"frost",  clue:"A thin layer of ice crystals that forms overnight", letters:5 },
      { word:"thorn",  clue:"A sharp spike on a rose stem", letters:5 },
      { word:"night",  clue:"The dark hours after sunset", letters:5 },
      { word:"tide",   clue:"The regular rise and fall of the sea", letters:4 },
      { word:"ember",  clue:"A glowing piece of a dying fire", letters:5 },
      { word:"rain",   clue:"Water falling from clouds", letters:4 },
      { word:"numb",   clue:"The creeping loss of feeling when cold bites through", letters:4 }
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
