const PUZZLES = [
  {
    movies: [
      { title: "Forrest Gump", year: 1994 },
      { title: "Cast Away", year: 2000 },
      { title: "The Green Mile", year: 1999 },
      { title: "Philadelphia", year: 1993 },
    ],
    actor: { name: "Tom Hanks", born: "1956-07-09", died: null },
  },
  {
    movies: [
      { title: "The Devil Wears Prada", year: 2006 },
      { title: "Kramer vs. Kramer", year: 1979 },
      { title: "Sophie's Choice", year: 1982 },
      { title: "The Iron Lady", year: 2011 },
    ],
    actor: { name: "Meryl Streep", born: "1949-06-22", died: null },
  },
  {
    movies: [
      { title: "Titanic", year: 1997 },
      { title: "Inception", year: 2010 },
      { title: "The Revenant", year: 2015 },
      { title: "The Wolf of Wall Street", year: 2013 },
    ],
    actor: { name: "Leonardo DiCaprio", born: "1974-11-11", died: null },
  },
  {
    movies: [
      { title: "The Shawshank Redemption", year: 1994 },
      { title: "Million Dollar Baby", year: 2004 },
      { title: "Se7en", year: 1995 },
      { title: "Bruce Almighty", year: 2003 },
    ],
    actor: { name: "Morgan Freeman", born: "1937-06-01", died: null },
  },
  {
    movies: [
      { title: "Elizabeth", year: 1998 },
      { title: "Carol", year: 2015 },
      { title: "Blue Jasmine", year: 2013 },
      { title: "The Aviator", year: 2004 },
    ],
    actor: { name: "Cate Blanchett", born: "1969-05-14", died: null },
  },
  {
    movies: [
      { title: "Training Day", year: 2001 },
      { title: "Glory", year: 1989 },
      { title: "Man on Fire", year: 2004 },
      { title: "The Equalizer", year: 2014 },
    ],
    actor: { name: "Denzel Washington", born: "1954-12-28", died: null },
  },
  {
    movies: [
      { title: "Roman Holiday", year: 1953 },
      { title: "Breakfast at Tiffany's", year: 1961 },
      { title: "My Fair Lady", year: 1964 },
      { title: "Sabrina", year: 1954 },
    ],
    actor: { name: "Audrey Hepburn", born: "1929-05-04", died: "1993-01-20" },
  },
  {
    movies: [
      { title: "The Shining", year: 1980 },
      { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
      { title: "As Good as It Gets", year: 1997 },
      { title: "A Few Good Men", year: 1992 },
    ],
    actor: { name: "Jack Nicholson", born: "1937-04-22", died: null },
  },
  {
    movies: [
      { title: "Black Swan", year: 2010 },
      { title: "Leon: The Professional", year: 1994 },
      { title: "V for Vendetta", year: 2005 },
      { title: "Jackie", year: 2016 },
    ],
    actor: { name: "Natalie Portman", born: "1981-06-09", died: null },
  },
  {
    movies: [
      { title: "Fight Club", year: 1999 },
      { title: "Se7en", year: 1995 },
      { title: "Inglourious Basterds", year: 2009 },
      { title: "Once Upon a Time in Hollywood", year: 2019 },
    ],
    actor: { name: "Brad Pitt", born: "1963-12-18", died: null },
  },
  {
    movies: [
      { title: "Joker", year: 2019 },
      { title: "Her", year: 2013 },
      { title: "Walk the Line", year: 2005 },
      { title: "Gladiator", year: 2000 },
    ],
    actor: { name: "Joaquin Phoenix", born: "1974-10-28", died: null },
  },
  {
    movies: [
      { title: "Fences", year: 2016 },
      { title: "The Help", year: 2011 },
      { title: "Doubt", year: 2008 },
      { title: "Ma Rainey's Black Bottom", year: 2020 },
    ],
    actor: { name: "Viola Davis", born: "1965-08-11", died: null },
  },
  {
    movies: [
      { title: "The Silence of the Lambs", year: 1991 },
      { title: "The Remains of the Day", year: 1993 },
      { title: "Nixon", year: 1995 },
      { title: "Amistad", year: 1997 },
    ],
    actor: { name: "Anthony Hopkins", born: "1937-12-31", died: null },
  },
  {
    movies: [
      { title: "Good Will Hunting", year: 1997 },
      { title: "Good Morning, Vietnam", year: 1987 },
      { title: "Mrs. Doubtfire", year: 1993 },
      { title: "Aladdin", year: 1992 },
    ],
    actor: { name: "Robin Williams", born: "1951-07-21", died: "2014-08-11" },
  },
  {
    movies: [
      { title: "La La Land", year: 2016 },
      { title: "The Notebook", year: 2004 },
      { title: "Drive", year: 2011 },
      { title: "Blade Runner 2049", year: 2017 },
    ],
    actor: { name: "Ryan Gosling", born: "1980-11-12", died: null },
  },
  {
    movies: [
      { title: "Alien", year: 1979 },
      { title: "Working Girl", year: 1988 },
      { title: "The Ice Storm", year: 1997 },
      { title: "Avatar", year: 2009 },
    ],
    actor: { name: "Sigourney Weaver", born: "1949-10-08", died: null },
  },
  {
    movies: [
      { title: "Pulp Fiction", year: 1994 },
      { title: "Django Unchained", year: 2012 },
      { title: "Jackie Brown", year: 1997 },
      { title: "The Hateful Eight", year: 2015 },
    ],
    actor: { name: "Samuel L. Jackson", born: "1948-12-21", died: null },
  },
  {
    movies: [
      { title: "Schindler's List", year: 1993 },
      { title: "Taken", year: 2008 },
      { title: "Batman Begins", year: 2005 },
      { title: "Star Wars: Episode I", year: 1999 },
    ],
    actor: { name: "Liam Neeson", born: "1952-06-07", died: null },
  },
  {
    movies: [
      { title: "Moulin Rouge!", year: 2001 },
      { title: "Eyes Wide Shut", year: 1999 },
      { title: "Australia", year: 2008 },
      { title: "Dogville", year: 2003 },
    ],
    actor: { name: "Nicole Kidman", born: "1967-06-20", died: null },
  },
  {
    movies: [
      { title: "Good Will Hunting", year: 1997 },
      { title: "The Martian", year: 2015 },
      { title: "The Departed", year: 2006 },
      { title: "Interstellar", year: 2014 },
    ],
    actor: { name: "Matt Damon", born: "1970-10-08", died: null },
  },
  {
    movies: [
      { title: "Black Panther", year: 2018 },
      { title: "42", year: 2013 },
      { title: "Get On Up", year: 2014 },
      { title: "Marshall", year: 2017 },
    ],
    actor: { name: "Chadwick Boseman", born: "1976-11-29", died: "2020-08-28" },
  },
];
