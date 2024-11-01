# Porsche E-commerce Website

## Overview
This project is an e-commerce website built for showcasing and managing a range of Porsche vehicles. The website includes essential features like product browsing, customer authentication, and an admin panel for managing products. The backend uses MongoDB and Node.js, while the frontend is developed with React for a responsive and intuitive user interface.

## Screenshots
![Login Page](./screenshots/sc2.png)
![Signup Page](./screenshots/sc1.png)
![Admin Panel - Add Product](./screenshots/sc4.png)
![Shop Page](./screenshots/sc3.png)

## Features
- **User Authentication**: Secure login and signup functionality using JWT-based authentication.
- **Product Browsing**: Customers can view and search the catalog of Porsche vehicles.
- **Admin Product Management**: Admins can add, edit, and delete products via a secure admin panel.
- **Responsive Design**: The website is fully responsive, ensuring a consistent user experience across devices.
- **Database Management**: MongoDB database designed to handle customers, products, and admin data.

## Technology Stack
- **Frontend**: React, CSS (with responsive design techniques)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Project Structure
### Backend Development
1. **Database Design**:
   - Created an Entity-Relationship Diagram (ERD) to model data requirements.
   - Designed MongoDB collections for Customers, Products, and Admins.

2. **API Development**:
   - Developed public API endpoints for browsing and searching products.
   - Created private endpoints for authentication, order management, and product management.
   - Secured private endpoints with JWT-based authentication middleware.

3. **Version Control**:
   - Set up a Git repository and organized code with separate branches for team collaboration.

### Frontend Development
1. **React Project Setup**:
   - Initialized a React project and configured the project structure.

2. **User Interface Design**:
   - Developed the UI based on the project requirements and user experience principles.

3. **API Integration**:
   - Connected frontend components with backend APIs using HTTP requests.
   - Implemented data fetching and updating mechanisms for seamless interaction.

4. **Responsive Design**:
   - Ensured the website is responsive with CSS styles and media queries.
