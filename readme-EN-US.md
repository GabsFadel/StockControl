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
