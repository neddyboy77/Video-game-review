// Import the framework and instantiate it
import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  // logger: true,
});

fastify.register(cors, {
  origin: "*",
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { Tommy: "nedow" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: process.env.BACKEND_PORT || 3030 });
    console.log(`Backend listening on ${fastify.server.address().port}\n`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
