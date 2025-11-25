import "./App.css";

export default function App() {
  const handleClick = () => {
    alert(12345);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        background: "#f3f3f3",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: "600" }}>
        A live site example
      </h1>
      <button
        onClick={handleClick}
        style={{
          padding: "12px 24px",
          background: "#007bff",
          color: "#fff",
          borderRadius: "12px",
          fontSize: "18px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}
