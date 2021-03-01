module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            salmon: '#f98b7e',
            teal: '#4a949d',
            'gray-dark': '#78736f',
            'gray-md': '#dbd9d8',
            'gray-light': '#eeeeee',
            'gray-lighter': '#f3f3f3',
        },
        fontFamily: {
            serif: [
                'Cormorant Garamond',
                'EB Garamond',
                'ui-serif',
                'Georgia',
                'Cambria',
                'Times New Roman',
                'Times, serif',
            ],
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        extend: {
            lineHeight: {
                p: '1.3',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
