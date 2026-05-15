import React from "react";

// Shared SVG defs: filters for hover/active glow
export default function SvgDefs({ hoverColor = "#F4A040", activeColor = "#FF6B00" }) {
  return (
    <defs>
      <filter id="hover-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={hoverColor} floodOpacity="0.9" />
      </filter>
      <filter id="active-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor={activeColor} floodOpacity="1" />
      </filter>
      <filter id="shadow" x="-5%" y="-5%" width="115%" height="130%">
        <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#3a1a06" floodOpacity="0.25" />
      </filter>
    </defs>
  );
}