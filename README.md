# Ginnora - API de Gerenciamento de Tarefas

Uma API RESTful moderna construída com TypeScript e Fastify para gerenciamento de tarefas (Todo List), incluindo documentação automática com Swagger.

## 🚀 Tecnologias Utilizadas

### Core

- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Fastify](https://fastify.dev/)** - Framework web rápido e eficiente

### Documentação

- **[@fastify/swagger](https://github.com/fastify/fastify-swagger)** - Geração automática da documentação OpenAPI
- **[@scalar/fastify-api-reference](https://github.com/scalar/scalar)** - Interface moderna para documentação da API

### Ferramentas de Desenvolvimento

- **[tsx](https://github.com/esbuild-kit/tsx)** - TypeScript executor para desenvolvimento
- **[tsup](https://github.com/egoist/tsup)** - Bundler TypeScript rápido
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes eficiente

## 📋 Pré-requisitos

- **Node.js** (versão 22 ou superior)
- **pnpm** (versão 10.11.0 ou superior)

### Instalando o pnpm

```bash
# Via npm
npm install -g pnpm
```

## 🛠️ Instalação

**1. Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd ginnora
```

**2. Instale as dependências:**

```bash
pnpm install
```

## 🚀 Como Usar

### Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento (com hot reload):

```bash
pnpm dev
```

O servidor iniciará em `http://localhost:3000`

### Produção

Para fazer build e executar em produção:

```bash
# Compilar o projeto
pnpm build

# Executar em produção
pnpm start
```

## 📚 Documentação da API

Com o servidor rodando, acesse:

- **Documentação interativa**: `http://localhost:3000/docs`

### Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/todos` | Lista todas as tarefas |
| `POST` | `/todos` | Cria uma nova tarefa |
| `PUT` | `/todos/:id` | Atualiza uma tarefa existente |
| `DELETE` | `/todos/:id` | Remove uma tarefa |

### Exemplos de Uso

#### Listar todas as tarefas

```bash
curl http://localhost:3000/todos
```

#### Criar uma nova tarefa

```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Minha nova tarefa"}'
```

#### Atualizar uma tarefa

```bash
curl -X PUT http://localhost:3000/todos/{id} \
  -H "Content-Type: application/json" \
  -d '{"title": "Tarefa atualizada"}'
```

#### Deletar uma tarefa

```bash
curl -X DELETE http://localhost:3000/todos/{id}
```

## 🏗️ Estrutura do Projeto

```text
ginnora/
├── src/
│   ├── index.ts           # Ponto de entrada da aplicação
│   ├── server.ts          # Configuração do servidor Fastify
│   └── routes/
│       └── todo.ts        # Rotas relacionadas às tarefas
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração do TypeScript
├── pnpm-lock.yaml         # Lock das dependências
└── README.md              # Documentação do projeto
```

## 🔧 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor em modo desenvolvimento com hot reload
- `pnpm build` - Compila o projeto TypeScript para produção
- `pnpm start` - Executa a versão compilada em produção

## 📝 Features

- ✅ API RESTful completa para gerenciamento de tarefas
- ✅ Documentação automática com Swagger/OpenAPI
- ✅ Interface moderna para documentação (Scalar)
- ✅ Hot reload em desenvolvimento
- ✅ TypeScript com tipagem rigorosa
- ✅ Logs estruturados
- ✅ Build otimizado para produção

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git switch -c feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'add some amazing-feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.
