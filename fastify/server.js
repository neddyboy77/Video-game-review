// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({
  // logger: true,
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { Tommy: "nedow" };
});

// Run the server!
const start = async () => {
  try {
    const port = process.env.BACKEND_PORT || 3030;

    await fastify.listen({ port: port });
    console.log(`Backend listening on ${fastify.server.address().port}\n`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
