
import React from 'react';

export const COLORS = {
  ROSA_CORAL: '#FF7F7D',
  AZUL_PISCINA: '#00B2CA',
  AMARILLO_MANGO: '#FFC324',
  NARANJA_CITRICO: '#FF7034',
  ROJO_PASION: '#D62828',
  FONDO_BASE: '#1a1c29',
  FONDO_APOYO: '#31333e',
  GRIS_TEXTO: '#8A8D9F'
};

export const UNIVERSIDADES = [
  "Universidad Complutense de Madrid",
  "Universidad Politécnica de Madrid",
  "Universidad Carlos III de Madrid",
  "Universidad Autónoma de Madrid",
  "Universidad Rey Juan Carlos",
  "Universidad de Alcalá",
  "Universidad San Pablo CEU",
  "Universidad Pontificia Comillas (ICADE/ICAI)",
  "Universidad Francisco de Vitoria",
  "Universidad Nebrija"
];

export const ICONS = {
  Top: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Meh: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="15" x2="16" y2="15" stroke="white" strokeWidth="2" />
    </svg>
  ),
  Nop: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Coin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M10 10h4" />
    </svg>
  )
};
