To run route generator, execute following command:
```
deno run --allow-all src/tsoa-gen.ts
```

To run webserver, execute following command:
```
deno run --allow-all src/webserver.ts
```

Currently running `tsoa-gen.ts` gives this error:
```
vscode ➜ /workspaces/deno-2 (master) $ deno run --allow-all src/tsoa-gen.ts 
error: Uncaught Error: No declarations found for referenced type TestDataResponse.
    at TypeResolver.getModelTypeDeclaration (file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/typeResolver.js:758:19)
    at TypeResolver.typeArgumentsToContext (file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/typeResolver.js:886:34)
    at TypeResolver.getReferenceType (file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/typeResolver.js:579:14)
    at TypeResolver.resolve (file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/typeResolver.js:390:36)
    at TypeResolver.resolve (file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/typeResolver.js:380:118)
    at MethodGenerator.Generate (file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/methodGenerator.js:39:78)
    at file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/controllerGenerator.js:46:41
    at Array.map (<anonymous>)
    at ControllerGenerator.buildMethods (file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/controllerGenerator.js:46:14)
    at ControllerGenerator.Generate (file:///deno/.cache/deno/npm/registry.npmjs.org/@tsoa/cli/5.1.1/dist/metadataGeneration/controllerGenerator.js:35:27)
```
