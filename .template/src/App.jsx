
import { useState } from "react";
import  Store from "./features/Store";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import LikedBooks from "./components/LikedBooks";
import InReadingList from "./components/inReadingList";

export default function App() {
  const { books, dispatch } = Store();
  const [section, setSection] = useState("all");
  const [genre, setGenre] = useState("Tous");

  const genres = [
    "Tous",
    ...new Set(books.map((book) => book.genre)),
  ];

  let displayedBooks = books;

  if (section === "liked") {
    displayedBooks = books.filter((book) => book.liked);
  } else if (section === "reading") {
    displayedBooks = books.filter(
      (book) => book.inReadingList
    );
  }

  if (genre !== "Tous") {
    displayedBooks = displayedBooks.filter(
      (book) => book.genre === genre
    );
  }

  return (
    <>
      <Navbar section={section} setSection={setSection} />

      <main className="container py-4">
        <h1 className="mb-4">Ma bibliothèque</h1>

        <div className="mb-4">
          <label htmlFor="genre" className="form-label fw-bold">
            Filtrer par genre :
          </label>

          <select
            id="genre"
            className="form-select"
            value={genre}
            onChange={(event) => {
              setGenre(event.target.value);
              dispatch({
                type: "FILTER",
                payload: event.target.value,
              });
            }}
          >
            {genres.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {displayedBooks.length === 0 ? (
          <div className="alert alert-info">
            Aucun livre dans cette section.
          </div>
        ) : section === "liked" && genre === "Tous" ? (
          <LikedBooks books={books} dispatch={dispatch} />
        ) : section === "reading" && genre === "Tous" ? (
          <InReadingList books={books} dispatch={dispatch} />
        ) : (
          <Books books={displayedBooks} dispatch={dispatch} />
        )}
      </main>
    </>
  );
}
