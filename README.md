 NGO Career Assessment System
Welcome to the NGO Career Assessment System!

This is a full-stack web application designed to help individuals figure out their best career paths. Users can take a timed career assessment, see their results instantly, and download a detailed PDF report of their performance. Because we want this to be accessible to as many people as possible, the entire platform supports multiple languages!

✨ Key Features
For Users:
🌍 Multi-Language Support: Easily switch the entire website between English, Hindi, Bengali, Tamil, and Telugu with the click of a button.
⏱️ Timed Assessments: Take career tests with a built-in timer to track how long you take.
📄 PDF Reports: Once you finish a test, you can download a clean, beautifully formatted 1-page PDF report of your results.
🔐 Easy Login: Secure authentication, including support for Google Sign-In.
🔄 Redo Requests: Didn't do well? You can easily send a request to the admin to let you retake the test.
For Admins:
📊 Powerful Dashboard: A clean admin panel with beautiful charts (powered by Chart.js) to track total users, tests taken, and overall stats.
👥 User Management: View user details, approve or deny test redo requests, and manage notifications.
🌐 Admin Translations: The admin dashboard is also fully translatable!
🛠️ Tech Stack
We kept the tech stack simple, fast, and reliable:

Frontend: HTML, CSS, JavaScript (Vanilla JS + Bootstrap for styling)
Backend: Node.js with Express.js
Database: MySQL
Tools: i18next (for translations), html2pdf (for PDF generation), Chart.js (for analytics)
🚀 How to Run the Project Locally
If you want to download this code and run it on your own computer, just follow these simple steps:

1. Prerequisites
Make sure you have installed:

Node.js
MySQL
 (Make sure your MySQL server is running!)
2. Install Dependencies
Open your terminal, go into the project folder, and install the required packages:

bash


npm install
3. Setup the Environment
You will need a .env file in your backend folder to store your database passwords and secret keys. It should look something like this:

text


PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=career_assessment_db
JWT_SECRET=your_super_secret_key
ADMIN_COMPANY_ID=your_company_id
4. Setup the Database
We have a handy script that will automatically create all the database tables and insert some dummy questions/categories for you. Just run:

bash


node backend/run-db-setup.js
5. Start the Server
Everything is ready! Start the backend server by running:

bash


node backend/server.js
Now, open your browser and go to http://localhost:5000 to see the app live!

