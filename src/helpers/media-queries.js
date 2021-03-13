import tailwind from '../../tailwind.config';

const { screens } = tailwind.theme;

console.log(screens.md);

export const mediaQueries = {
    xl: `screen and (min-width: ${screens.xl})`,
    lg: `screen and (min-width: ${screens.lg})`,
    md: `screen and (min-width: ${screens.md})`,
    sm: `screen and (min-width: ${screens.sm})`,
};
