import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", padding: "64px 5% 32px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "60px",
          paddingBottom: "48px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="footer-grid-cols"
      >
        {/* Brand */}
        <div>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, var(--teal), var(--teal-dark))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-syne, sans-serif)",
              fontWeight: 800,
              color: "#fff",
              fontSize: "14px",
              marginBottom: "14px",
            }}
          >
            TR
          </div>
          <span
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontWeight: 700,
              fontSize: "17px",
              color: "#fff",
              display: "block",
              marginBottom: "14px",
            }}
          >
            TechInRent
          </span>
          <p
            style={{
              fontFamily: "var(--font-outfit, sans-serif)",
              fontSize: "13.5px",
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.8,
              maxWidth: "280px",
              fontWeight: 300,
            }}
          >
            We help professionals and teams accelerate LinkedIn growth through secure outreach systems, transparent reporting, and measurable outcomes.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "20px",
            }}
          >
            Navigation
          </h4>
          {[
            { label: "Services", href: "/#goals" },
            { label: "How It Works", href: "/#how" },
            { label: "Why Us", href: "/#why" },
            { label: "Contact", href: "/#contact" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontFamily: "var(--font-outfit, sans-serif)",
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "20px",
            }}
          >
            Contact
          </h4>
          {[
            { label: "hello@techinrent.com", href: "mailto:hello@techinrent.com" },
            { label: "Telegram", href: "https://t.me/techinrentadmin" },
            { label: "WhatsApp", href: "https://wa.me/917898711748" },
            { label: "Twitter / X", href: "https://twitter.com/techinrent" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontFamily: "var(--font-outfit, sans-serif)",
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          paddingTop: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-outfit, sans-serif)",
            fontSize: "12.5px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          © 2025 TechInRent. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "var(--font-outfit, sans-serif)",
            fontSize: "12.5px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          LinkedIn Growth — Done Right{" "}
          <span style={{ color: "var(--teal-light)" }}>◆</span>
        </span>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-grid-cols { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
