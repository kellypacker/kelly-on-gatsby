import { useMediaQuery } from 'react-responsive';
import { breakpointNumbers } from '../helpers/media-queries';

const { sm, md, lg, xl } = breakpointNumbers;

export const useScreenXlOnly = () => useMediaQuery({ minWidth: xl });
export const useScreenLgOnly = () =>
    useMediaQuery({ minWidth: lg, maxWidth: xl - 1 });
export const useScreenMdOnly = () =>
    useMediaQuery({ minWidth: md, maxWidth: lg - 1 });
export const useScreenSmOnly = () =>
    useMediaQuery({ minWidth: sm, maxWidth: md - 1 });
export const useScreenXsOnly = () => useMediaQuery({ maxWidth: sm - 1 });

export const useScreenMinXl = () => useMediaQuery({ minWidth: xl });
export const useScreenMinLg = () => useMediaQuery({ minWidth: lg });
export const useScreenMinMd = () => useMediaQuery({ minWidth: md });
export const useScreenMinSm = () => useMediaQuery({ minWidth: sm });

export const useScreenLgDown = () => useMediaQuery({ maxWidth: xl - 1 });
export const useScreenMdDown = () => useMediaQuery({ maxWidth: lg - 1 });
export const useScreenSmDown = () => useMediaQuery({ maxWidth: md - 1 });

export const isScreenMinLx = () => ($(window).width() || 0) >= xl;
export const isScreenMinLg = () => ($(window).width() || 0) >= lg;
export const isScreenMinMd = () => ($(window).width() || 0) >= md;
export const isScreenMinSm = () => ($(window).width() || 0) >= sm;
