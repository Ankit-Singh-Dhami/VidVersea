import dotenv from "dotenv";
dotenv.config(); // Load .env file
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./configs/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_8mBJxn5qfhUi@ep-dark-thunder-adr5ris5-pooler.c-2.us-east-1.aws.neon.tech/ai-video-generator?sslmode=require&channel_binding=require",
  },
});
