# Crime App

This is a full-stack application for managing crime-related data. It consists of a backend built with PHP (Laravel) and a frontend built with React.

## Prerequisites

Before running the application, make sure you have the following installed on your system:

-   **PHP**: You need PHP installed. You can install PHP directly or use XAMPP (which includes PHP).
-   **Composer**: PHP dependency manager. Composer will automatically detect your PHP installation.
-   **Node & npm**: Required for managing frontend dependencies and compiling assets.

## Installation

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone git@github.com:Jasper-3/crime-app.git
```

Alternatively, you can download the repository as a ZIP file and extract it.

### Backend Setup

1. Navigate to the project folder:

```bash
git clone git@github.com:Jasper-3/crime-app.git
```

2. Rename Environment File:

```
mv env.example .env
```

3. Install PHP Dependencies:

Install the required PHP dependencies using Composer:

```
composer install
```

4. Generate Application Key:

Generate a new application key:

```
php artisan key:generate
```

5. Install Node Dependencies:

```
npm install
```

### Backend Setup

1. Navigate to the React folder:

```
cd react
```

2. Install Node Dependencies:

Install the required Node modules for the frontend:

```
npm install
```

## Running the Application

Backend
To run the backend server, use the following command:

```
php artisan serve
```

-   note directory should be in the `crime-app`

Frontend
To run the frontend development server, use the following command:

```
npm run dev
```

-   note directory should be in the `crime-app/react`

## Additonal Postman test for Backend

Need a Postman App
Import the Crimes.post_collection.json loacted at the root of the crime-app in postman, make sure backend servers are running
