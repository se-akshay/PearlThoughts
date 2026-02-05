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
