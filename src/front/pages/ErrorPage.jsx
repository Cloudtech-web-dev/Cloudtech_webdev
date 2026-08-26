import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main style={{ height: "100dvh", placeContent: "center", placeItems: "center" }}>
      <h1 style={{ color: "var(--bs-gray-100)", fontSize: 50 }}>
        Woops! Something's not right... 🫠
      </h1>
      <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
        <button onClick={() => navigate(-1)} className="btn btn-outline-light btn-lg rounded-pill px-5 border-2 py-2">
          <span style={{ fontSize: "1.2em" }}>←</span>     Go Back
        </button>
        <button onClick={() => navigate(0)} className="btn btn-outline btn-lg rounded-pill px-5 border-2 py-2">
          Try again     <span style={{ fontSize: "1.2em" }}>⟳</span>
        </button>
      </div>
    </main>
  );
};
