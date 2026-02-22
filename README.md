# 🛒 ProShop E-Commerce | Full-Stack MERN Application

Live Demo:https://y-alpha-ebon.vercel.app


A sophisticated, end-to-end e-commerce solution designed for seamless shopping and robust inventory management.
This project demonstrates high-level proficiency in database architecture, secure API development, and dynamic UI rendering.


## 📸 Visual Preview

<img width="1356" height="610" alt="0" src="https://github.com/user-attachments/assets/8be170ea-1e44-4711-a7d7-40f3c602aca6" />






Admin Dashboard |
| :---: | :---: |
| ![Customer View](PASTE_URL_HERE) | ![Admin Panel](PASTE_URL_HERE) |

---

## 🚀 Core Features

### 🛍️ Customer Experience
- Dynamic Product Catalog: Real-time data fetching from MongoDB for up-to-date pricing and stock.
- Secure Authentication: Implemented JWT-based login and user registration to protect customer data.
- State Management: Utilized complex data handling to maintain shopping cart persistence across sessions.

### ⚙️ Admin Power (The Control Room)
- Full CRUD Functionality: Dedicated dashboard to Create, Read, Update, and Delete products.
- Inventory Management: Instant updates to the database via a custom-built RESTful API.
- Secure Access: Protected routes ensuring only authorized admins can access management tools.


## 🛠️ Technical Tech Stack

- Frontend: React.js (Hooks, Functional Components)
- Backend: Node.js & Express.js (RESTful API Design)
- Database: MongoDB (Mongoose Modeling)
- Deployment: Vercel



## 🏗️ Architecture & Challenges
- The Challenge: Handling complex state transitions between the user cart and the backend inventory.
- The Solution: Developed a robust API architecture that validates stock availability before allowing checkout, ensuring a bug-free user experience.



## ⚡ How to Run Locally


1. Clone the repo: `git clone https://github.com`
2. Install Backend Dependencies: `npm install`
3. Install Frontend Dependencies: `cd frontend && npm install`
4. Environment Variables: Create a `.env` file and add your `MONGO_URI` and `JWT_SECRET`.
5. Run the App: `npm run dev`
