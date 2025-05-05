---

# **JWT Authentication Example**

This project demonstrates JWT (JSON Web Token) authentication using Node.js, Express, and JWT. The application includes routes for user login and signup, allowing users to authenticate and access secure resources.

---

## **Routes**

### 1. **Login**

* **URL:** `http://localhost:3001/auth/login`
* **Method:** `POST`
* **Description:** Allows a user to log in by providing their email and password.

#### Request Body:

```json
{
  "email": "user@example.com",
  "password": "userpassword"
}
```

#### Response:

* **Success (200):**

  ```json
  {
    "message": "User Logged In Successfully"
  }
  ```
* **Error (401):**

  ```json
  {
    "message": "Invalid Credentials! Check Credentials Again"
  }
  ```

### 2. **Sign Up**

* **URL:** `http://localhost:3001/auth/signup`
* **Method:** `POST`
* **Description:** Allows a user to create a new account by providing their email and password.

#### Request Body:

```json
{
  "email": "newuser@example.com",
  "password": "newuserpassword"
}
```

#### Response:

* **Success (200):**

  ```json
  {
    "message": "User created Successfully"
  }
  ```
* **Error (401):**

  ```json
  {
    "message": "User Already Registered"
  }
  ```

---

## **Technologies Used**

* **Node.js:** JavaScript runtime used for building the server.
* **Express.js:** Web framework used to create the server and handle HTTP requests.
* **JWT (JSON Web Tokens):** For secure user authentication and session management.
* **bcryptjs:** For hashing passwords before storing them in the database.

---

## **Installation**

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/MrImaginatory/udemy_JWT.git
   ```

2. Navigate to the project directory:

   ```bash
   cd udemy_JWT
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running at `http://localhost:3001`.

---

## **Environment Variables**

Make sure to set the following environment variables in a `.env` file (if not already set in your system):

* `JWT_SECRET`: A secret key used for signing and verifying the JWTs.
* `MONGO_URI`: MongoDB connection string to connect to your database.

Example `.env` file:

```
JWT_SECRET=your_jwt_secret
MONGO_URI=mongodb://localhost:27017/your_database
```

---

## **Conclusion**

This project provides a simple yet robust implementation of JWT authentication using Node.js, Express, and MongoDB. Users can sign up, log in, and securely access resources with a valid JWT.

---
