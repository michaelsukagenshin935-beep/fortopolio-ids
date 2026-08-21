import React from 'react';

export const GithubIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const WhatsappIcon = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Clean chat bubble with telephone handset */}
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M15.05 13A2.5 2.5 0 0 1 11 13a2.5 2.5 0 0 1-1.05-2" />
  </svg>
);

export const HtmlIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path d="M1.5 0L3.5 21.5L12 24L20.5 21.5L22.5 0H1.5ZM18.5 4.5L17.5 17.5L12 19L6.5 17.5L5.5 4.5H18.5Z" fill="#E34F26"/>
    <path d="M12 2.5V17.5L16.5 16.5L17.5 2.5H12Z" fill="#EF652A"/>
    <path d="M12 5H15L15.5 9H12V11H16.5L16 14L12 15.5V17.5L17.5 16L18 7H12V5Z" fill="white"/>
  </svg>
);

export const CssIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path d="M1.5 0L3.5 21.5L12 24L20.5 21.5L22.5 0H1.5ZM18.5 4.5L17.5 17.5L12 19L6.5 17.5L5.5 4.5H18.5Z" fill="#264DE4"/>
    <path d="M12 2.5V17.5L16.5 16.5L17.5 2.5H12Z" fill="#2965F1"/>
    <path d="M12 5H15L15.5 9H12V11H16.5L16 14L12 15.5V17.5L17.5 16L18 7H12V5Z" fill="white"/>
  </svg>
);

export const JsIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect width="24" height="24" fill="#F7DF1E"/>
    <path d="M6 18.5L7.5 17.5C7.8 18.2 8.3 18.8 9.2 18.8C10 18.8 10.5 18.4 10.5 17.5V10H12.5V17.5C12.5 19.5 11.2 20.5 9.3 20.5C7.6 20.5 6.5 19.5 6 18.5ZM14 18.5L15.5 17.5C15.9 18.3 16.5 18.8 17.5 18.8C18.5 18.8 19 18.3 19 17.5C19 16.5 18.4 16.2 17.2 15.7L16.5 15.5C14.7 14.8 13.5 13.8 13.5 11.8C13.5 10 15 8.5 17.3 8.5C19 8.5 20.2 9.2 21 10.8L19.5 11.8C19.2 11.2 18.8 10.8 18 10.8C17.2 10.8 16.7 11.3 16.7 12C16.7 12.8 17.2 13.2 18.3 13.7L19 14C21 14.8 22.2 15.8 22.2 17.8C22.2 20 20.5 21.3 18 21.3C15.5 21.3 14 20.2 14 18.5Z" fill="#000000"/>
  </svg>
);

export const ReactIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

export const GsapIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#00CE68"/>
    <path d="M6 8L10 16L14 8H16L11 18H9L4 8H6Z" fill="white"/>
    <path d="M18 8V18H16V8H18Z" fill="white"/>
  </svg>
);

export const FigmaIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path d="M12 2C9.2 2 7 4.2 7 7C7 9.8 9.2 12 12 12C14.8 12 17 9.8 17 7C17 4.2 14.8 2 12 2Z" fill="#F24E1E"/>
    <path d="M7 12C4.2 12 2 14.2 2 17C2 19.8 4.2 22 7 22C9.8 22 12 19.8 12 17V12H7Z" fill="#A259FF"/>
    <path d="M12 12V17C12 19.8 14.2 22 17 22C19.8 22 22 19.8 22 17C22 14.2 19.8 12 17 12H12Z" fill="#1ABCFE"/>
    <path d="M12 7V12H17C19.8 12 22 9.8 22 7C22 4.2 19.8 2 17 2C14.2 2 12 4.2 12 7Z" fill="#0ACF83"/>
  </svg>
);

export const GitIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path d="M23.5 10.9L13.1 0.5C12.5 -0.1 11.5 -0.1 10.9 0.5L9.5 1.9L11.3 3.7C11.9 3.5 12.6 3.6 13.1 4.1C13.6 4.6 13.7 5.3 13.5 5.9L15.2 7.6C15.8 7.4 16.5 7.5 17 8C17.7 8.7 17.7 9.8 17 10.5C16.3 11.2 15.2 11.2 14.5 10.5C14 10 13.9 9.3 14.1 8.7L12.5 7.1V11.3C12.7 11.4 12.9 11.5 13 11.7C13.7 12.4 13.7 13.5 13 14.2C12.3 14.9 11.2 14.9 10.5 14.2C9.8 13.5 9.8 12.4 10.5 11.7C10.7 11.5 10.9 11.4 11.1 11.3V6.9C10.9 6.8 10.7 6.7 10.5 6.5C10 6 9.9 5.3 10.1 4.7L8.4 3L0.5 10.9C-0.1 11.5 -0.1 12.5 0.5 13.1L10.9 23.5C11.5 24.1 12.5 24.1 13.1 23.5L23.5 13.1C24.1 12.5 24.1 11.5 23.5 10.9Z" fill="#F05032"/>
  </svg>
);
