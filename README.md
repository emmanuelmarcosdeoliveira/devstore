# DevStore 🛍️

<div align="center">

![DevStore Banner](https://res.cloudinary.com/delo0gvyb/image/upload/v1762913754/devstore_hrjh4y.png)

### Uma plataforma de e-commerce moderna construída com Next.js

[![Next.js](https://img.shields.io/badge/-Next.js%2016-black?style=plastic&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/-React%2019-61DAFB?style=plastic&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/-TypeScript%205-3178C6?style=plastic&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS%204-06B6D4?style=plastic&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/-ESLint%209-4B3599?style=plastic&logo=eslint&logoColor=white)](https://eslint.org/)
[![Cypress](https://img.shields.io/badge/-Cypress-17202C?style=plastic&logo=cypress&logoColor=white)](https://cypress.io/)

---

## 🎯 Menu Rápido

| 📋 Sobre                    | 🚀 Setup                              | 📦 Tecnologias                     | 🏗️ Arquitetura                     | 🧪 Testes          | 👨‍💻 Contribuir               |
| --------------------------- | ------------------------------------- | ---------------------------------- | ---------------------------------- | ------------------ | --------------------------- |
| [Clique](#-sobre-o-projeto) | [Clique](#-instalação-e-configuração) | [Clique](#-tecnologias-utilizadas) | [Clique](#️-padrões-e-arquitetura) | [Clique](#-testes) | [Clique](#-como-contribuir) |

---

</div>

## 📋 Sobre o Projeto

**DevStore** é uma plataforma de e-commerce moderna desenvolvida como um projeto educacional. <br> O projeto demonstra as melhores práticas de desenvolvimento web com Next.js 16,<br> incluindo renderização no servidor (SSR), geração estática (SSG), API routes, e otimizações de performance.

### Características Principais

- ✅ **Catálogo de Produtos** - Listagem completa com busca em tempo real
- ✅ **Carrinhos Dinâmicos** - Gerenciamento de carrinho com Context API
- ✅ **Página de Produto** - Detalhes completos com imagens otimizadas
- ✅ **API REST** - Endpoints para produtos e busca
- ✅ **Testes E2E** - Cobertura com Cypress
- ✅ **Performance** - Otimizações automáticas do Next.js

---

## 🚀 Instalação e Configuração

### Pré-requisitos

- **Node.js** 18.17 ou superior
- **pnpm** 8.0+ (gerenciador de pacotes recomendado)

### Passo a Passo

**1. Clone o repositório**

```bash
git clone https://github.com/emmanuelmarcosdeoliveira/devstore.git
cd devstore
```

**2. Instale as dependências**

```bash
pnpm install
```

**3. Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Exemplo de configuração
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**4. Execute o servidor de desenvolvimento**

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

| Comando      | Descrição                            |
| ------------ | ------------------------------------ |
| `pnpm dev`   | Inicia o servidor de desenvolvimento |
| `pnpm build` | Cria a build de produção             |
| `pnpm start` | Inicia o servidor em produção        |
| `pnpm lint`  | Executa verificações ESLint          |
| `pnpm test`  | Executa testes com Cypress           |

---

## 📦 Tecnologias Utilizadas

### Framework e Runtime

| Tecnologia     | Versão | Propósito                   |
| -------------- | ------ | --------------------------- |
| **Next.js**    | 16.0.0 | Framework React com SSR/SSG |
| **React**      | 19.2.0 | Biblioteca UI               |
| **React DOM**  | 19.2.0 | Renderização no DOM         |
| **TypeScript** | 5.x    | Tipagem estática            |

### Estilização

| Tecnologia         | Versão | Propósito                 |
| ------------------ | ------ | ------------------------- |
| **Tailwind CSS**   | 4.x    | Framework CSS utilitário  |
| **PostCSS**        | 4.x    | Processamento de CSS      |
| **Tailwind Merge** | 3.3.1  | Merge de classes Tailwind |

### Validação e Tipos

| Tecnologia             | Versão | Propósito                          |
| ---------------------- | ------ | ---------------------------------- |
| **Zod**                | 4.1.12 | Validação de esquemas TypeScript   |
| **@t3-oss/env-nextjs** | 0.13.8 | Validação de variáveis de ambiente |

### UI e Ícones

| Tecnologia       | Versão  | Propósito                |
| ---------------- | ------- | ------------------------ |
| **Lucide React** | 0.548.0 | Ícones SVG reutilizáveis |

### Ferramentas de Desenvolvimento

| Tecnologia               | Versão | Propósito                     |
| ------------------------ | ------ | ----------------------------- |
| **ESLint**               | 9.x    | Análise estática de código    |
| **Cypress**              | 15.6.0 | Testes end-to-end             |
| **Babel React Compiler** | 1.0.0  | Compilação otimizada de React |

---

## 🏗️ Padrões e Arquitetura

### Estrutura do Projeto

```
devstore/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (store)/        # Grupo de rotas da loja
│   │   │   ├── (home)/     # Página inicial
│   │   │   ├── product/    # Página de produtos
│   │   │   └── search/     # Página de busca
│   │   ├── api/            # API Routes
│   │   │   └── products/   # Endpoints de produtos
│   │   └── layout.tsx      # Layout raiz
│   ├── components/         # Componentes React reutilizáveis
│   ├── context/            # Context API para estado global
│   ├── data/               # Tipos e utilitários de dados
│   └── env.ts              # Validação de variáveis de ambiente
├── cypress/                # Testes E2E
├── public/                 # Arquivos estáticos
└── package.json            # Dependências do projeto
```

### Padrões Implementados

#### 1. **Server Components (SSR)**

- Componentes Next.js renderizados no servidor por padrão
- Reduz JavaScript no cliente e melhora SEO

#### 2. **Context API**

- Gerenciamento de estado global do carrinho
- Evita prop drilling

#### 3. **API Routes**

- Endpoints RESTful nativos do Next.js
- Localizado em `src/app/api/`

#### 4. **Validação com Zod**

- Tipagem forte de dados
- Validação em tempo de compilação

#### 5. **TypeScript Strict**

- Modo strict ativado
- Type safety em todo o projeto

---

## 🧪 Testes

### Testes E2E com Cypress

Os testes estão localizados em `cypress/e2e/`:

**Executar testes:**

```bash
pnpm cypress run
```

**Testes Inclusos:**

- ✅ Adicionar produto ao carrinho
- ✅ Busca de produtos
- ✅ Navegação entre páginas

---

## 📖 Aprendizado e Fonte

Este projeto foi desenvolvido como material de estudo baseado na formação da **RocketSeat**.

Para aprender mais: [RocketSeat](https://www.rocketseat.com.br/)

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env.local` com as configurações necessárias:

```env
# Exemplo
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

---

## 🚀 Deploy

### Deploy no Vercel (Recomendado)

```bash
# Instale o Vercel CLI
npm install -g vercel

# Faça deploy
vercel
```

---

## 🤝 Como Contribuir

Sua contribuição é bem-vinda! Aqui estão os passos para contribuir:

<details>
<summary><strong>📌 Clique para ver o guia completo de contribuição</strong></summary>

### Passo 1: Familiarize-se com o Projeto

- Leia a documentação incluída
- Explore o código e sua estrutura
- Entenda como o projeto funciona

### Passo 2: Faça um Fork

Crie uma cópia (fork) do repositório em sua conta do GitHub.

[![GitHub Docs](https://img.shields.io/badge/GitHub%20Docs-Fork%20a%20Repo-181717?style=plastic&logo=github)](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

### Passo 3: Clone o Repositório

```bash
git clone https://github.com/SEU-USUARIO/devstore.git
cd devstore
```

### Passo 4: Crie uma Branch

```bash
git checkout -b feature/sua-feature
# ou
git checkout -b fix/seu-fix
```

**Convenção de nomes:**

- `feature/` - Para novas funcionalidades
- `fix/` - Para correções de bugs
- `docs/` - Para documentação
- `refactor/` - Para refatoração

### Passo 5: Faça as Alterações

- Implemente suas mudanças
- Adicione testes se necessário
- Mantenha o código limpo (execute `pnpm lint`)

### Passo 6: Commit e Push

```bash
git add .
git commit -m "feat: descrição clara das alterações"
git push origin feature/sua-feature
```

**Padrão de mensagens de commit:**

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação de código
- `refactor:` Refatoração de código
- `test:` Adição de testes

### Passo 7: Crie um Pull Request

Acesse o repositório original e clique em "New Pull Request". Descreva claramente:

- O que foi mudado
- Por que foi mudado
- Como testar as alterações

### Passo 8: Revise e Responda ao Feedback

Os mantedores podem sugerir alterações. Colabore e faça os ajustes necessários.

</details>

---

## 👨‍💻 Desenvolvedor

<div align="center">

### Desenvolvido por

<img height="120px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png" alt="Emmanuel Oliveira" style="border-radius: 50%; border: 3px solid #3178C6;">

#### **Emmanuel Oliveira**

💖 **Desenvolvido com dedicação**

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=plastic&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emmanuel-marcos-oliveira/)
[![WhatsApp](https://img.shields.io/badge/-WhatsApp-25D366?style=plastic&logo=whatsapp&logoColor=white)](https://wa.me/5511968336094)
[![Email](https://img.shields.io/badge/-Gmail-EA4335?style=plastic&logo=gmail&logoColor=white)](mailto:ofs.dev.br@gmail.com)

**&copy; 2025 - Todos os Direitos Reservados**

</div>

---

## 📄 Licença

![MIT License](https://img.shields.io/badge/License-MIT-97CA00?style=plastic&logo=mit&logoColor=white)

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

Lançado em 2025.

---

<div align="center">

### ⭐ Se este projeto foi útil para você, considere dar uma estrela!

**Obrigado por chegar até aqui!** 😁

</div>
