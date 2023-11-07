import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";

function CloseFullscreenSvg() {
  return (
    <>
      <rect x="1" y="16" width="14" height="15" stroke="currentColor" strokeWidth="2" />
      <path d="M26 5L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 13H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 13V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="2" />
    </>
  );
}

function OpenFullscreenSvg() {
  return (
    <>
      <rect x="1" y="8" width="21" height="23" stroke="currentColor" strokeWidth="2" />
      <path d="M7 24L15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 16H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="2" />
    </>
  );
}

export default function ExpandableCard({title,img}) {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: isCardExpanded ? "25rem" : "17rem",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          padding: "1.35rem 0",
          color: isCardExpanded ? "white" : "currentColor",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontWeight: 600,
              fontSize: "1.4em",
            }}
          >
            {title}
          </h3>

          <button
            style={{ position: "absolute", right: 0, zIndex: 9999 }}
            onClick={() => setIsCardExpanded(!isCardExpanded)}
          >
            <svg
              key="exclude"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isCardExpanded ? (
                <CloseFullscreenSvg />
              ) : (
                <OpenFullscreenSvg />
              )}
            </svg>
          </button>
        </div>
        <div style={{ overflowY: "none" }}>
          <img
            style={{
              width:"100%",
              height: "400px",
              objectFit: "cover",
            }}
            alt="Imagenes"
            src={img}
          />
          {isCardExpanded && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                Compra las card asi me ayuda a seguir creciendo 
              </h4>
              <p>
               Dale... compra las card ... deja de leer y colabora ajaja
              </p>
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}
