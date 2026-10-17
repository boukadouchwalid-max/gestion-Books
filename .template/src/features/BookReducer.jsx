
const initialBooks = [
  {
    id: 1,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    genre: "Conte",
    cover: "https://covers.openlibrary.org/b/id/8231856-M.jpg",
    liked: false,
    inReadingList: false,
  },
  {
    id: 2,
    title: "L'Étranger",
    author: "Albert Camus",
    year: 1942,
    genre: "Roman",
    cover: "https://covers.openlibrary.org/b/id/8231855-M.jpg",
    liked: true,
    inReadingList: false,
  },
  {
    id: 3,
    title: "Les Misérables",
    author: "Victor Hugo",
    year: 1862,
    genre: "Roman",
    cover: "https://covers.openlibrary.org/b/id/12645164-M.jpg",
    liked: false,
    inReadingList: true,
  },
];

export function bookReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, liked: !book.liked }
          : book
      );

    case "ADD_TO_READING_LIST":
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, inReadingList: true }
          : book
      );

    case "REMOVE_FROM_READING_LIST":
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, inReadingList: false }
          : book
      );

    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.payload);

    case "FILTER":
      // Le filtre est appliqué dans App.jsx.
      // Cette action conserve les données des livres.
      return state;

    default:
      return state;
  }
}

export { initialBooks };
