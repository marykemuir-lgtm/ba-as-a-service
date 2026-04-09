/*
 * Illustrations.tsx — Scoped Consulting
 * Hand-drawn line-art SVG illustrations, brand palette only
 * stroke: #0d1117 (navy), #4a6cf7 (blue), #d4c9b0 (sand)
 */

const S = "#0d1117";
const B = "#4a6cf7";
const D = "#8a7d6b";
const LP = "round";

/* ── Scene 01: The GAP — homepage hero ── */
export function IllustrationGap({ width = 480 }: { width?: number }) {
  return (
    <svg width={width} viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Left figure — confident, idea in head */}
      <g strokeLinecap={LP} strokeLinejoin={LP}>
        <circle cx="80" cy="72" r="24" stroke={S} strokeWidth="1.4"/>
        {/* face */}
        <path d="M70 68 Q80 62 90 68" stroke={S} strokeWidth="1"/>
        <circle cx="74" cy="73" r="1.5" fill={S}/>
        <circle cx="86" cy="73" r="1.5" fill={S}/>
        <path d="M74 80 Q80 85 86 80" stroke={S} strokeWidth="1"/>
        {/* lightbulb thought */}
        <circle cx="110" cy="42" r="14" stroke={B} strokeWidth="1.2"/>
        <path d="M105 52 L115 52" stroke={B} strokeWidth="1"/>
        <path d="M107 56 L113 56" stroke={B} strokeWidth="1"/>
        <path d="M110 38 L110 30" stroke={B} strokeWidth="1" strokeDasharray="2 2"/>
        <path d="M104 40 L98 35" stroke={B} strokeWidth="1" strokeDasharray="2 2"/>
        <path d="M116 40 L122 35" stroke={B} strokeWidth="1" strokeDasharray="2 2"/>
        <path d="M92 62 C94 52 102 48 110 42" stroke={D} strokeWidth="0.8" strokeDasharray="3 2"/>
        {/* body */}
        <line x1="80" y1="96" x2="80" y2="148" stroke={S} strokeWidth="1.4"/>
        <line x1="80" y1="114" x2="55" y2="132" stroke={S} strokeWidth="1.4"/>
        <line x1="80" y1="114" x2="108" y2="126" stroke={S} strokeWidth="1.4"/>
        <line x1="80" y1="148" x2="65" y2="178" stroke={S} strokeWidth="1.4"/>
        <line x1="80" y1="148" x2="95" y2="178" stroke={S} strokeWidth="1.4"/>
        {/* document in hand */}
        <rect x="108" y="116" width="44" height="54" rx="2" stroke={S} strokeWidth="1"/>
        <line x1="116" y1="130" x2="144" y2="130" stroke={D} strokeWidth="0.8"/>
        <line x1="116" y1="138" x2="144" y2="138" stroke={D} strokeWidth="0.8"/>
        <line x1="116" y1="146" x2="136" y2="146" stroke={D} strokeWidth="0.8"/>
        <line x1="116" y1="154" x2="141" y2="154" stroke={D} strokeWidth="0.8"/>
        <rect x="116" y="121" width="28" height="6" rx="1" stroke={B} strokeWidth="0.8"/>
        <text x="130" y="126" fontFamily="Georgia, serif" fontSize="5" fill={B} textAnchor="middle">requirements</text>
      </g>

      {/* GAP zone — centre */}
      <g strokeLinecap={LP}>
        <line x1="200" y1="60" x2="200" y2="240" stroke={D} strokeWidth="0.6" strokeDasharray="4 3"/>
        <line x1="280" y1="60" x2="280" y2="240" stroke={D} strokeWidth="0.6" strokeDasharray="4 3"/>
        <text x="240" y="145" fontFamily="Georgia, serif" fontSize="13" fill={B} textAnchor="middle" fontStyle="italic">GAP</text>
        <path d="M215 150 L225 145 L215 140" stroke={B} strokeWidth="1" fill="none" strokeLinecap={LP}/>
        <path d="M265 150 L255 145 L265 140" stroke={B} strokeWidth="1" fill="none" strokeLinecap={LP}/>
        <text x="240" y="165" fontFamily="Georgia, serif" fontSize="7.5" fill={D} textAnchor="middle">scoped closes it</text>
        {/* scattered annotation marks */}
        <path d="M222 110 L258 110" stroke={D} strokeWidth="0.5" strokeDasharray="2 3"/>
        <path d="M228 178 L252 178" stroke={D} strokeWidth="0.5" strokeDasharray="2 3"/>
        <circle cx="240" cy="110" r="2" fill={D}/>
        <circle cx="240" cy="178" r="2" fill={D}/>
      </g>

      {/* Right figure — confused, tangled */}
      <g strokeLinecap={LP} strokeLinejoin={LP}>
        <circle cx="400" cy="72" r="24" stroke={S} strokeWidth="1.4" strokeDasharray="3 1.5"/>
        {/* confused face */}
        <circle cx="394" cy="70" r="1.5" fill={S}/>
        <circle cx="406" cy="70" r="1.5" fill={S}/>
        <path d="M393 79 Q400 75 407 79" stroke={S} strokeWidth="1"/>
        <path d="M388 60 L392 55 L388 55" stroke={S} strokeWidth="1"/>
        <path d="M412 60 L408 55 L412 55" stroke={S} strokeWidth="1"/>
        {/* tangled thought cloud */}
        <path d="M370 38 C368 28 380 22 388 28 C390 18 404 16 408 26 C416 20 426 26 422 34 C428 34 430 44 422 46 L374 46 C366 46 364 38 370 38Z" stroke={S} strokeWidth="1" strokeDasharray="2 1.5"/>
        <path d="M378 36 C382 30 392 32 390 38" stroke={S} strokeWidth="0.7" strokeDasharray="1 1"/>
        <path d="M394 34 C398 28 410 32 406 38" stroke={S} strokeWidth="0.7" strokeDasharray="1 1"/>
        <path d="M400 48 C400 54 398 56 400 60" stroke={D} strokeWidth="0.8" strokeDasharray="2 2"/>
        {/* body — arms out confused */}
        <line x1="400" y1="96" x2="400" y2="148" stroke={S} strokeWidth="1.4"/>
        <line x1="400" y1="114" x2="370" y2="100" stroke={S} strokeWidth="1.4"/>
        <line x1="400" y1="114" x2="430" y2="100" stroke={S} strokeWidth="1.4"/>
        <line x1="400" y1="148" x2="382" y2="178" stroke={S} strokeWidth="1.4"/>
        <line x1="400" y1="148" x2="418" y2="178" stroke={S} strokeWidth="1.4"/>
        {/* tangled document */}
        <rect x="342" y="90" width="44" height="54" rx="2" stroke={S} strokeWidth="1" strokeDasharray="2 1.5"/>
        <path d="M352 106 C360 102 368 110 362 114 C356 118 364 122 358 126" stroke={S} strokeWidth="0.8" strokeDasharray="1.5 1.5"/>
        <path d="M352 130 C362 128 368 134 360 136" stroke={S} strokeWidth="0.7" strokeDasharray="1 2"/>
        <line x1="352" y1="118" x2="378" y2="118" stroke={D} strokeWidth="0.5" strokeDasharray="1 3"/>
      </g>

      {/* Bottom label */}
      <text x="80" y="210" fontFamily="Georgia, serif" fontSize="9" fill={D} textAnchor="middle">what you imagine</text>
      <text x="400" y="210" fontFamily="Georgia, serif" fontSize="9" fill={D} textAnchor="middle">what gets built</text>

      {/* Scattered accent marks */}
      <g stroke={D} strokeLinecap={LP} strokeWidth="0.6">
        <path d="M30 260 L60 260"/><path d="M28 268 L65 268"/><path d="M32 276 L55 276"/>
        <path d="M420 250 L450 250"/><path d="M418 258 L455 258"/><path d="M422 266 L448 266"/>
      </g>
      <g stroke={B} strokeLinecap={LP} strokeWidth="0.8">
        <path d="M20 300 L25 300 L25 280 L20 280" fill="none"/>
        <path d="M460 300 L455 300 L455 280 L460 280" fill="none"/>
      </g>
      <text x="240" y="305" fontFamily="Georgia, serif" fontSize="8" fill={D} textAnchor="middle" fontStyle="italic">[ your AI agent is only as good as the requirements behind it ]</text>
    </svg>
  );
}

