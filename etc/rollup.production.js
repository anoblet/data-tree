import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import minifyHTML from "rollup-plugin-minify-html-literals";
import size from "rollup-plugin-size";
import { terser } from "rollup-plugin-terser";

module.exports = {
    input: ".tsc/index.js",
    output: {
        dir: "./public/js",
        format: "esm",
        sourcemap: true
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        resolve({ dedupe: ["lit-element", "lit-html"] }),
        minifyHTML(),
        terser({
            output: {
                comments: false
            }
        }),
    ]
};
