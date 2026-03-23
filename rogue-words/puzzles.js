// Each token: { w: display word, post: text after word, type?: "misspelled"|"swapped", orig?: correct word }
// Tokens with no type (or type omitted) are correct.

const PUZZLES = [
  {
    // 1. Morning Rush — 3 errors
    tokens: [
      { w: "She", post: " " },
      { w: "hastily", post: " ", type: "swapped", orig: "quickly" },
      { w: "ran", post: " " },
      { w: "to", post: " " },
      { w: "the", post: " " },
      { w: "corner", post: " " },
      { w: "store", post: " " },
      { w: "to", post: " " },
      { w: "buy", post: " " },
      { w: "some", post: " " },
      { w: "fresch", post: " ", type: "misspelled", orig: "fresh" },
      { w: "bread", post: " " },
      { w: "before", post: " " },
      { w: "it", post: " " },
      { w: "shut", post: ".", type: "swapped", orig: "closed" }
    ]
  },
  {
    // 2. The Dog Walk — 3 errors
    tokens: [
      { w: "The", post: " " },
      { w: "enormous", post: " ", type: "swapped", orig: "big" },
      { w: "brown", post: " " },
      { w: "dog", post: " " },
      { w: "tugged", post: " " },
      { w: "on", post: " " },
      { w: "its", post: " " },
      { w: "leash", post: " " },
      { w: "and", post: " " },
      { w: "barked", post: " " },
      { w: "at", post: " " },
      { w: "every", post: " " },
      { w: "stranger", post: ", " },
      { w: "wagging", post: " " },
      { w: "its", post: " " },
      { w: "tale", post: " ", type: "misspelled", orig: "tail" },
      { w: "enthusiastically", post: ".", type: "swapped", orig: "eagerly" }
    ]
  },
  {
    // 3. Storm Rolling In — 4 errors
    tokens: [
      { w: "Dark", post: " " },
      { w: "storm", post: " " },
      { w: "clouds", post: " " },
      { w: "gatherd", post: " ", type: "misspelled", orig: "gathered" },
      { w: "on", post: " " },
      { w: "the", post: " " },
      { w: "horizon", post: ", " },
      { w: "and", post: " " },
      { w: "a", post: " " },
      { w: "chilly", post: " ", type: "swapped", orig: "cold" },
      { w: "gust", post: " ", type: "swapped", orig: "breeze" },
      { w: "swept", post: " " },
      { w: "through", post: " " },
      { w: "the", post: " " },
      { w: "tranquil", post: " ", type: "swapped", orig: "quiet" },
      { w: "streets", post: " " },
      { w: "below", post: "." }
    ]
  },
  {
    // 4. In the Library — 4 errors
    tokens: [
      { w: "She", post: " " },
      { w: "sat", post: " " },
      { w: "in", post: " " },
      { w: "the", post: " " },
      { w: "libary", post: " ", type: "misspelled", orig: "library" },
      { w: "for", post: " " },
      { w: "hours", post: ", " },
      { w: "completly", post: " ", type: "misspelled", orig: "completely" },
      { w: "immersed", post: " ", type: "swapped", orig: "absorbed" },
      { w: "in", post: " " },
      { w: "her", post: " " },
      { w: "book", post: ", " },
      { w: "unaware", post: " ", type: "swapped", orig: "oblivious" },
      { w: "of", post: " " },
      { w: "every", post: " " },
      { w: "sound", post: " " },
      { w: "around", post: " " },
      { w: "her", post: "." }
    ]
  },
  {
    // 5. At the Restaurant — 4 errors
    tokens: [
      { w: "The", post: " " },
      { w: "waiter", post: " " },
      { w: "recomended", post: " ", type: "misspelled", orig: "recommended" },
      { w: "the", post: " " },
      { w: "charred", post: " ", type: "swapped", orig: "grilled" },
      { w: "salmon", post: ", " },
      { w: "which", post: " " },
      { w: "arrived", post: " " },
      { w: "piping", post: " " },
      { w: "hot", post: " " },
      { w: "and", post: " " },
      { w: "was", post: " " },
      { w: "acompanied", post: " ", type: "misspelled", orig: "accompanied" },
      { w: "by", post: " " },
      { w: "fresh", post: " " },
      { w: "greens", post: ".", type: "swapped", orig: "vegetables" }
    ]
  },
  {
    // 6. The Long Journey — 4 errors
    tokens: [
      { w: "After", post: " " },
      { w: "a", post: " " },
      { w: "lengthy", post: " ", type: "swapped", orig: "long" },
      { w: "journey", post: " " },
      { w: "by", post: " " },
      { w: "train", post: ", " },
      { w: "they", post: " " },
      { w: "finaly", post: " ", type: "misspelled", orig: "finally" },
      { w: "arrived", post: " " },
      { w: "at", post: " " },
      { w: "their", post: " " },
      { w: "destinaton", post: ", ", type: "misspelled", orig: "destination" },
      { w: "exhausted", post: " " },
      { w: "but", post: " " },
      { w: "elated", post: ".", type: "swapped", orig: "thrilled" }
    ]
  },
  {
    // 7. The Old Oak — 4 errors
    tokens: [
      { w: "The", post: " " },
      { w: "elderly", post: " ", type: "swapped", orig: "old" },
      { w: "oak", post: " " },
      { w: "tree", post: " " },
      { w: "stood", post: " " },
      { w: "at", post: " " },
      { w: "the", post: " " },
      { w: "edge", post: " " },
      { w: "of", post: " " },
      { w: "the", post: " " },
      { w: "medow", post: ", ", type: "misspelled", orig: "meadow" },
      { w: "its", post: " " },
      { w: "limbs", post: " ", type: "swapped", orig: "branches" },
      { w: "streatching", post: " ", type: "misspelled", orig: "stretching" },
      { w: "towards", post: " " },
      { w: "the", post: " " },
      { w: "pale", post: " " },
      { w: "morning", post: " " },
      { w: "sky", post: "." }
    ]
  },
  {
    // 8. Software Update — 4 errors
    tokens: [
      { w: "The", post: " " },
      { w: "new", post: " " },
      { w: "softwear", post: " ", type: "misspelled", orig: "software" },
      { w: "update", post: " " },
      { w: "introduced", post: " " },
      { w: "several", post: " " },
      { w: "improvments", post: ", ", type: "misspelled", orig: "improvements" },
      { w: "making", post: " " },
      { w: "the", post: " " },
      { w: "interface", post: " " },
      { w: "considerably", post: " ", type: "swapped", orig: "much" },
      { w: "more", post: " " },
      { w: "intuative", post: ".", type: "misspelled", orig: "intuitive" }
    ]
  },
  {
    // 9. Cooking Dinner — 4 errors
    tokens: [
      { w: "She", post: " " },
      { w: "carefuly", post: " ", type: "misspelled", orig: "carefully" },
      { w: "diced", post: " ", type: "swapped", orig: "chopped" },
      { w: "the", post: " " },
      { w: "onions", post: " " },
      { w: "and", post: " " },
      { w: "garlic", post: " " },
      { w: "before", post: " " },
      { w: "cooking", post: " " },
      { w: "them", post: " " },
      { w: "in", post: " " },
      { w: "a", post: " " },
      { w: "generous", post: " ", type: "swapped", orig: "large" },
      { w: "amout", post: " ", type: "misspelled", orig: "amount" },
      { w: "of", post: " " },
      { w: "olive", post: " " },
      { w: "oil", post: "." }
    ]
  },
  {
    // 10. Concert Night — 3 errors
    tokens: [
      { w: "The", post: " " },
      { w: "orchestra", post: " " },
      { w: "perfomed", post: " ", type: "misspelled", orig: "performed" },
      { w: "a", post: " " },
      { w: "breathtaking", post: " " },
      { w: "rendition", post: " ", type: "swapped", orig: "performance" },
      { w: "of", post: " " },
      { w: "the", post: " " },
      { w: "symphony", post: ", " },
      { w: "filling", post: " " },
      { w: "the", post: " " },
      { w: "concert", post: " " },
      { w: "hall", post: " " },
      { w: "with", post: " " },
      { w: "rich", post: " " },
      { w: "and", post: " " },
      { w: "melodius", post: " ", type: "misspelled", orig: "melodious" },
      { w: "sound", post: "." }
    ]
  }
];
