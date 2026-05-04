// docs/swagger.ts
import { Express } from "express";
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

export const setupSwagger = (app: Express) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));
};