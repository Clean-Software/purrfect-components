/* eslint-disable @typescript-eslint/no-var-requires */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.module,
                format: 'esm',
            },
        ],
        external: ['styled-components'],
        plugins: [
            resolve({ browser: true }),
            external(),
            typescript({ tsconfig: './tsconfig.json' }),
            commonjs(),
            postcss({
                minimize: true,
                exclude: ['node_modules/**', 'stories/**'],
            }),
            terser(),
        ],
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        external: [/\.css$/],
        plugins: [dts()],
    },
];
