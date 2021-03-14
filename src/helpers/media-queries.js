import tailwind from '../../tailwind.config';

const { screens } = tailwind.theme;

console.log(screens.md, parseInt(screens.sm.slice(0, -2)));

export const breakpointNumbers = {
    sm: parseInt(screens.sm.slice(0, -2)),
    md: parseInt(screens.md.slice(0, -2)),
    lg: parseInt(screens.lg.slice(0, -2)),
    xl: parseInt(screens.xl.slice(0, -2)),
};

export const mediaQueries = {
    xl: `screen and (min-width: ${screens.xl})`,
    lg: `screen and (min-width: ${screens.lg})`,
    md: `screen and (min-width: ${screens.md})`,
    sm: `screen and (min-width: ${screens.sm})`,
};
