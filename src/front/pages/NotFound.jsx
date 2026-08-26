import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main style={{ flex: 1, placeContent: "center", placeItems: "center" }}>

      <style>{`
        #root {
          height: 100dvh;
          display: flex;
          flex-direction: column;
        }
        .navbar { margin-bottom: 80px }
      `}</style>

      <h1 style={{ color: "var(--bs-gray-100)", fontSize: 50 }}>
        Not found! <code style={{ color: "currentcolor", fontSize: "1.1em" }}>404</code>
      </h1>
      <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
        <button onClick={() => navigate(-1)} className="btn btn-outline-light btn-lg rounded-pill px-5 border-2 py-2">
          <span style={{ fontSize: "1.2em" }}>←</span>     Go Back
        </button>
        <button onClick={() => navigate("/", { viewTransition: true })} className="btn btn-outline btn-lg rounded-pill px-5 border-2 py-2">
          Go Home     <span style={{ fontSize: "1.2em" }}>⌂</span>
        </button>
      </div>
      
    </main>
  );
};
