"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import {
  HiArrowRight,
  HiCalendarDays,
  HiChatBubbleLeftRight,
  HiCheckBadge,
  HiClipboardDocument,
  HiEnvelope,
  HiSparkles,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaArrowTrendUp,
  FaArrowRightLong,
  FaHandshake,
  FaRocket,
} from "react-icons/fa6";
import { RiInstagramLine, RiTelegramLine, RiTwitterXLine } from "react-icons/ri";

const serviceCards = [
  {
    icon: <FaHandshake size={22} color="var(--teal)" aria-hidden />,
    title: "LinkedIn Outreach & Management",
    description:
      "Managed outreach systems focused on qualified conversations and pipeline growth.",
    bullets: [
      "Done-for-you campaign setup",
      "ICP-targeted outreach strategy",
      "Weekly performance tracking",
    ],
    ctaLabel: "Book Demo",
    ctaHref: "/demo",
  },
  {
    icon: <FaRocket size={22} color="var(--teal)" aria-hidden />,
    title: "LinkedIn Growth",
    description:
      "Scale visibility and follower growth with a safe, consistent growth framework.",
    bullets: [
      "Profile authority positioning",
      "Steady follower growth",
      "Designed for long-term brand trust",
    ],
    ctaLabel: "Buy Now",
    ctaHref: "/followers-checkout",
  },
  {
    icon: <FaArrowTrendUp size={22} color="var(--teal)" aria-hidden />,
    title: "Account Recovery Support",
    description:
      "Structured support to restore account health and reduce restriction risks.",
    bullets: [
      "Restriction diagnosis support",
      "Recovery action roadmap",
      "Preventive policy-safe best practices",
    ],
    ctaLabel: "Schedule Call",
    ctaHref: "/demo",
  },
];

const processSteps = [
  {
    title: "Audit & Positioning",
    text: "We review your profile, offer, and targeting to define a message-market fit that actually converts.",
  },
  {
    title: "Execution Setup",
    text: "Campaign structure, growth workflow, and reporting are set up around your goals and capacity.",
  },
  {
    title: "Weekly Optimization",
    text: "We refine what works, remove what does not, and keep the system healthy as results compound.",
  },
];

const whyUsCards = [
  {
    icon: <HiCheckBadge size={20} color="var(--teal)" />,
    title: "Policy-Safe Execution",
    text: "Every workflow is designed to prioritize account health, consistency, and long-term brand trust.",
  },
  {
    icon: <HiClipboardDocument size={20} color="var(--teal)" />,
    title: "Clear Reporting",
    text: "You get measurable updates on activity, conversations, and progress instead of vague promises.",
  },
  {
    icon: <HiChatBubbleLeftRight size={20} color="var(--teal)" />,
    title: "Human Strategy Support",
    text: "You are not left with a tool alone. We help translate execution into pipeline and client growth.",
  },
];

const ALL_TAGS = [
  "LinkedIn Outreach",
  "Follower Growth",
  "Account Recovery",
  "Lead Qualification",
  "Growth Strategy",
  "Policy-Safe Execution",
];