/* ── Scene 02: Clarity from chaos — HowItWorks ── */
export function IllustrationClarity({ width = 420 }: { width?: number }) {
  return (
    <svg width={width} viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Left: messy brief / person with chaos */}
      <g strokeLinecap={LP} strokeLinejoin={LP}>
        <circle cx="72" cy="56" r="20" stroke={S} strokeWidth="1.3"/>
        <circle cx="66" cy="54" r="1.5" fill={S}/>
        <circle cx="78" cy="54" r="1.5" fill={S}/>
        <path d="M66 62 Q72 67 78 62" stroke={S} strokeWidth="1"/>
        <line x1="72" y1="76" x2="72" y2="120" stroke={S} strokeWidth="1.3"/>
        <line x1="72" y1="92" x2="50" y2="108" stroke={S} strokeWidth="1.3"/>
        <line x1="72" y1="92" x2="96" y2="104" stroke={S} strokeWidth="1.3"/>
        <line x1="72" y1="120" x2="58" y2="148" stroke={S} strokeWidth="1.3"/>
        <line x1="72" y1="120" x2="86" y2="148" stroke={S} strokeWidth="1.3"/>
        {/* messy document pile */}
        <rect x="96" y="95" width="52" height="64" rx="2" stroke={S} strokeWidth="1" strokeDasharray="2 1.5" transform="rotate(-8 122 127)"/>
        <rect x="100" y="92" width="52" height="64" rx="2" stroke={S} strokeWidth="1" strokeDasharray="1.5 2" transform="rotate(4 126 124)"/>
        <rect x="98" y="94" width="52" height="64" rx="2" stroke={S} strokeWidth="1"/>
        <path d="M108 110 C118 106 128 114 122 118 C116 122 126 126 118 130" stroke={S} strokeWidth="0.7" strokeDasharray="1.5 1.5"/>
        <path d="M108 136 L142 138" stroke={D} strokeWidth="0.6" strokeDasharray="1 2"/>
        <path d="M108 144 L138 142" stroke={D} strokeWidth="0.6" strokeDasharray="1 2"/>
        <text x="124" y="168" fontFamily="Georgia, serif" fontSize="7.5" fill={D} textAnchor="middle">messy brief</text>
      </g>

      {/* Arrow transform */}
      <g strokeLinecap={LP}>
        <path d="M168 127 C185 120 200 118 218 122" stroke={B} strokeWidth="1.2" strokeDasharray="3 2"/>
        <polygon points="218,118 226,122 218,126" fill={B}/>
        <text x="197" y="112" fontFamily="Georgia, serif" fontSize="7" fill={B} textAnchor="middle">scoped</text>
      </g>

      {/* Right: clean spec document */}
      <g strokeLinecap={LP} strokeLinejoin={LP}>
        <rect x="238" y="60" width="90" height="120" rx="2" stroke={S} strokeWidth="1.3"/>
        {/* header bar */}
        <rect x="246" y="70" width="74" height="10" rx="1" stroke={B} strokeWidth="1"/>
        <text x="283" y="77" fontFamily="Georgia, serif" fontSize="6" fill={B} textAnchor="middle">AI Requirements Blueprint</text>
        {/* content lines */}
        <line x1="246" y1="90" x2="320" y2="90" stroke={D} strokeWidth="0.8"/>
        <circle cx="250" cy="99" r="2" fill={B}/>
        <line x1="256" y1="99" x2="318" y2="99" stroke={D} strokeWidth="0.7"/>
        <circle cx="250" cy="109" r="2" fill={B}/>
        <line x1="256" y1="109" x2="312" y2="109" stroke={D} strokeWidth="0.7"/>
        <circle cx="250" cy="119" r="2" fill={B}/>
        <line x1="256" y1="119" x2="318" y2="119" stroke={D} strokeWidth="0.7"/>
        <circle cx="250" cy="129" r="2" fill={B}/>
        <line x1="256" y1="129" x2="310" y2="129" stroke={D} strokeWidth="0.7"/>
        <circle cx="250" cy="139" r="2" fill={B}/>
        <line x1="256" y1="139" x2="316" y2="139" stroke={D} strokeWidth="0.7"/>
        <line x1="246" y1="152" x2="320" y2="152" stroke={D} strokeWidth="0.8"/>
        <text x="283" y="163" fontFamily="Georgia, serif" fontSize="6.5" fill={D} textAnchor="middle">dev-ready handover</text>
        {/* checkmark seal */}
        <circle cx="328" cy="68" r="14" stroke={B} strokeWidth="1.2"/>
        <path d="M321 68 L326 74 L335 62" stroke={B} strokeWidth="1.5" fill="none" strokeLinecap={LP}/>
        <text x="283" y="196" fontFamily="Georgia, serif" fontSize="7.5" fill={D} textAnchor="middle">clarity. ready to build.</text>
      </g>

      {/* Decorative bracket accents */}
      <g stroke={B} strokeLinecap={LP} strokeWidth="1">
        <path d="M22 220 L22 260 L30 260" fill="none"/>
        <path d="M398 220 L398 260 L390 260" fill="none"/>
      </g>
      <g stroke={D} strokeLinecap={LP} strokeWidth="0.6">
        <path d="M50 240 L100 240"/><path d="M48 248 L105 248"/><path d="M52 256 L95 256"/>
        <path d="M320 240 L370 240"/><path d="M318 248 L375 248"/><path d="M322 256 L365 256"/>
      </g>
    </svg>
  );
}

