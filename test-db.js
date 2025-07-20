const { Client } = require("pg");

// IMPORTANT: Paste your full Neon connection string here
const connectionString = "postgresql://parthh:npg_z9ojutwbMc4P@ep-calm-grass-a8m3brtx-pooler.eastus2.azure.neon.tech/sessn1?sslmode=require&channel_binding=require";

const client = new Client({ connectionString });

async function testConnection() {
  try {
    console.log("Attempting to connect to the database...");
    await client.connect();
    console.log("✅ Database connection successful!");
  } catch (err) {
    console.error("❌ Database connection failed!", err);
  } finally {
    await client.end();
    console.log("Connection closed.");
  }
}

testConnection();