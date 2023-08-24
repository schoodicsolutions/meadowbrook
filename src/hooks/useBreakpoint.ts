import { Config } from 'tailwindcss';
import { ScreensConfig } from 'tailwindcss/types/config';

import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '~/../tailwind.config';
import { useMediaQuery } from 'usehooks-ts';

const fullConfig = resolveConfig(tailwindConfig) as Config;
const breakpoints = fullConfig?.theme?.screens! as ScreensConfig;

export const useBreakpoint = (breakpoint: string) => {
    console.log(breakpoints);
    if (!Object.hasOwn(breakpoints, breakpoint) || Array.isArray(breakpoints)) {
        return false;
    }

    const breakpointWidth = breakpoints[breakpoint];

    console.log(breakpoint, breakpointWidth);

    return useMediaQuery(`(min-width: ${breakpointWidth})`);
};