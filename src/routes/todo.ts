import { randomUUID } from "crypto";
import type { FastifyPluginCallback } from "fastify";

type Todo = { id: string; title: string; completed: boolean };

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Rotas relacionadas a tarefas (todos)
export const todosRoutes: FastifyPluginCallback = (
  instance,
  _options,
  done
) => {
  const todos: Todo[] = [];

  // Exemplo de rota para obter todas as tarefas
  instance.get("/", async () => {
    // chave "await" faz a função de "esperar" a resposta de uma "promise"
    await delay(2000); // Simulando um atraso de 2 segundos

    return todos;
  });

  // Exemplo de rota para criar uma nova tarefa
  instance.post("/", async (request, reply) => {
    const { title } = request.body as { title: string };
    const newTodo: Todo = { id: randomUUID(), title, completed: false };

    todos.push(newTodo);

    return reply.code(201).send(newTodo);
  });

  // Exemplo de rota para atualizar uma tarefa existente
  instance.put("/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const { title } = request.body as { title: string };

    const todoIndex = todos.findIndex((t) => t.id === id);

    if (!todoIndex) {
      return reply.code(404).send({ message: "Task not found" });
    }

    todos[todoIndex].title = title;

    const todo = todos[todoIndex];
    return reply.send(todo);
  });

  // Exemplo de rota para deletar uma tarefa
  instance.delete("/:id", async (request, reply) => {
    const { id } = request.params as { id: string };

    const todoIndex = todos.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
      return reply.code(404).send({ message: "Task not found" });
    }

    todos.splice(todoIndex, 1);

    return reply.send({ message: `Task with id ${id} deleted` });
  });

  done();
};
