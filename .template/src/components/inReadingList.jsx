
import Books from "./Books";

export default function InReadingList({ books, dispatch }) {
  const readingBooks = books.filter(
    (book) => book.inReadingList
  );

  return <Books books={readingBooks} dispatch={dispatch} />;
}
