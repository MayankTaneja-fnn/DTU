# EO Portal

### [🚀 Live Demo: dtu-sjva.vercel.app](https://dtu-sjva.vercel.app)

EO Portal is a comprehensive management system designed for students and faculty. It facilitates student log management, attendance tracking, and provides a centralized platform for academic and administrative information.

## 🚀 Features

### For Students
- **Registration & Login**: Secure authentication with Google OAuth integration.
- **Log Management**: Add, view, and track daily activity logs.
- **Academic Info**: Access to pages like About, Admissions, Alumni, and more.

### For Faculty
- **Faculty Dashboard**: Centralized view for managing student data.
- **Attendance Tracking**: Monitor and record student attendance.
- **Log Review**: View and manage logs submitted by students.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) (Vite)
- **State Management**: [Redux](https://redux.js.org/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Styled Components](https://styled-components.com/)
- **UI Components**: [DevExtreme React](https://js.devexpress.com/Documentation/Guide/React_Components/Common/Get_Started_with_DevExtreme_React/), [React Icons](https://react-icons.github.io/react-icons/)
- **Animations/Carousels**: [Swiper](https://swiperjs.com/)

### Backend
- **Environment**: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication**: [Passport.js](http://www.passportjs.org/) (Google OAuth 2.0), [JWT](https://jwt.io/)
- **File Storage**: [Cloudinary](https://cloudinary.com/) (using Multer)
- **Communication**: [Nodemailer](https://nodemailer.com/) for email notifications

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB account (local or Atlas)
- Google Cloud Console credentials (for OAuth)
- Cloudinary account (for image/file uploads)

### 1. Clone the repository
```bash
git clone <repository-url>
cd DTU
```

### 2. Backend Configuration
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the required environment variables:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
4. Start the backend:
   ```bash
   npm start
   ```

### 3. Frontend Configuration
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   VITE_BACKEND_URL=http://localhost:8000
   ```
4. Start the frontend:
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```
DTU/
├── backend/            # Express server, routes, and database models
│   ├── src/
│   │   ├── controllers/# Business logic
│   │   ├── models/     # Mongoose models
│   │   ├── routes/     # API endpoints
│   │   └── utils/      # Helper functions
│   └── index.js        # Entry point
├── frontend/           # React application
│   ├── src/
│   │   ├── Components/ # UI Components
│   │   ├── Layout.jsx  # Main layout
│   │   └── main.jsx    # Application routing
│   └── index.html      # Main HTML file
└── README.md           # Project documentation
```

## 📜 License
This project is licensed under the ISC License.