/* ── Scene 03: Founder at whiteboard — About ── */
export function IllustrationFounder({ width = 400 }: { width?: number }) {
  return (
    <svg width={width} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Whiteboard */}
      <rect x="100" y="30" width="270" height="180" rx="3" stroke={S} strokeWidth="1.4"/>
      <line x1="100" y1="48" x2="370" y2="48" stroke={S} strokeWidth="0.8"/>
      {/* board dots — mac-style */}
      <circle cx="114" cy="38" r="3.5" fill={B}/>
      <circle cx="126" cy="38" r="3.5" fill={D}/>
      <circle cx="138" cy="38" r="3.5" fill={S}/>
      {/* diagram on board */}
      <rect x="118" y="60" width="52" height="36" rx="2" stroke={D} strokeWidth="0.8" strokeDasharray="2 1.5"/>
      <text x="144" y="82" fontFamily="Georgia, serif" fontSize="7" fill={D} textAnchor="middle">business need</text>
      <line x1="170" y1="78" x2="192" y2="78" stroke={D} strokeWidth="0.8"/>
      <polygon points="192,75 198,78 192,81" fill={D}/>
      <rect x="198" y="60" width="52" height="36" rx="2" stroke={B} strokeWidth="1"/>
      <text x="224" y="82" fontFamily="Georgia, serif" fontSize="7" fill={B} textAnchor="middle">requirements</text>
      <line x1="250" y1="78" x2="272" y2="78" stroke={D} strokeWidth="0.8"/>
      <polygon points="272,75 278,78 272,81" fill={D}/>
      <rect x="278" y="60" width="52" height="36" rx="2" stroke={S} strokeWidth="1"/>
      <text x="304" y="82" fontFamily="Georgia, serif" fontSize="7" fill={S} textAnchor="middle">what gets built</text>
      {/* annotation lines below diagram */}
      <line x1="118" y1="108" x2="355" y2="108" stroke={D} strokeWidth="0.5" strokeDasharray="3 3"/>
      <line x1="118" y1="120" x2="320" y2="120" stroke={D} strokeWidth="0.5"/>
      <line x1="118" y1="130" x2="340" y2="130" stroke={D} strokeWidth="0.5"/>
      <line x1="118" y1="140" x2="300" y2="140" stroke={D} strokeWidth="0.5"/>
      <line x1="118" y1="150" x2="345" y2="150" stroke={D} strokeWidth="0.5"/>
      <line x1="118" y1="160" x2="310" y2="160" stroke={D} strokeWidth="0.5"/>
      {/* circled note */}
      <circle cx="320" cy="138" r="22" stroke={B} strokeWidth="1" strokeDasharray="3 1.5"/>
      <text x="320" y="135" fontFamily="Georgia, serif" fontSize="6.5" fill={B} textAnchor="middle">AI agent</text>
      <text x="320" y="144" fontFamily="Georgia, serif" fontSize="6.5" fill={B} textAnchor="middle">spec</text>
      {/* Founder figure — left of board, arm extended pointing */}
      <circle cx="58" cy="80" r="20" stroke={S} strokeWidth="1.3"/>
      <circle cx="52" cy="78" r="1.5" fill={S}/>
      <circle cx="64" cy="78" r="1.5" fill={S}/>
      <path d="M52 86 Q58 91 64 86" stroke={S} strokeWidth="1"/>
      {/* hair suggestion */}
      <path d="M40 72 C40 60 76 60 76 72" stroke={S} strokeWidth="1" strokeDasharray="2 1"/>
      <line x1="58" y1="100" x2="58" y2="148" stroke={S} strokeWidth="1.3"/>
      {/* arm pointing at board */}
      <line x1="58" y1="116" x2="100" y2="105" stroke={S} strokeWidth="1.3"/>
      {/* pen in hand */}
      <line x1="96" y1="106" x2="104" y2="96" stroke={B} strokeWidth="1.5" strokeLinecap={LP}/>
      <line x1="58" y1="116" x2="35" y2="128" stroke={S} strokeWidth="1.3"/>
      <line x1="58" y1="148" x2="44" y2="178" stroke={S} strokeWidth="1.3"/>
      <line x1="58" y1="148" x2="72" y2="178" stroke={S} strokeWidth="1.3"/>
      {/* board leg */}
      <line x1="185" y1="210" x2="175" y2="240" stroke={S} strokeWidth="1.2"/>
      <line x1="285" y1="210" x2="295" y2="240" stroke={S} strokeWidth="1.2"/>
      <line x1="235" y1="210" x2="235" y2="245" stroke={S} strokeWidth="1.2"/>
      {/* bottom label */}
      <text x="200" y="270" fontFamily="Georgia, serif" fontSize="8" fill={D} textAnchor="middle" fontStyle="italic">mapping what needs building</text>
      <g stroke={B} strokeLinecap={LP} strokeWidth="0.9" fill="none">
        <path d="M18 255 L18 275 L26 275"/>
        <path d="M382 255 L382 275 L374 275"/>
      </g>
    </svg>
  );
}

