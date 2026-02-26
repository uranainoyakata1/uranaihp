import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101014",
        night: "#0b0c10",
        pearl: "#f7f6f3",
        gold: "#b89a55",
        lavender: "#d8d0f2",
        fog: "#efeff4",
        smoke: "#1f212b"
      },
      fontFamily: {
        sans: ["Noto Sans JP", "ui-sans-serif", "system-ui"],
        serif: ["Shippori Mincho", "ui-serif", "Georgia"],
        display: ["Cormorant Garamond", "Shippori Mincho", "serif"]
      },
      boxShadow: {
        soft: "0 22px 60px rgba(8, 8, 15, 0.12)",
        ring: "0 0 0 1px rgba(184, 154, 85, 0.25), 0 18px 50px rgba(8, 8, 15, 0.18)"
      },
      backgroundImage: {
        "hero": "radial-gradient(circle at 15% 15%, rgba(216, 208, 242, 0.4), transparent 50%), radial-gradient(circle at 80% 20%, rgba(184, 154, 85, 0.22), transparent 48%), linear-gradient(135deg, #0b0c10 0%, #12121b 52%, #1d1b25 100%)",
        "mesh": "radial-gradient(circle at 10% 10%, rgba(184, 154, 85, 0.12), transparent 45%), radial-gradient(circle at 90% 0%, rgba(216, 208, 242, 0.22), transparent 40%)"
      }
    }
  },
  plugins: []
} satisfies Config;
