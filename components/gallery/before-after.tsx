"use client";

import { useState } from "react";
import Image from "next/image";

export function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="corp-before-after">
      <Image src={after} alt={`Depois: ${alt}`} fill sizes="(max-width: 900px) 100vw, 720px" />
      <div
        className="corp-before-after__before"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={`Antes: ${alt}`} fill sizes="(max-width: 900px) 100vw, 720px" />
      </div>
      <span className="corp-before-after__label is-before">Antes</span>
      <span className="corp-before-after__label is-after">Depois</span>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Comparar imagem antes e depois"
      />
      <i style={{ left: `${position}%` }} aria-hidden="true"><b>↔</b></i>
    </div>
  );
}
