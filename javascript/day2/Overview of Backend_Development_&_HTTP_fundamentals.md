# Backend Development & HTTP Fundamentals

**Sem 2 – BTech CSE (AI & ML)**

---

## 1. What is Backend Development?

Backend development refers to **server-side programming** that manages:

* Business logic
* Databases
* Authentication
* Communication with frontend

Backend code runs on a **server**, not in the browser.

---

## 2. Frontend vs Backend

### Diagram

```
+-------------+        HTTP        +--------------+
|  Frontend   |  <------------->  |   Backend    |
| (Browser)   |                   | (Server)     |
+-------------+                   +--------------+
     UI                               Logic + DB
```

### Explanation

* **Frontend** shows buttons, forms, text
* **Backend** decides *what happens* after user interaction

### Example

User clicks **Login**

* Frontend → sends username & password
* Backend → checks database → sends success/failure

---

## 3. What is a Server?

A **server** is a computer that:

* Is always ON
* Accepts requests
* Sends responses

### Diagram

```
User Device  --->  Server  --->  Database
```

### Explanation

The server acts as a **middleman** between user and database.

### Example

When you open college ERP:

* Your laptop → ERP server
* Server → fetches marks from database

---

## 4. What is HTTP?

**HTTP (HyperText Transfer Protocol)** defines **rules of communication** between client and server.

### Diagram

```
Client  ----HTTP---->  Server
```

### Explanation

HTTP decides:

* How request is sent
* How response is returned

### Example

Opening a website sends an **HTTP GET request**.

---

## 5. Client–Server Model

### Diagram ⭐

```
+--------+     HTTP Request      +--------+
| Client | -------------------> | Server |
|        | <------------------- |        |
+--------+     HTTP Response     +--------+
```

### Explanation

* Client requests data
* Server processes and responds

### Example

Instagram app → requests feed
Instagram server → sends posts

---

## 6. HTTP Request & Response

### Request Diagram

```
Request:
--------
Method: POST
URL: /api/login
Headers
Body (data)
```

### Response Diagram

```
Response:
---------
Status Code: 200
Headers
Data (JSON)
```

### Example

Login request:

* Request body → username & password
* Response → login success

---

## 7. HTTP Methods

### Diagram

```
GET     -> Fetch data
POST    -> Send data
PUT     -> Update data
DELETE  -> Remove data
```

### Explanation

Each method has a **specific purpose**.

### Example

* GET → View profile
* POST → Submit form
* PUT → Edit profile
* DELETE → Delete account

---

## 8. HTTP Status Codes

### Diagram

```
2xx  -> Success
4xx  -> Client Error
5xx  -> Server Error
```

### Example

* 200 → Login successful
* 404 → Page not found
* 500 → Server crashed

---

## 9. URL Structure

### Diagram

```
https://www.example.com/api/login
 |        |             |
Protocol Domain        Endpoint
```

### Explanation

* Protocol → communication rule
* Domain → server address
* Endpoint → backend function

### Example

`/api/login` → login logic on server

---

## 10. What is an API?

API allows **frontend to talk to backend**.

### Diagram

```
Frontend  --->  API  --->  Backend Logic
```

### Explanation

API is like a **waiter** between user and kitchen.

### Example

Mobile app & website both use same API.

---

## 11. REST API

### Diagram

```
Client ---> REST API ---> Server
```

### Explanation

REST API follows rules:

* Uses HTTP
* Uses URLs
* Uses JSON
* Stateless

### Example

`GET /api/users` returns users list.

---

## 12. REST API Example

### Diagram

```
GET /api/students
        |
        v
+------------------+
|  Backend Server  |
+------------------+
        |
        v
JSON Response
```

### Example Response

```json
{
  "name": "Ayush",
  "branch": "CSE"
}
```

---

## 13. CRUD Operations

### Diagram ⭐

```
Create  -> POST
Read    -> GET
Update  -> PUT
Delete  -> DELETE
```

### Explanation

CRUD represents **database operations**.

### Example

Adding a student → POST
Viewing marks → GET

---

## 14. Statelessness

### Diagram

```
Request 1 -> Server (No Memory)
Request 2 -> Server (No Memory)
```

### Explanation

Server does not remember previous requests.

### Problem

How does server remember login?

👉 Using **cookies or sessions**

---

## 15. Cookies

### Diagram

```
Server ---> Cookie ---> Browser
Browser ---> Cookie ---> Server
```

### Explanation

Cookies store small data in browser.

### Example

Remembering:

* Theme
* Language
* User ID

---

## 16. Sessions

### Diagram

```
Browser ---> Session ID ---> Server
Server ---> User Data
```

### Explanation

Session data is stored on **server**, safer.

### Example

Banking websites use sessions.

---

## 17. Cookies vs Sessions

### Diagram

```
Cookies  -> Browser
Sessions -> Server
```

### Example

* Cookie → "Dark mode ON"
* Session → "User logged in"

---

## 18. Login Using Sessions

### Diagram ⭐

```
User Login
   |
Server creates session
   |
Session ID to browser
   |
Browser sends ID
   |
Server identifies user
```

### Example

Online exam portals use session login.

---

## 19. Backend for AI & ML Applications 🤖

### Diagram

```
Frontend
   |
Backend API
   |
ML Model
   |
Prediction
```

### Explanation

Backend hosts ML models.

### Example

Image upload → ML model → disease prediction

---

## 20. Exam Short Definitions

**Backend Development:**
Server-side programming handling logic, data, and HTTP communication.

**REST API:**
Architectural style using HTTP methods and JSON for CRUD operations.

**Cookie:**
Client-side stored data.

**Session:**
Server-side stored user data.

---

**END OF NOTES**
