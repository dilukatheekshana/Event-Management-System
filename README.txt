# Event Management System

## Description
This is a comprehensive Event Management System built using React for the frontend, Spring Boot for the backend, and MySQL for the database. 

## Features
- Fetch all events
- Add a new event
- Update event details
- Delete an event
- Register an attendee to an event

## Prerequisites
- Java 8 or higher
- MySQL

## Setup

### Backend
1. Clone the repository
2. Navigate to the `backend` directory
3. Configure the MySQL database in `src/main/resources/application.properties`
4. Run the application using `./mvnw spring-boot:run`

### Frontend
1. Navigate to the `frontend` directory
2. Install dependencies using `npm install`
3. Start the React application using `npm start`

## Endpoints
- `GET /api/events`: Fetch all events
- `POST /api/events`: Add a new event
- `PUT /api/events/{id}`: Update event details
- `DELETE /api/events/{id}`: Delete an event
- `POST /api/events/{id}/attendees`: Register an attendee to an event
