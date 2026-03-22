const CATEGORIES = [
  {
    name:"Cheeses", emoji:"🧀", hint:"A type of cheese",
    words:[
      {w:"cheddar",p:1},{w:"mozzarella",p:1},{w:"parmesan",p:1},{w:"brie",p:2},
      {w:"gouda",p:2},{w:"ricotta",p:2},{w:"feta",p:2},{w:"gruyere",p:3},
      {w:"camembert",p:3},{w:"emmental",p:3},{w:"havarti",p:3},{w:"muenster",p:3},
      {w:"gorgonzola",p:3},{w:"provolone",p:3},{w:"manchego",p:3},{w:"roquefort",p:4},
      {w:"stilton",p:4},{w:"pecorino",p:4},{w:"fontina",p:4},{w:"asiago",p:4},
      {w:"colby",p:4},{w:"mascarpone",p:4},{w:"raclette",p:5},{w:"limburger",p:5},
      {w:"appenzeller",p:5}
    ],
    bombs:["velveeta","fromage","queso","rennet","whey","creamery","goatmilk","cultured","rindless","cheddarella","american","babybel","laughing","spreadable","processed"]
  },
  {
    name:"Cocktails", emoji:"🍸", hint:"A named cocktail",
    words:[
      {w:"mojito",p:1},{w:"martini",p:1},{w:"margarita",p:1},{w:"cosmopolitan",p:2},
      {w:"sangria",p:2},{w:"negroni",p:2},{w:"manhattan",p:2},{w:"daiquiri",p:2},
      {w:"bellini",p:3},{w:"julep",p:3},{w:"sling",p:3},{w:"toddy",p:3},
      {w:"spritz",p:3},{w:"paloma",p:3},{w:"shandy",p:3},{w:"sidecar",p:3},
      {w:"gimlet",p:3},{w:"sazerac",p:4},{w:"boulevardier",p:4},{w:"bramble",p:4},
      {w:"stinger",p:4},{w:"kir",p:4},{w:"caipirinha",p:4},{w:"rickey",p:4},
      {w:"cobbler",p:4}
    ],
    bombs:["champagne","prosecco","aperol","bitters","grenadine","tonic","vermouth","vodka","rum","highball","beer","wine","cider","lager","spirits"]
  },
  {
    name:"Olympic Sports", emoji:"🏅", hint:"An Olympic sport",
    words:[
      {w:"swimming",p:1},{w:"gymnastics",p:1},{w:"cycling",p:1},{w:"boxing",p:1},
      {w:"volleyball",p:1},{w:"athletics",p:1},{w:"wrestling",p:2},{w:"judo",p:2},
      {w:"archery",p:2},{w:"fencing",p:2},{w:"weightlifting",p:2},{w:"shooting",p:2},
      {w:"triathlon",p:2},{w:"handball",p:2},{w:"badminton",p:2},{w:"taekwondo",p:2},
      {w:"equestrian",p:3},{w:"kayaking",p:3},{w:"sailing",p:3},{w:"trampoline",p:3},
      {w:"skateboarding",p:3},{w:"surfing",p:3},{w:"climbing",p:3},{w:"pentathlon",p:4},
      {w:"breakdancing",p:4}
    ],
    bombs:["cricket","squash","chess","netball","darts","snooker","lacrosse","bowling","polo","kabaddi","croquet","billiards","pickleball","minigolf","sumo"]
  },
  {
    name:"Flowers", emoji:"🌸", hint:"A type of flower",
    words:[
      {w:"rose",p:1},{w:"tulip",p:1},{w:"daisy",p:1},{w:"sunflower",p:1},
      {w:"lavender",p:2},{w:"jasmine",p:2},{w:"orchid",p:2},{w:"peony",p:2},
      {w:"dahlia",p:2},{w:"iris",p:2},{w:"marigold",p:3},{w:"chrysanthemum",p:3},
      {w:"hydrangea",p:3},{w:"magnolia",p:3},{w:"wisteria",p:3},{w:"begonia",p:3},
      {w:"foxglove",p:3},{w:"camellia",p:3},{w:"freesia",p:4},{w:"ranunculus",p:4},
      {w:"anemone",p:4},{w:"delphinium",p:4},{w:"hellebore",p:4},{w:"agapanthus",p:5},
      {w:"fritillary",p:5}
    ],
    bombs:["petal","pollen","blossom","bouquet","garland","wreath","thorn","stem","sepal","pistil","nectar","florist","bloom","floral","bud"]
  },
  {
    name:"Countries", emoji:"🌍", hint:"A country",
    words:[
      {w:"france",p:1},{w:"germany",p:1},{w:"japan",p:1},{w:"brazil",p:1},
      {w:"canada",p:1},{w:"australia",p:1},{w:"mexico",p:2},{w:"argentina",p:2},
      {w:"portugal",p:2},{w:"sweden",p:2},{w:"thailand",p:2},{w:"morocco",p:2},
      {w:"colombia",p:3},{w:"vietnam",p:3},{w:"ethiopia",p:3},{w:"ukraine",p:3},
      {w:"malaysia",p:3},{w:"tanzania",p:3},{w:"ecuador",p:3},{w:"slovenia",p:4},
      {w:"uruguay",p:4},{w:"cambodia",p:4},{w:"moldova",p:4},{w:"suriname",p:5},
      {w:"vanuatu",p:5}
    ],
    bombs:["europe","africa","continent","republic","kingdom","island","peninsula","territory","province","region","catalonia","sicily","tibet","crimea","cornwall"]
  },
  {
    name:"Pasta Types", emoji:"🍝", hint:"A type of pasta",
    words:[
      {w:"spaghetti",p:1},{w:"penne",p:1},{w:"lasagne",p:1},{w:"fettuccine",p:2},
      {w:"rigatoni",p:2},{w:"fusilli",p:2},{w:"linguine",p:2},{w:"farfalle",p:2},
      {w:"ravioli",p:2},{w:"gnocchi",p:2},{w:"tortellini",p:3},{w:"tagliatelle",p:3},
      {w:"vermicelli",p:3},{w:"orzo",p:3},{w:"bucatini",p:3},{w:"ziti",p:3},
      {w:"manicotti",p:3},{w:"rotini",p:3},{w:"orecchiette",p:4},{w:"cavatappi",p:4},
      {w:"gemelli",p:4},{w:"pappardelle",p:4},{w:"conchiglie",p:4},{w:"capellini",p:4},
      {w:"maltagliati",p:5}
    ],
    bombs:["polenta","risotto","focaccia","bruschetta","couscous","arborio","semolina","biscotti","panettone","tiramisu","noodle","dumpling","ramen","udon","wonton"]
  },
  {
    name:"Card Games", emoji:"🃏", hint:"A card game",
    words:[
      {w:"poker",p:1},{w:"blackjack",p:1},{w:"solitaire",p:1},{w:"hearts",p:2},
      {w:"spades",p:2},{w:"snap",p:2},{w:"war",p:2},{w:"rummy",p:2},
      {w:"bridge",p:2},{w:"gin",p:3},{w:"baccarat",p:3},{w:"klondike",p:3},
      {w:"freecell",p:3},{w:"patience",p:3},{w:"pontoon",p:3},{w:"canasta",p:3},
      {w:"cribbage",p:3},{w:"concentration",p:3},{w:"whist",p:4},{w:"euchre",p:4},
      {w:"beggar",p:4},{w:"piquet",p:5},{w:"bezique",p:5},{w:"skat",p:5},
      {w:"pinochle",p:5}
    ],
    bombs:["chess","dominoes","tarot","checkers","scrabble","monopoly","yahtzee","backgammon","jenga","mahjong","twister","clue","risk","battleship","stratego"]
  },
  {
    name:"Gemstones", emoji:"💎", hint:"A gemstone or precious stone",
    words:[
      {w:"diamond",p:1},{w:"ruby",p:1},{w:"emerald",p:1},{w:"sapphire",p:1},
      {w:"amethyst",p:2},{w:"topaz",p:2},{w:"opal",p:2},{w:"garnet",p:2},
      {w:"turquoise",p:2},{w:"pearl",p:2},{w:"aquamarine",p:3},{w:"peridot",p:3},
      {w:"moonstone",p:3},{w:"obsidian",p:3},{w:"onyx",p:3},{w:"citrine",p:3},
      {w:"jasper",p:3},{w:"lapis",p:3},{w:"tanzanite",p:3},{w:"tourmaline",p:4},
      {w:"spinel",p:4},{w:"zircon",p:4},{w:"alexandrite",p:4},{w:"kunzite",p:5},
      {w:"rhodonite",p:5}
    ],
    bombs:["rhinestone","crystal","pyrite","feldspar","granite","marble","glass","cubic","swarovski","flint","carbon","silicon","sand","rock","pebble"]
  },
  {
    name:"Phobias", emoji:"😨", hint:"A clinical phobia name",
    words:[
      {w:"arachnophobia",p:1},{w:"claustrophobia",p:1},{w:"acrophobia",p:2},
      {w:"agoraphobia",p:2},{w:"aquaphobia",p:2},{w:"nyctophobia",p:3},
      {w:"hemophobia",p:3},{w:"pyrophobia",p:3},{w:"ophidiophobia",p:3},
      {w:"trypophobia",p:3},{w:"coulrophobia",p:4},{w:"mysophobia",p:4},
      {w:"glossophobia",p:4},{w:"cynophobia",p:4},{w:"emetophobia",p:4},
      {w:"necrophobia",p:4},{w:"nomophobia",p:4},{w:"somniphobia",p:5},
      {w:"dendrophobia",p:5},{w:"bibliophobia",p:5},{w:"gamophobia",p:4},
      {w:"pogonophobia",p:5},{w:"alektorophobia",p:5},{w:"triskaidekaphobia",p:5},
      {w:"athazagoraphobia",p:5}
    ],
    bombs:["anxiety","panic","dread","terror","vertigo","paranoia","stress","homophobia","technophobia","phobia","neurosis","mania","syndrome","disorder","trauma"]
  }
];

const TIERS = {
  1:{label:"Common",  color:"#4ade80",bg:"#052010",border:"#14532d"},
  2:{label:"Familiar",color:"#60a5fa",bg:"#05101f",border:"#1e3a5f"},
  3:{label:"Tricky",  color:"#fbbf24",bg:"#1a1005",border:"#7c4b00"},
  4:{label:"Obscure", color:"#fb923c",bg:"#1a0e05",border:"#7c2d00"},
  5:{label:"Rare!",   color:"#e879f9",bg:"#16051a",border:"#6b21a8"},
};
