import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);
export const colorsTailwind = fullConfig.theme?.colors as any;
