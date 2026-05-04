// docs/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const spec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Resource API",
      version: "1.0.0"
    }
  },
  apis: ["./routes/*.ts", "./dist/routes/*.js"]
});

export const setupSwagger = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));
};