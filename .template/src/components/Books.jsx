
import BookCard from "./BookCard";

export default function Books({ books, dispatch }) {
  return books.map((book) => (
    <BookCard key={book.id} book={book} dispatch={dispatch} />
  ));
}
