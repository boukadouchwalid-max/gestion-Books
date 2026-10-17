
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookCard({ book, dispatch }) {
  return (
    <div className="card mb-3 shadow-sm book-card">
      <div className="row g-0">
        <div className="col-4 col-md-3">
          <img
            src={book.cover}
            className="img-fluid rounded-start book-cover"
            alt={`Couverture de ${book.title}`}
          />
        </div>

        <div className="col-8 col-md-9">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>

            <p className="card-text">
              <strong>Auteur :</strong> {book.author}
            </p>

            <p className="card-text">
              <strong>Année :</strong> {book.year}
            </p>

            <p className="card-text">
              <strong>Genre :</strong> {book.genre}
            </p>

            <div className="d-flex flex-wrap gap-2">
              <button
                className={`btn btn-sm ${
                  book.liked ? "btn-danger" : "btn-outline-danger"
                }`}
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_LIKE",
                    payload: book.id,
                  })
                }
              >
                {book.liked ? " Favori" : " Ajouter aux favoris"}
              </button>

              {book.inReadingList ? (
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_READING_LIST",
                      payload: book.id,
                    })
                  }
                >
                  Retirer de ma liste
                </button>
              ) : (
                <button
                  className="btn btn-sm btn-success"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_READING_LIST",
                      payload: book.id,
                    })
                  }
                >
                  Ajouter à ma liste
                </button>
              )}

              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  if (
                    window.confirm(
                      `Supprimer "${book.title}" ?`
                    )
                  ) {
                    dispatch({
                      type: "REMOVE_BOOK",
                      payload: book.id,
                    });
                  }
                }}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
