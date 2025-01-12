import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                dracula: {
                    ...require("daisyui/src/theming/themes")["dracula"],
                    primary: "#474E68",
                    secondary: "#474E68",
                    "base-100": "#282c3b",
                },
            },
            "cupcake",
        ],
    },
} satisfies Config;