function CarouselBanner() {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (containerRef.current) {
        const total = containerRef.current.offsetWidth;
        // 4 boxes + 3 gaps of 14px
        setBoxWidth((total - 3 * 14) / 4);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setOffset((prev) => (prev + 1) % ALL_TAGS.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const slots = Array.from({ length: 5 }, (_, i) =>
    ALL_TAGS[(offset + i) % ALL_TAGS.length]
  );

  return (
    <div
      ref={containerRef}
      style={{ maxWidth: "1200px", margin: "0 auto", overflow: "hidden" }}
    >
      <div
        key={offset}
        className="carousel-track"
        style={{
          display: "flex",
          gap: "14px",
          width: boxWidth ? `${5 * boxWidth + 4 * 14}px` : "auto",
          ["--slide-amount" as string]: boxWidth ? `-${boxWidth + 14}px` : "-25%",
        }}
      >
        {slots.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
            style={{
              flexShrink: 0,
              width: boxWidth ? `${boxWidth}px` : "calc(25% - 10.5px)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "28px 20px",
              borderRadius: "16px",
              background: "var(--teal-deep)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 24px rgba(6,61,55,0.18)",
              color: "rgba(255,255,255,0.9)",
              fontFamily: "var(--font-heading, sans-serif)",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              whiteSpace: "nowrap" as const,
            }}
          >
            <span style={{ color: "var(--teal-light)", fontSize: "11px" }}>◆</span>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;

    if (!cur || !ring) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId = 0;

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cur.style.left = `${mouseX}px`;
      cur.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frameId = window.requestAnimationFrame(animateRing);
    };

    const interactiveElements = document.querySelectorAll<HTMLElement>(
      "a,button,[data-cursor='highlight']"
    );

    const growCursor = () => {
      cur.classList.add("big");
      ring.classList.add("big");
    };

    const shrinkCursor = () => {
      cur.classList.remove("big");
      ring.classList.remove("big");
    };

    document.addEventListener("mousemove", handleMove);
    frameId = window.requestAnimationFrame(animateRing);
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", growCursor);
      element.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(frameId);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", growCursor);
        element.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="cur" ref={curRef} />
      <div className="cur-ring" ref={ringRef} />

      <Navbar />

      <main>
        <section
          id="home"
          style={{
            minHeight: "100vh",
            padding: "120px 5% 72px",
            background:
              "radial-gradient(circle at top right, rgba(25,168,152,0.12), transparent 26%), var(--off)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "32px",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            <div>
              <span
                className="animate-fade-down"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  background: "var(--teal-pale)",
                  border: "1px solid var(--teal-border)",
                  color: "var(--teal-dark)",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                <HiSparkles size={14} />
                LinkedIn Growth Specialists
              </span>

              <h1
                className="animate-fade-down animate-delay-1"
                style={{
                  marginTop: "22px",
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: "clamp(42px, 6vw, 78px)",
                  lineHeight: 1.03,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--ink)",
                }}
              >
                Grow your LinkedIn presence and turn attention into qualified clients.
              </h1>

              <p
                className="animate-fade-down animate-delay-2"
                style={{
                  marginTop: "22px",
                  maxWidth: "650px",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: "18px",
                  lineHeight: 1.75,
                  color: "var(--muted)",
                }}
              >
                TechInRent helps founders, agencies, and service brands scale outreach,
                recover account health, and build trust with systems that are designed for
                consistency instead of shortcuts.
              </p>

              <div
                className="animate-fade-down animate-delay-3"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  marginTop: "34px",
                }}
              >
                <a
                  href="#contact"
                  data-cursor="highlight"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    background: "var(--teal)",
                    color: "#fff",
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontWeight: 700,
                    boxShadow: "0 10px 28px rgba(14,122,110,0.22)",
                  }}
                >
                  <HiCalendarDays size={18} />
                  Book a Free Strategy Call
                </a>
                <a
                  href="#goals"
                  data-cursor="highlight"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    background: "var(--white)",
                    color: "var(--ink)",
                    border: "1px solid var(--line)",
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontWeight: 700,
                  }}
                >
                  Explore Services
                  <HiArrowRight size={16} />
                </a>
              </div>

              <div className="hero-stats-flex" style={{ display: "flex", gap: "16px", marginTop: "42px" }}>
                {[
                  { value: "500+", label: "Clients Served" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "48h", label: "Fast Launch" },
                ].map((item) => (
                  <div
                    key={item.label}
                    data-cursor="highlight"
                    style={{
                      flex: 1,
                      minWidth: "160px",
                      padding: "20px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.92)",
                      border: "1px solid var(--line)",
                      boxShadow: "0 8px 28px rgba(13,31,30,0.05)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-heading, sans-serif)",
                        color: "var(--teal)",
                        fontSize: "28px",
                        fontWeight: 800,
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      style={{
                        marginTop: "6px",
                        fontFamily: "var(--font-body, sans-serif)",
                        color: "var(--muted)",
                        fontSize: "13px",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-cursor="highlight"
              style={{
                padding: "28px",
                borderRadius: "28px",
                background: "linear-gradient(180deg, #ffffff, #f4fbfa)",
                border: "1px solid var(--line)",
                boxShadow: "0 20px 50px rgba(13,31,30,0.08)",
              }}
            >
              <div
                style={{
                  padding: "18px",
                  borderRadius: "20px",
                  background: "var(--ink)",
                  color: "#fff",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-body, sans-serif)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.62)",
                  }}
                >
                  Weekly Outcomes
                </p>
                <h2
                  style={{
                    margin: "12px 0 0",
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "28px",
                    lineHeight: 1.2,
                  }}
                >
                  Built for pipeline, authority, and account safety.
                </h2>
              </div>

              <div style={{ display: "grid", gap: "14px", marginTop: "18px" }}>
                {[
                  "Targeted outreach that starts qualified conversations",
                  "Follower growth that strengthens your brand positioning",
                  "Recovery support with safer long-term operating habits",
                ].map((point) => (
                  <div
                    key={point}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      padding: "16px",
                      borderRadius: "16px",
                      background: "var(--white)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <HiCheckBadge size={18} color="var(--teal)" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "var(--font-body, sans-serif)",
                        color: "var(--body)",
                        lineHeight: 1.7,
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "var(--off)", padding: "28px 5%" }}>
          <CarouselBanner />
        </div>

        <section
          id="goals"
          className="reveal"
          style={{
            scrollMarginTop: "88px",
            padding: "96px 5% 104px",
            background: "linear-gradient(180deg, var(--off) 0%, #eef6f5 50%, var(--off) 100%)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: "1px solid var(--teal-border)",
                  background: "var(--white)",
                  boxShadow: "0 4px 14px rgba(14,122,110,0.08)",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--teal-dark)",
                }}
              >
                <HiSparkles size={15} color="var(--teal)" aria-hidden />
                Premium Services
              </div>
              <h2
                style={{
                  margin: "22px 0 0",
                  fontFamily: "var(--font-heading, sans-serif)",
                  fontSize: "clamp(30px, 4vw, 44px)",
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  color: "var(--ink)",
                }}
              >
                LinkedIn Growth Services
              </h2>
              <p
                style={{
                  margin: "16px 0 0",
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "var(--muted)",
                }}
              >
                Empower your professional growth with tailored services designed for measurable outcomes.
              </p>
            </div>

            <div
              className="goal-grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                alignItems: "stretch",
              }}
            >
              {serviceCards.map((service) => (
                <article
                  key={service.title}
                  data-cursor="highlight"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    padding: "28px 26px 26px",
                    borderRadius: "22px",
                    background: "var(--white)",
                    border: "1px solid var(--line)",
                    boxShadow: "0 18px 48px rgba(13,31,30,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: "linear-gradient(145deg, var(--teal-pale), var(--teal-pale2))",
                      border: "1px solid var(--teal-border)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      margin: "20px 0 0",
                      fontFamily: "var(--font-heading, sans-serif)",
                      color: "var(--ink)",
                      fontSize: "21px",
                      fontWeight: 800,
                      lineHeight: 1.25,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontFamily: "var(--font-body, sans-serif)",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      fontSize: "15px",
                    }}
                  >
                    {service.description}
                  </p>
                  <ul
                    style={{
                      margin: "20px 0 0",
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flex: 1,
                    }}
                  >
                    {service.bullets.map((bullet) => (
                      <li key={bullet} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <HiCheckBadge size={18} color="var(--teal)" style={{ marginTop: "3px", flexShrink: 0 }} aria-hidden />
                        <span
                          style={{
                            fontFamily: "var(--font-body, sans-serif)",
                            color: "var(--body)",
                            lineHeight: 1.55,
                            fontSize: "14px",
                          }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.ctaHref}
                    className="service-cta-link"
                    data-cursor="highlight"
                    style={{
                      marginTop: "28px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      width: "100%",
                      padding: "14px 20px",
                      borderRadius: "12px",
                      background: "var(--ink)",
                      color: "#fff",
                      fontFamily: "var(--font-heading, sans-serif)",
                      fontSize: "12px",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      boxShadow: "0 10px 28px rgba(13,31,30,0.2)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
                    }}
                  >
                    {service.ctaLabel}
                    <FaArrowRightLong size={14} aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="reveal" style={{ padding: "96px 5%", background: "var(--white)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p
              style={{
                margin: 0,
                color: "var(--teal)",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
            >
              Process
            </p>
            <h2
              style={{
                margin: "12px 0 0",
                maxWidth: "760px",
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.08,
                color: "var(--ink)",
              }}
            >
              A simple workflow designed to move from strategy to measurable execution fast.
            </h2>

            <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "38px" }}>
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  data-cursor="highlight"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "28px",
                    borderRadius: "20px",
                    background: "var(--off)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "999px",
                      background: "var(--white)",
                      border: "1px solid var(--teal-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-heading, sans-serif)",
                      color: "var(--teal)",
                      fontWeight: 800,
                    }}
                  >
                    0{index + 1}
                  </div>
                  <h3
                    style={{
                      margin: "18px 0 0",
                      fontFamily: "var(--font-heading, sans-serif)",
                      fontSize: "22px",
                      color: "var(--ink)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      fontFamily: "var(--font-body, sans-serif)",
                      color: "var(--muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="reveal" style={{ padding: "96px 5%", background: "var(--off)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="why-grid-2" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "28px", alignItems: "start" }}>
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "var(--teal)",
                    fontFamily: "var(--font-body, sans-serif)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                >
                  Why TechInRent
                </p>
                <h2
                  style={{
                    margin: "12px 0 0",
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    lineHeight: 1.08,
                    color: "var(--ink)",
                  }}
                >
                  Reliable systems, cleaner communication, and execution that respects your account.
                </h2>
              </div>

              <div style={{ display: "grid", gap: "18px" }}>
                {whyUsCards.map((card) => (
                  <article
                    key={card.title}
                    className="why-card"
                    data-cursor="highlight"
                    style={{
                      padding: "24px",
                      borderRadius: "18px",
                      background: "var(--white)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
                          background: "var(--teal-pale)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {card.icon}
                      </div>
                      <div>
                        <h3
                          style={{
                            margin: 0,
                            fontFamily: "var(--font-heading, sans-serif)",
                            fontSize: "20px",
                            color: "var(--ink)",
                          }}
                        >
                          {card.title}
                        </h3>
                        <p
                          style={{
                            margin: "8px 0 0",
                            fontFamily: "var(--font-body, sans-serif)",
                            color: "var(--muted)",
                            lineHeight: 1.75,
                          }}
                        >
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="reveal" style={{ padding: "96px 5%", background: "var(--white)" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "32px",
              borderRadius: "28px",
              background: "linear-gradient(135deg, var(--ink), var(--teal-deep))",
              color: "#fff",
              boxShadow: "0 18px 50px rgba(6,61,55,0.24)",
            }}
          >
            <div className="contact-wrap-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", alignItems: "center" }}>
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.72)",
                    fontFamily: "var(--font-body, sans-serif)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                >
                  Contact
                </p>
                <h2
                  style={{
                    margin: "12px 0 0",
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: "clamp(30px, 4vw, 46px)",
                    lineHeight: 1.1,
                  }}
                >
                  Want a tailored plan for outreach, growth, or recovery?
                </h2>
                <p
                  style={{
                    margin: "16px 0 0",
                    fontFamily: "var(--font-body, sans-serif)",
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.8)",
                    maxWidth: "560px",
                  }}
                >
                  Reach out on the platform you prefer and we will help map the next best step
                  for your LinkedIn growth.
                </p>
              </div>

              <div className="contact-grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
                {[
                  {
                    href: "mailto:hello@techinrent.com",
                    icon: <HiEnvelope size={18} />,
                    title: "Email",
                    text: "hello@techinrent.com",
                  },
                  {
                    href: "https://wa.me/917898711748",
                    icon: <FaWhatsapp size={18} />,
                    title: "WhatsApp",
                    text: "+91 78987 11748",
                  },
                  {
                    href: "https://t.me/techinrentadmin",
                    icon: <RiTelegramLine size={18} />,
                    title: "Telegram",
                    text: "@techinrentadmin",
                  },
                  {
                    href: "https://twitter.com/techinrent",
                    icon: <RiTwitterXLine size={18} />,
                    title: "X / Twitter",
                    text: "@techinrent",
                  },
                  {
                    href: "https://instagram.com/techinrent",
                    icon: <RiInstagramLine size={18} />,
                    title: "Instagram",
                    text: "@techinrent",
                  },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    data-cursor="highlight"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      padding: "18px",
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-heading, sans-serif)", fontWeight: 700 }}>
                      {item.icon}
                      {item.title}
                    </div>
                    <div
                      style={{
                        marginTop: "10px",
                        fontFamily: "var(--font-body, sans-serif)",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.6,
                        wordBreak: "break-word",
                      }}
                    >
                      {item.text}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
