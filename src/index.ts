import FastifySwagger from "@fastify/swagger";
import ScalarApiReference from "@scalar/fastify-api-reference";

import { todosRoutes } from "./routes/todo";
import { server } from "./server";

// Código de inicialização aqui
async function bootstrap() {
  console.log("Iniciando servidor...");

  try {
    // Registrando Swagger (documentação da API)
    await server.register(FastifySwagger, {
      openapi: {
        info: { title: "Ginnora API", version: "1.0.0" },
      },
    });
    // Registrando Scalar API Reference (documentação da API com tema)
    await server.register(ScalarApiReference, {
      routePrefix: "/docs",
      configuration: {
        theme: "moon",
      },
    });

    // Registrar rotas
    server.register(todosRoutes, { prefix: "/todos" });

    server.log.info("Rotas registradas com sucesso.");

    await server.listen({ port: 3000 });
    console.log("Servidor rodando em http://localhost:3000");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

bootstrap();
