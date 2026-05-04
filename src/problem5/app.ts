// app.ts
import express from "express";
import resourceRoutes from "./routes/resource.route";
import { errorHandler } from "./middlewares/error.middleware";
import { setupSwagger } from "./docs/swagger";

const app = express();

app.use(express.json());

app.use("/resources", resourceRoutes);

setupSwagger(app);

// Must be last
app.use(errorHandler);

export default app;