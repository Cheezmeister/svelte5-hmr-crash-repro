import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: ['./src/**/*.{html,js,svelte,ts}'],
    safelist: ['dark'],
    theme: {
        colors: {
            gray: {
                100: '#F2F2F2',
                200: '#E5E5E5',
                300: '#CACACA',
                400: '#B0B0B0',
                500: '#959595',
                600: '#7B7B7B',
                700: '#626262',
                800: '#4A4A4A',
                900: '#313131',
                1000: '#191919',
            },
            blue: {
                100: '#E6F1FE',
                200: '#CDE3FC',
                300: '#9CC6FA',
                400: '#6AAAF7',
                500: '#398DF5',
                600: '#0771F2',
                700: '#065AC2',
                800: '#044491',
                900: '#032D61',
                1000: '#011730',
            },
            orange: {
                100: '#FEF2E6',
                200: '#FCE5CD',
                300: '#FACB9C',
                400: '#F7B16A',
                500: '#F59739',
                600: '#F27D07',
                700: '#C26406',
                800: '#914B04',
                900: '#613203',
                1000: '#301901',
            },
            red: {
                100: '#FEEAE6',
                200: '#FCD5CD',
                300: '#FAAB9C',
                400: '#F7816A',
                500: '#F55739',
                600: '#F22D07',
                700: '#C22406',
                800: '#911B04',
                900: '#611203',
                1000: '#300901',
            },
            green: {
                100: '#E9FBE6',
                200: '#D3F7CD',
                300: '#A6EE9B',
                400: '#7AE66A',
                500: '#4DDD38',
                600: '#21D506',
                700: '#1AAA05',
                800: '#148004',
                900: '#0D5502',
                1000: '#072B01',
            },
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border) / <alpha-value>)',
                input: 'hsl(var(--input) / <alpha-value>)',
                ring: 'hsl(var(--ring) / <alpha-value>)',
                background: 'hsl(var(--background) / <alpha-value>)',
                foreground: 'hsl(var(--foreground) / <alpha-value>)',
                primary: {
                    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
                    foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
                    foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
                    foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
                    foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
                    foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
                    foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
                },
                card: {
                    DEFAULT: 'hsl(var(--card) / <alpha-value>)',
                    foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: [...fontFamily.sans],
            },
        },
    },
};

export default config;
