
import Books from "./Books";

export default function LikedBooks({ books, dispatch }) {
  const likedBooks = books.filter((book) => book.liked);

  return <Books books={likedBooks} dispatch={dispatch} />;
}
