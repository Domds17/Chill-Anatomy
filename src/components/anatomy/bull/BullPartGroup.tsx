import React, { useState } from "react";

export default function BullPartGroup({ id, activePart, onSelect, children, title }) {
  const [hovered, setHovered] = useState(false);
  const isActive = activePart === id;

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(id)}
      style={{ cursor: "pointer" }}
    >
      <g filter={isActive ? "url(#active-glow)" : hovered ? "url(#hover-glow)" : undefined}
         opacity={isActive ? 1 : hovered ? 0.9 : 1}>
        {children}
      </g>
      {title && <title>{title}</title>}
    </g>
  );
}