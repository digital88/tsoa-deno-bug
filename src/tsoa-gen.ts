import {
  DefaultRouteGenerator,
  ExtendedRoutesConfig,
  generateRoutes,
} from "tsoa";

class CustomRouterGenerator extends DefaultRouteGenerator {
  protected getRelativeImportPath(fileLocation: string) {
    return super.getRelativeImportPath(fileLocation) + ".ts";
  }
}

(async () => {
  const routeOptions: ExtendedRoutesConfig = {
    basePath: "/api/v1",
    entryFile: "webserver.ts",
    routesDir: "api",
    noImplicitAdditionalProperties: "throw-on-extras",
    controllerPathGlobs: ["src/controllers/*Controller.ts"],
    middleware: "express",
    routeGenerator: CustomRouterGenerator,
  };

  await generateRoutes(routeOptions);
})();
