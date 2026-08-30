import { Hono } from "hono";

const app = new Hono();

app.get("/api/health", (c) => {
  return c.json("healthy");
});

export default app;
