import { Config } from 'tailwindcss';
import { ScreensConfig } from 'tailwindcss/types/config';

import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '~/../tailwind.config.js';
import { useMediaQuery } from 'usehooks-ts';

const fullConfig = resolveConfig(tailwindConfig) as Config;
const breakpoints = fullConfig?.theme?.screens! as ScreensConfig;

export const useBreakpoint = (breakpoint: string) => {
    if (!Object.hasOwn(breakpoints, breakpoint) || Array.isArray(breakpoints)) {
        return false;
    }

    const breakpointWidth = breakpoints[breakpoint];

    console.log(breakpointWidth, `(min-width: ${breakpointWidth})`);
    return useMediaQuery(`(min-width: 720px)`);
};