/* ── Scene 04: Blueprint to build — Services ── */
export function IllustrationBlueprint({ width = 380 }: { width?: number }) {
  return (
    <svg width={width} viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Blueprint document */}
      <rect x="20" y="30" width="110" height="150" rx="2" stroke={S} strokeWidth="1.3"/>
      <rect x="28" y="42" width="94" height="12" rx="1" stroke={B} strokeWidth="1"/>
      <text x="75" y="51" fontFamily="Georgia, serif" fontSize="6.5" fill={B} textAnchor="middle">AI Requirements Blueprint</text>
      <line x1="28" y1="64" x2="122" y2="64" stroke={D} strokeWidth="0.8"/>
      {/* checklist items */}
      {[76, 90, 104, 118, 132, 146].map((y, i) => (
        <g key={i}>
          <circle cx="34" cy={y} r="3" stroke={i < 3 ? B : D} strokeWidth="0.9" fill={i < 3 ? B : "none"}/>
          {i < 3 && <path d={`M31.5 ${y} L33.5 ${y+2} L36.5 ${y-2}`} stroke="white" strokeWidth="0.8" fill="none" strokeLinecap={LP}/>}
          <line x1="41" y1={y} x2={i % 2 === 0 ? 118 : 108} y2={y} stroke={i < 3 ? S : D} strokeWidth={i < 3 ? 0.8 : 0.5} strokeDasharray={i < 3 ? "0" : "2 2"}/>
        </g>
      ))}
      <text x="75" y="196" fontFamily="Georgia, serif" fontSize="7" fill={D} textAnchor="middle">scoped consulting</text>

      {/* Flow arrow */}
      <path d="M138 105 C158 98 178 98 198 105" stroke={B} strokeWidth="1.2" strokeDasharray="3 2" fill="none" strokeLinecap={LP}/>
      <polygon points="198,101 206,105 198,109" fill={B}/>
      <text x="172" y="90" fontFamily="Georgia, serif" fontSize="7" fill={B} textAnchor="middle">handover</text>

      {/* Dev team box */}
      <rect x="210" y="55" width="130" height="100" rx="2" stroke={S} strokeWidth="1.3"/>
      <text x="275" y="80" fontFamily="Georgia, serif" fontSize="8" fill={S} textAnchor="middle">dev team</text>
      <line x1="220" y1="88" x2="332" y2="88" stroke={D} strokeWidth="0.7"/>
      {/* dev figures */}
      <g strokeLinecap={LP} strokeLinejoin={LP} stroke={S} strokeWidth="1">
        <circle cx="248" cy="110" r="10"/>
        <line x1="248" y1="120" x2="248" y2="142"/>
        <line x1="248" y1="128" x2="238" y2="136"/>
        <line x1="248" y1="128" x2="258" y2="136"/>
        <circle cx="290" cy="110" r="10"/>
        <line x1="290" y1="120" x2="290" y2="142"/>
        <line x1="290" y1="128" x2="280" y2="136"/>
        <line x1="290" y1="128" x2="300" y2="136"/>
        <circle cx="332" cy="110" r="10"/>
        <line x1="332" y1="120" x2="332" y2="142"/>
        <line x1="332" y1="128" x2="322" y2="136"/>
        <line x1="332" y1="128" x2="342" y2="136"/>
      </g>
      {/* builds with confidence */}
      <text x="275" y="165" fontFamily="Georgia, serif" fontSize="7.5" fill={B} textAnchor="middle">builds with confidence</text>

      {/* Bottom ship arrow */}
      <path d="M75 188 L75 215 L275 215 L275 165" stroke={D} strokeWidth="0.7" strokeDasharray="3 2" fill="none" strokeLinecap={LP}/>
      <text x="175" y="230" fontFamily="Georgia, serif" fontSize="8" fill={D} textAnchor="middle" fontStyle="italic">spec → build → ship</text>

      {/* bracket accents */}
      <g stroke={B} strokeLinecap={LP} strokeWidth="0.9" fill="none">
        <path d="M8 240 L8 255 L16 255"/>
        <path d="M372 240 L372 255 L364 255"/>
      </g>
    </svg>
  );
}

