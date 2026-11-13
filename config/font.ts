import localFont from "next/font/local";

export const cormorantGaramond = localFont({
  src: [
    {
      path: "../assets/fonts/CormorantGaramond-VariableFont_wght.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "../assets/fonts/CormorantGaramond-Italic-VariableFont_wght.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const dmSans = localFont({
  src: [
    {
      path: "../assets/fonts/DMSans-VariableFont_opsz,wght.woff2",
      weight: "100 1000",
      style: "normal",
    },
    {
      path: "../assets/fonts/DMSans-Italic-VariableFont_opsz,wght.woff2",
      weight: "100 1000",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});
