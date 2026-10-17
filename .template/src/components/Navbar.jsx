
export default function Navbar({ section, setSection }) {
  const sections = [
    { id: "all", label: "Tous les livres" },
    { id: "liked", label: "Favoris" },
    { id: "reading", label: "Ma liste de lecture" },
  ];

  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container flex-wrap gap-2">
        <span className="navbar-brand fw-bold">
           BookBox
        </span>

        <div className="d-flex flex-wrap gap-2">
          {sections.map((item) => (
            <button
              key={item.id}
              className={`btn btn-sm ${
                section === item.id
                  ? "btn-light"
                  : "btn-outline-light"
              }`}
              onClick={() => setSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
