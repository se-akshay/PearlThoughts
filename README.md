# Doctor Appointment Booking System

## Overview

A backend system for booking doctor appointments, managing patients, doctors, and specializations.

## ER Diagram – Doctor Appointment Booking System

```mermaid
erDiagram
    USERS ||--o| DOCTORS : "is a"
    USERS ||--o| PATIENTS : "is a"

    DOCTORS ||--o{ DOCTOR_SPECIALIZATIONS : has
    SPECIALIZATIONS ||--o{ DOCTOR_SPECIALIZATIONS : includes

    PATIENTS ||--o{ APPOINTMENTS : books
    DOCTORS ||--o{ APPOINTMENTS : attends

    USERS {
        uuid id PK
        string email
        string password
        string role
        boolean verified
        datetime created_at
    }

    DOCTORS {
        uuid id PK
        uuid user_id FK
        string name
        string license_no
        int experience
        decimal fee
    }

    PATIENTS {
        uuid id PK
        uuid user_id FK
        string name
        date dob
        string gender
    }

    SPECIALIZATIONS {
        uuid id PK
        string name
    }

    DOCTOR_SPECIALIZATIONS {
        uuid id PK
        uuid doctor_id FK
        uuid specialization_id FK
    }

    APPOINTMENTS {
        uuid id PK
        uuid patient_id FK
        uuid doctor_id FK
        date appointment_date
        time appointment_time
        string status
        text notes
    }

```

## PostgreSQL Connection Setup

### 1) Install dependencies

```bash
cd backend
npm install
```

### 2) Configure environment variables

Create a .env file in the backend folder (use .env.example as a template):

```
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DB_NAME
```

Example for local Postgres:

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/pearlthoughts
```

### 3) Start the server

```bash
cd backend
npm run dev
```

### 4) Verify database connectivity

Open http://localhost:3000/db-health to confirm the connection.
