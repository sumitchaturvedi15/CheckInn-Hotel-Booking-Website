
**CheckInn**

A full-stack Hotel Booking Application built with the **MERN Stack (MongoDB, Express.js, React, Node.js)**.
It allows users to easily search and book hotels, while hotel owners can list their properties and manage rooms.
Integrated with secure authentication, payment, email, and cloud storage features.



## Features
 
**👤 For Users**


🏠 View hotel details and available rooms

💳 Book rooms securely using Stripe payments

📧 Receive booking confirmation emails via Brevo + Nodemailer

🔐 Login / Sign up with Clerk Authentication


**🏢 For Hotel Owners**

➕ Add, edit, or delete hotel listings

🛏️ Add room listings under each hotel

🖼️ Upload hotel/room images via Cloudinary

📊 View all bookings related to their hotels


**⚙️ Additional Features**

Responsive & modern UI using Tailwind CSS

Error handling and validation on both frontend & backend

RESTful API structure

Secure data storage in MongoDB

## API Reference

#### Get User Data

```http
  GET /api/user/
```

#### Search for the previous searched cities

```http
  POST /api/user/storeSearchCity
```

#### Check if rooms are available for a specific hotel and date range

```http
  POST /api/hotels/check-availability
```
#### Create a new booking for a selected hotel and room type

```http
  POST /api/hotels/book
```
#### Fetch all hotel bookings made by a specific user

```http
  GET /api/hotels/user
```
#### Get All Bookings for a Hotel (Admin)

```http
  GET /api/hotels/hotel
```
#### Get All Admin Rooms

```http
  GET /api/rooms/admin
```
#### Change the availability status of a specific room (available/unavailable)

```http
  POST /api/rooms/admin/toggle-availability
```


#### Check if a particular room is available for the requested dates
```http
  POST /api/bookings/check-availability
```
#### Book a room and create a new booking entry

```http
  POST /api/bookings/book
```
#### Fetch all bookings made by the currently logged-in user

```http
  GET /api/bookings/user
```
#### Retrieve all bookings for hotels owned by the logged-in admin

```http
  GET /api/bookings/hotel
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

**Backend**

MONGODB_URI = MongoDB connection string (Atlas or local)

CLERK_PUBLISHABLE_KEY = Clerk public API key for authentication

CLERK_SECRET_KEY = Clerk secret key for backend validation

CLERK_WEBHOOK_SECRET = Webhook secret to verify Clerk events


CLOUDINARY_CLOUD_NAME = Cloudinary account name

CLOUDINARY_API_KEY = Cloudinary API key for image uploads

CLOUDINARY_API_SECRET = Cloudinary API secret

SMTP_USER = Email service username (Brevo/Nodemailer)

SMTP_PASS = Email service password or app key

SENDER_EMAIL = Default sender email for booking confirmations
CURRENCY = Currency code used for transactions (e.g., INR, USD)


**Frontend**

VITE_CLERK_PUBLISHABLE_KEY = Public key for Clerk frontend authentication

VITE_BACKEND_URL = Base URL of your backend API

VITE_CURRENCY = Currency code used for transactions (e.g., INR, USD)


## Installation

Install my-project with npm

Go to the GitHub repository: Quiz-Application

Click Fork to create copy.

```bash
git clone https://github.com/sumitchaturvedi15/CheckInn-Hotel-Booking-Website.git

cd CheckInn-Hotel-Booking-Website

```

Setup Backend (Server)

```bash
cd backend

npm install express mongoose cors dotenv nodemailer stripe cloudinary

npm install --save-dev nodemon

node server.js
```
Create a .env file in the server folder with the following content:

```bash
MONGO_DB_URL=your_mongodb_connection_string

PORT=5000
```

Setup Frontend (Client)

```bash
npm create vite@latest

npm install axios react-router-dom

npm install tailwindcss @tailwindcss/vite
 
npm i -D daisyui@latest

npm run dev
```
**🧰 Tech Stack**

**Frontend**

⚛️ React.js with Vite

🎨 Tailwind CSS for UI styling

🔐 Clerk for Authentication (Login / Sign-up / OAuth)

**Backend**

🌐 Node.js + Express.js

🗄️ MongoDB with Mongoose ODM

📩 Nodemailer + Brevo for booking confirmation emails

☁️ Cloudinary for image uploads (hotel/room photos)

💳 Stripe for secure online payments



## Demo

https://checkinn-bookings.vercel.app/

**Frontend** https://checkinn-bookings.vercel.app/

**Backend** https://checkinn-backend.vercel.app/
