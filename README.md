
# 📦 Controle de Estoque - API (PT-BR)

## 📜 Descrição

Esta API foi desenvolvida para gerenciar o controle de estoque de produtos. Ela permite:

- ✅ Criar e gerenciar usuários.  
- ✅ Gerenciar produtos.  
- ✅ Registrar movimentações de entrada e saída no estoque.  
- ✅ Separar dados por organização (empresa).  

---

## 📁 Estrutura do Projeto

O projeto segue uma estrutura modular para facilitar a manutenção e expansão.

### 📂 Diretórios e Arquivos Principais

**`src/api`** - Contém os controladores da API.  
- `inventory.js`: Lida com operações relacionadas ao estoque.  
- `inventoryMovement.js`: Gerencia movimentações de produtos.  
- `organization.js`: Gerencia dados das organizações (empresas).  
- `products.js`: Gerencia o cadastro e consulta de produtos.  
- `user.js`: Gerencia o cadastro e autenticação de usuários.  

**`src/fns`** - Contém funções utilitárias reutilizáveis.  

**`src/middleware`** - Contém middlewares da API.  
- `auth.js`: Middleware de autenticação para acesso seguro.  

**`src/model`** - Define os modelos de dados usados na API.  
- `inventory.js`: Modelo para dados de estoque.  
- `inventoryMovement.js`: Modelo para movimentações de estoque.  
- `organization.js`: Modelo para organizações (empresas).  
- `products.js`: Modelo para produtos.  
- `user.js`: Modelo para usuários.  

**`src/route`** - Define as rotas da API.  
- `inventory.js`: Rotas do estoque.  
- `inventoryMovement.js`: Rotas das movimentações de produtos.  
- `organization.js`: Rotas das organizações.  
- `products.js`: Rotas dos produtos.  
- `user.js`: Rotas dos usuários.  

**`src/service`** - Contém serviços da API.  
- `database.js`: Configuração e conexão com o banco de dados.  

**Outros Arquivos Importantes**  
- `.gitignore`: Define arquivos ignorados pelo Git.  
- `index.js`: Arquivo principal da API.  
- `package.json`: Lista dependências do projeto.  
- `package-lock.json`: Mantém versões das dependências travadas.  

---

## 🚀 Instalação

```sh
# Clone o repositório
git clone <URL-DO-REPOSITORIO>

# Instale as dependências
npm install

# Configure o banco de dados no arquivo src/service/database.js

# Inicie a API
npm start
```

------------------------------------------------------------------------------

# 📦 Stock Control - API (EN-US)

## 📜 Description

This API was developed to manage product stock control. It allows you to:

- ✅ Create and manage users.  
- ✅ Manage products.  
- ✅ Record incoming and outgoing stock movements.  
- ✅ Separate data by organization (company).  

---

## 📁 Project Structure

The project follows a modular structure to ease maintenance and scalability.

### 📂 Main Directories and Files

**`src/api`** - Contains the API controllers.  
- `inventory.js`: Handles stock-related operations.  
- `inventoryMovement.js`: Manages product movements.  
- `organization.js`: Handles company-related data.  
- `products.js`: Manages product registration and queries.  
- `user.js`: Manages user registration and authentication.  

**`src/fns`** - Contains reusable utility functions.  

**`src/middleware`** - Contains API middlewares.  
- `auth.js`: Authentication middleware for secure access.  

**`src/model`** - Defines the data models used in the API.  
- `inventory.js`: Model for stock data.  
- `inventoryMovement.js`: Model for stock movements.  
- `organization.js`: Model for companies.  
- `products.js`: Model for products.  
- `user.js`: Model for users.  

**`src/route`** - Defines API routes.  
- `inventory.js`: Stock routes.  
- `inventoryMovement.js`: Product movement routes.  
- `organization.js`: Company routes.  
- `products.js`: Product routes.  
- `user.js`: User routes.  

**`src/service`** - Contains API services.  
- `database.js`: Database configuration and connection.  

**Other Important Files**  
- `.gitignore`: Defines files ignored by Git.  
- `index.js`: Main API entry file.  
- `package.json`: Lists project dependencies.  
- `package-lock.json`: Locks dependency versions.  

---

## 🚀 Installation

```sh
# Clone the repository
git clone <REPO-URL>

# Install dependencies
npm install

# Configure the database in src/service/database.js

# Start the API
npm start
```

