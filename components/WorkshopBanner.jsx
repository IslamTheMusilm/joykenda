// Workshop registration banner for the joykenda.com home page.
// Drop this file into the project's `components` folder (create it if missing),
// then add <WorkshopBanner /> to the home page. See the steps sent with this file.
// Uses inline styles only, so it works with or without Tailwind.

export default function WorkshopBanner() {
  const gold = "#C9A45C";
  return (
    <section
      style={{
        background: "#0B0A08",
        color: "#F3EBDD",
        padding: "48px 16px",
        borderTop: `1px solid ${gold}`,
        borderBottom: `1px solid ${gold}`,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <p style={{ margin: 0, fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: gold }}>
          Fairmont Ajman &amp; Joykenda Fine Arts Company
        </p>
        <h2 style={{ margin: 0, fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(32px, 6vw, 52px)", lineHeight: 1.1 }}>
          Fine Arts Workshops
        </h2>
        <p style={{ margin: 0, fontSize: 18, color: "#D9CDB6" }}>
          Glass, Silk, Watercolour &amp; Oil Painting &middot; 9 &ndash; 12 October 2026 &middot; Daily 4:00 &ndash; 5:00 PM
        </p>
        <p style={{ margin: 0, fontSize: 15, color: "#B8AC97" }}>
          Free participation &middot; Keep your artwork &middot; Prizes for the best work &middot; Led by artist Mona Jebali
        </p>
        <a
          href="/register.html"
          style={{
            marginTop: 10,
            display: "inline-block",
            padding: "15px 34px",
            background: "linear-gradient(180deg,#D9B56C,#B8924A)",
            color: "#15100A",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Register now
        </a>
      </div>
    </section>
  );
}