/* ── Scattered accent marks — used as section texture ── */
export function IllustrationAccents({ className = "" }: { className?: string }) {
  return (
    <svg width="100%" viewBox="0 0 680 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      <g stroke={D} strokeLinecap={LP} strokeWidth="0.6" opacity="0.7">
        <path d="M40 40 L80 40"/><path d="M38 50 L85 50"/><path d="M42 60 L75 60"/>
        <path d="M580 40 L620 40"/><path d="M578 50 L625 50"/><path d="M582 60 L615 60"/>
      </g>
      <g stroke={B} strokeLinecap={LP} strokeWidth="0.8" fill="none" opacity="0.5">
        <path d="M15 25 L15 65 L23 65"/>
        <path d="M665 25 L665 65 L657 65"/>
      </g>
      <g stroke={D} strokeLinecap={LP} strokeWidth="0.6" opacity="0.4">
        <circle cx="200" cy="40" r="16" strokeDasharray="3 2"/>
        <circle cx="340" cy="40" r="20" strokeDasharray="2 3"/>
        <circle cx="480" cy="40" r="14" strokeDasharray="3 2"/>
        <path d="M224 40 L316 40" strokeDasharray="2 4"/>
        <path d="M364 40 L462 40" strokeDasharray="2 4"/>
      </g>
      <g stroke={S} strokeLinecap={LP} strokeWidth="0.5" opacity="0.2">
        <rect x="130" y="28" width="40" height="24" rx="1"/>
        <rect x="510" y="28" width="40" height="24" rx="1"/>
      </g>
    </svg>
  );
}
