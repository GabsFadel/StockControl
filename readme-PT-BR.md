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

