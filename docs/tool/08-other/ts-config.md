# Typescript 配置

- **references**: references are a way to structure your TypeScript programs into smaller pieces.

## compilerOptions
- **baseUrl**: Base directory to resolve non-relative module names.
- **declaration**: This will generate declaration files (`.d.ts`) alongside our `.js` files. With that alone, your package will be usable in TypeScript projects from the get-go and provide type hints even in JavaScript projects.
- **declarationMap**: With this, sourcemap (`.d.ts.map`) will be generated to map our declaration files (`.d.ts`) to our original TypeScript source code (`.ts`). This means that code editors can go to the original TypeScript code when using "Go to definition," instead of the compiled JavaScript files.
- **esModuleInterop**: Default is `true`, allows import and export using ES module syntax, otherwise is commonjs style.
- **module**: Used to specify how modules are loaded. It determines how modules are loaded and import/export statements are handled after TypeScript code is compiled into JavaScript.Note that when using the ES6 module loading method, other compiler options such as `target` and `moduleResolution` need to be configured to ensure that the generated code is compatible with the target environment.
- **moduleResolution**: This is a configuration option used by the compiler to determine the strategy for how module import and export statements are parsed. It determines how modules are loaded and processed after TypeScript code is compiled into JavaScript.
- **noEmit**: Used to control whether compiled JavaScript files are generated. When noEmit is set to true, the TypeScript compiler does not generate JavaScript files, but only performs type checking. This is often used for quick type checking during development without generating actual runnable code.
- **outDir**: Where to place the compiled JavaScript.
- **rootDir**: Where to look for our code.
- **sourceMap**: This will add sourcemap files (`.js.map`) that allow debuggers and other tools to display the original TypeScript source code when actually working with the emitted JavaScript files.
- **target**: The default target configuration is "es2016," and modern browsers only support up to "es2015." 

> **Using declarationMap and/or sourceMap means we also need to publish our source code with the package to npm.**

> `moduleResolution` can be set to the following values:
> - "node": this is the default value, which means that modules are resolved using Node.js module loading rules. In Node.js, modules are loaded using the CommonJS specification, which uses require() statements to import modules and module.exports statements to export them.
> - "classic": indicates that the module is parsed using the traditional way of the TypeScript compiler. In this way, the module is loaded using the ECMAScript specification, and the import statement is used to import the module and the export statement to export the module.

`tsconfig.json`:
```json
{
    "compilerOptions": {
        "target": "es2015",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "rootDir": "./src",
        "outDir": "./dist",
        "sourceMap": true,
        "declaration": true,
        "declarationMap": true,
        "lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ],
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "jsx": "react",
    }
}
```
