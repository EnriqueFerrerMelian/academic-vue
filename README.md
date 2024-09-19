<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>
REST API for student and course management, developed with a local Apache server using Laragon and with a HeidiSQL database. 
This project is connected to the Frontend part found in the repository: [Educational-App] (https://github.com/EnriqueFerrerMelian/Educational-App----Back-end).

## 📝 Description
This project provides a set of endpoints to manage students and courses. Allows you to create, list, view profiles, and delete students or courses. 
It is designed to facilitate the administration of information related to educational management.

The backend project connects to a frontend created in Vue.js, which you can find in the repository mentioned above.

## 🌟 Features
    *List, view profiles, add and delete students or courses.
    *Secure and well-structured functionalities with error handling.

## 🛠 Installation Requirements
To run this project, you will need the following resources and packages:
- Visual Studio Code or any other text editor.
- Laragon for the local server.
- HeidiSQL for database management.
- Required packages:
    - Axios (for HTTP requests)
    - Font Awesome (icon pack)
    - Bootstrap (for frontend design if you use it in the integration).
  
## 💻 Installation
Follow these steps to install the project in your local environment:
1. Clone this repository to your machine:
git clone https://github.com/EnriqueFerrerMelian/Educational-App-Backend.git
2. Open the project in Visual Studio Code (or your preferred editor).
3. Open Laragon and turn on the Apache and MySQL servers.
4. Make sure your database is configured in HeidiSQL (or your favorite SQL manager). 
Run the database script included in the repository to create the necessary tables.
5. From the Laragon terminal, navigate to the project folder and run:
php artisan serve
6.Access the application in your browser at http://localhost:8000.


## Primary endpoints
*GET /students: List all students.
*POST /students: Create a new student.
*GET /students/{id}: View a student's profile.
*DELETE /students/{id}: Delete a student.
*GET /courses: List all courses.
*POST /courses: Create a new course.
*DELETE /courses/{id}: Delete a course.
    
## Use
1. Start the Apache server from Laragon and make sure the MySQL server is running.
2. You can interact with the API using tools like Postman or by integrating it directly into the associated frontend.

## 🤝 Contribution
We (me) appreciate your contributions! If you want to improve this project, please follow these steps:

    Create a fork of the repository.
    Create a new branch for your feature: git checkout -b new-feature.
    Make your changes and commit: git commit -m 'Add new functionality'.
    Upload your changes: git push origin new-feature.
    Submit a pull request.
    If you use this app, please enjoy it.
![prev 01](https://github.com/user-attachments/assets/9df0ae41-b8eb-4380-b6e3-417096de26fa)
![prev 02](https://github.com/user-attachments/assets/454459b8-2fe8-420c-a969-79216d34e3e3)
![prev 03](https://github.com/user-attachments/assets/a5ba5d63-fbe0-4bfe-9ab3-6e2b1e7f5966)

## 🐛 Problems
If you have any problem, let me know. It's quite straight forward.

## 📄 License
This project is licensed under the MIT License. For details, see the LICENSE.md file. (TBH, I don't think there is any license here).

## 📧 Contact
If you have any questions or comments, please feel free to contact us at progranauta@gmail.com I can get hurtful comments, but please, these ones must to be avoided!
