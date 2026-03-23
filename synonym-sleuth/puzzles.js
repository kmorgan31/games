// tokens: { t: "shown text" } for plain words,
//         { t: "synonym", orig: "original" } for swapped words
const PUZZLES = [
  {
    word: 'EPHEMERAL', pos: 'adjective',
    tokens: [
      { t: 'Enduring', orig: 'Lasting' },
      { t: ' for a very ' },
      { t: 'brief', orig: 'short' },
      { t: ' time' }
    ]
  },
  {
    word: 'MELANCHOLY', pos: 'noun',
    tokens: [
      { t: 'A ' },
      { t: 'sensation', orig: 'feeling' },
      { t: ' of pensive ' },
      { t: 'sorrow', orig: 'sadness' },
      { t: ' with no ' },
      { t: 'apparent', orig: 'obvious' },
      { t: ' cause' }
    ]
  },
  {
    word: 'SERENDIPITY', pos: 'noun',
    tokens: [
      { t: 'The ' },
      { t: 'happening', orig: 'occurrence' },
      { t: ' of events by ' },
      { t: 'accident', orig: 'chance' },
      { t: ' in a ' },
      { t: 'fortunate', orig: 'happy' },
      { t: ' or beneficial way' }
    ]
  },
  {
    word: 'ELOQUENT', pos: 'adjective',
    tokens: [
      { t: 'Smooth', orig: 'Fluent' },
      { t: ' or ' },
      { t: 'compelling', orig: 'persuasive' },
      { t: ' in speaking or writing' }
    ]
  },
  {
    word: 'NOSTALGIA', pos: 'noun',
    tokens: [
      { t: 'Emotional', orig: 'Sentimental' },
      { t: ' ' },
      { t: 'yearning', orig: 'longing' },
      { t: ' or wistful ' },
      { t: 'fondness', orig: 'affection' },
      { t: ' for the past' }
    ]
  },
  {
    word: 'VERBOSE', pos: 'adjective',
    tokens: [
      { t: 'Using or ' },
      { t: 'stated', orig: 'expressed' },
      { t: ' in more words than are ' },
      { t: 'necessary', orig: 'needed' }
    ]
  },
  {
    word: 'AMBIGUOUS', pos: 'adjective',
    tokens: [
      { t: 'Open to more than one ' },
      { t: 'reading', orig: 'interpretation' },
      { t: '; not having one ' },
      { t: 'obvious', orig: 'clear' },
      { t: ' meaning' }
    ]
  },
  {
    word: 'TENACIOUS', pos: 'adjective',
    tokens: [
      { t: 'Keeping a ' },
      { t: 'tight', orig: 'firm' },
      { t: ' hold; ' },
      { t: 'dogged', orig: 'persistent' },
      { t: ' and ' },
      { t: 'resolute', orig: 'determined' }
    ]
  },
  {
    word: 'BENEVOLENT', pos: 'adjective',
    tokens: [
      { t: 'Well meaning and ' },
      { t: 'warmly', orig: 'kindly' },
      { t: ' ' },
      { t: 'inclined', orig: 'disposed' },
      { t: ' toward others' }
    ]
  },
  {
    word: 'RESILIENT', pos: 'adjective',
    tokens: [
      { t: 'Able to ' },
      { t: 'rebound', orig: 'recover' },
      { t: ' quickly from ' },
      { t: 'adversity', orig: 'difficulty' }
    ]
  },
  {
    word: 'WHIMSICAL', pos: 'adjective',
    tokens: [
      { t: 'Charmingly', orig: 'Playfully' },
      { t: ' ' },
      { t: 'curious', orig: 'quaint' },
      { t: ' or ' },
      { t: 'imaginative', orig: 'fanciful' },
      { t: ', especially in an appealing way' }
    ]
  },
  {
    word: 'DILIGENT', pos: 'adjective',
    tokens: [
      { t: 'Having or showing ' },
      { t: 'attention', orig: 'care' },
      { t: ' and ' },
      { t: 'thoroughness', orig: 'conscientiousness' },
      { t: ' in one\'s work' }
    ]
  },
  {
    word: 'PRAGMATIC', pos: 'adjective',
    tokens: [
      { t: 'Dealing with things ' },
      { t: 'practically', orig: 'sensibly' },
      { t: ' and ' },
      { t: 'objectively', orig: 'realistically' },
      { t: ' rather than theoretically' }
    ]
  },
  {
    word: 'FRUGAL', pos: 'adjective',
    tokens: [
      { t: 'Restrained', orig: 'Sparing' },
      { t: ' or ' },
      { t: 'thrifty', orig: 'economical' },
      { t: ' with regard to money or food' }
    ]
  },
  {
    word: 'CANDID', pos: 'adjective',
    tokens: [
      { t: 'Honest', orig: 'Truthful' },
      { t: ' and ' },
      { t: 'direct', orig: 'straightforward' },
      { t: '; ' },
      { t: 'open', orig: 'frank' }
    ]
  },
  {
    word: 'ENIGMA', pos: 'noun',
    tokens: [
      { t: 'A person or thing that is ' },
      { t: 'cryptic', orig: 'mysterious' },
      { t: ', ' },
      { t: 'baffling', orig: 'puzzling' },
      { t: ', or ' },
      { t: 'hard', orig: 'difficult' },
      { t: ' to understand' }
    ]
  },
  {
    word: 'LUCID', pos: 'adjective',
    tokens: [
      { t: 'Stated', orig: 'Expressed' },
      { t: ' ' },
      { t: 'plainly', orig: 'clearly' },
      { t: '; ' },
      { t: 'simple', orig: 'easy' },
      { t: ' to understand' }
    ]
  },
  {
    word: 'ARDENT', pos: 'adjective',
    tokens: [
      { t: 'Zealous', orig: 'Enthusiastic' },
      { t: ' or ' },
      { t: 'fervent', orig: 'passionate' }
    ]
  },
  {
    word: 'STOIC', pos: 'adjective',
    tokens: [
      { t: 'Bearing', orig: 'Enduring' },
      { t: ' pain or ' },
      { t: 'difficulty', orig: 'hardship' },
      { t: ' without showing ' },
      { t: 'emotions', orig: 'feelings' },
      { t: ' or complaining' }
    ]
  },
  {
    word: 'VIVID', pos: 'adjective',
    tokens: [
      { t: 'Producing ' },
      { t: 'intense', orig: 'powerful' },
      { t: ' feelings or ' },
      { t: 'striking', orig: 'strong' },
      { t: ' clear ' },
      { t: 'impressions', orig: 'images' },
      { t: ' in the mind' }
    ]
  },
  {
    word: 'SERENE', pos: 'adjective',
    tokens: [
      { t: 'Placid', orig: 'Calm' },
      { t: ', ' },
      { t: 'quiet', orig: 'peaceful' },
      { t: ', and ' },
      { t: 'undisturbed', orig: 'untroubled' },
      { t: '; tranquil' }
    ]
  },
  {
    word: 'PENSIVE', pos: 'adjective',
    tokens: [
      { t: 'Absorbed', orig: 'Engaged' },
      { t: ' in or reflecting deep or ' },
      { t: 'solemn', orig: 'serious' },
      { t: ' ' },
      { t: 'contemplation', orig: 'thought' }
    ]
  },
  {
    word: 'AUDACIOUS', pos: 'adjective',
    tokens: [
      { t: 'Showing a ' },
      { t: 'readiness', orig: 'willingness' },
      { t: ' to take ' },
      { t: 'daring', orig: 'bold' },
      { t: ' risks' }
    ]
  },
  {
    word: 'GREGARIOUS', pos: 'adjective',
    tokens: [
      { t: 'Keen', orig: 'Fond' },
      { t: ' on the company of others; ' },
      { t: 'outgoing', orig: 'sociable' }
    ]
  },
  {
    word: 'OBSTINATE', pos: 'adjective',
    tokens: [
      { t: 'Persistently', orig: 'Stubbornly' },
      { t: ' ' },
      { t: 'declining', orig: 'refusing' },
      { t: ' to change one\'s ' },
      { t: 'view', orig: 'opinion' }
    ]
  }
];
