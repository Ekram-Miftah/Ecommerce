# 🛒 ProShop E-Commerce | Full-Stack MERN Application

**Live Demo**:https://y-alpha-ebon.vercel.app


A sophisticated, end-to-end e-commerce solution designed for seamless shopping and robust inventory management.
This project demonstrates high-level proficiency in database architecture, secure API development, and dynamic UI rendering.


## 📸 Visual Preview

<img width="1356" height="610" alt="0" src="https://github.com/user-attachments/assets/8be170ea-1e44-4711-a7d7-40f3c602aca6" />
<img width="1334" height="618" alt="2" src="https://github.com/user-attachments/assets/c966c50b-4e2a-43d7-8e6e-ce1f11cf58f2" />
<img width="1366" height="581" alt="3" src="https://github.com/user-attachments/assets/b8e4e8b9-5d60-49ee-82c4-46594e8a94ec" />
<img width="1328" height="607" alt="4" src="https://github.com/user-attachments/assets/b87e570f-98d7-418d-b6a4-b6887664b8a3" />
<img width="1331" height="463" alt="5" src="https://github.com/user-attachments/assets/991f0124-9188-48d6-8759-3b8b2825a78f" />










## **Admin Dashboard**
## 📸 Visual Preview

<img width="1355" height="665" alt="image" src="https://github.com/user-attachments/assets/a14c6ff4-c354-4415-8ba7-c288ca0bdca0" />
<img width="1350" height="662" alt="image" src="https://github.com/user-attachments/assets/e1d4985b-6b0b-483d-884c-0458a97795d1" />
<img width="1356" height="624" alt="image" src="https://github.com/user-attachments/assets/36f4f706-dbbd-4651-8324-16a0789922fd" />




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
4. Environment Variables: Create a `.env` file and add your
MONGODB_URI=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
CLOUDINARY_NAME=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=.
5. Run the App: `npm run dev`
