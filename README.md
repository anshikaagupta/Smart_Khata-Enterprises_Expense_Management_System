<h1 align="center">💼 SmartKhata – Simplify Your Finances</h1>
<p align="center">
  <img src="https://img.shields.io/badge/Spring%20Boot-darkgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React.js-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MySQL-red?style=for-the-badge" />
  <img src="https://img.shields.io/badge/CSS-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/JWT-orange?style=for-the-badge" />
</p>

## Description

1) SmartKhata is a full-stack expense manager that helps you track your income, expenses, budgets, and transactions securely.
2)  It comes with both user and admin dashboards. Users can add transactions, view summaries, and get insights.
3)  Admins can manage users, categories, and see the overall statistics.
4)  It supports JWT-based login, signup, password reset, and email verification using Spring Mail.
5)   Implemented management capabilities including search, filter and pagination.

## How to run?

### Step 1: Clone the Repository

1. Fork the repository to your GitHub account.

2. Clone the forked repository to your local machine.

```sh
git clone https://github.com/<your-username>/Fullstack-Expense-Tracker
```

### Step 2: Setting up e-mail and database configurations

- Configure the following credentials in the [`application.properties`](https://github.com/DharshiBalasubramaniyam/Fullstack-Expense-Tracker/blob/main/backend/src/main/resources/application.properties) file.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/YOUR_DATABASE_NAME
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.mail.username=YOUR_USERNAME
spring.mail.password=YOUR_PASSWORD
```

### Step 3: Run the backend.

- Run the backend application. It will automatically create the required tables. 
- Add some custom data manually in the [categories](https://github.com/DharshiBalasubramaniyam/Fullstack-Expense-Tracker/blob/7ecea71aaeca4e26a4aafd02fd602abe4d9da67d/backend/src/main/java/com/fullStack/expenseTracker/models/Category.java#L13) table for both [type](https://github.com/DharshiBalasubramaniyam/Fullstack-Expense-Tracker/blob/7ecea71aaeca4e26a4aafd02fd602abe4d9da67d/backend/src/main/java/com/fullStack/expenseTracker/models/TransactionType.java#L13) `expense` and `income`.
- To start as admin, Insert a new user manually with role admin in [`users`](https://github.com/DharshiBalasubramaniyam/Fullstack-Expense-Tracker/blob/7ecea71aaeca4e26a4aafd02fd602abe4d9da67d/backend/src/main/java/com/fullStack/expenseTracker/models/User.java#L20) table.

### Step 4: Run the frontend

1. Navigate to [frontend direcory](https://github.com/DharshiBalasubramaniyam/Fullstack-Expense-Tracker/tree/main/frontend).
```
cd ./frontend
```

2. Install dependencies.
```
npm install
```

3. Run the app.
```
npm start
```

Access the application at [`http://localhost:3000/`](http://localhost:3000/).
- To get started create a new account using your email.
- This project is built using Spring Boot (Java) for backend, React.js for frontend, MySQL as database, CSS for styling, Spring Mail for emails, and JWT for secure auth.




## Screenshots : This is for users
![Screenshot (543)](https://github.com/user-attachments/assets/8c67207a-0640-4e94-9a15-5a95d43aef27)
![Screenshot (545)](https://github.com/user-attachments/assets/4bb64671-16ae-4eda-9ed7-fbae60d7542b)
![Screenshot (546)](https://github.com/user-attachments/assets/e0aaf254-4492-4e4b-ac70-a5e66e0abe2f)
![Screenshot (548)](https://github.com/user-attachments/assets/d7212ca2-cccf-4913-a711-7972e4035bcd)
![Screenshot (556)](https://github.com/user-attachments/assets/3b5f44db-3f31-4788-b040-449c1ac5e81d)
![Screenshot (549)](https://github.com/user-attachments/assets/d38637fb-799e-4be3-80a1-bf0733442217)
![Screenshot (551)](https://github.com/user-attachments/assets/3c91efba-6f17-4323-9f81-ed4c65cc1f9e)
![Screenshot (552)](https://github.com/user-attachments/assets/bc343a00-76af-4cf0-9845-0df98a0bc75e)
![Screenshot (553)](https://github.com/user-attachments/assets/5525ecf7-ecf4-4b5c-a52a-d8f96bc021c9)
![Screenshot (554)](https://github.com/user-attachments/assets/2dad7d52-b885-459d-8b82-7dfab75243f5)
![Screenshot (555)](https://github.com/user-attachments/assets/7b397594-a6ce-4f9e-b4ce-6fb7cf549e38)

Once the Admin logs in, the portal provides access to employee data, allowing it to be viewed and managed securely.
---

### "Track your money before your money starts tracking you."_ 💸  
### SmartKhata – helping you make smarter financial choices.



---

### This project is made by Anshika Gupta(Me) and Abhishek Yadav(abhishek8172)
