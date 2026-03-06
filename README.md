# React Native Environment Variables + API Demo

This project demonstrates how to use **environment variables in a React Native application** to configure API endpoints and fetch data from a remote service.

The app retrieves a list of users from an API and displays them using a simple, clean UI.

---

# Features

* Environment variable configuration using `.env`
* API service layer for fetching data
* TypeScript support
* Loading state while fetching data
* Clean card-based UI for displaying users
* Separation of concerns (config, services, screens)

---

# Project Structure

```
src
 ├── config
 │     └── appConfig.ts
 │
 ├── services
 │     └── apiService.ts
 │
 ├── screens
 │     └── UserScreen.tsx
 │
 └── types
       └── react-native-config.d.ts
```

Root files

```
.env
App.tsx
index.js
package.json
```

---

# Installation

Clone the repository and install dependencies.

```
npm install
```

Install the environment variable library.

```
npm install react-native-config
```

For iOS:

```
npx pod-install
```

---

# Environment Configuration

Create a `.env` file in the root directory.

Example:

```
API_URL=https://jsonplaceholder.typicode.com
APP_ENV=development
APP_NAME=React Native API Demo
```

These variables will be used throughout the application.

---

# TypeScript Environment Types

Create a file:

```
src/types/react-native-config.d.ts
```

Add:

```
declare module "react-native-config" {
  interface Env {
    API_URL: string
    APP_ENV: string
    APP_NAME: string
  }

  const Config: Env
  export default Config
}
```

This provides type safety for environment variables.

---

# API Service Example

`src/services/apiService.ts`

```
import Config from "react-native-config"

export interface User {
  id: number
  name: string
  email: string
}

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${Config.API_URL}/users`)

  if (!response.ok) {
    throw new Error("API request failed")
  }

  return response.json()
}
```

---

# User Screen

The screen fetches users from the API and displays them in a list.

Features:

* Loading indicator while data is being fetched
* FlatList for performance
* Card-style UI layout
* Avatar with first letter of username

---

# Running the Application

Start Metro:

```
npx react-native start
```

Run Android:

```
npx react-native run-android
```

Run iOS:

```
npx react-native run-ios
```

---

# Example API Used

This project uses a public test API:

https://jsonplaceholder.typicode.com/users

---

# Example Output

```
User List

[A] Alice Johnson
    alice@email.com

[B] Bob Smith
    bob@email.com

[C] Charlie Brown
    charlie@email.com
```

---

# Why Use Environment Variables?

Environment variables allow applications to change configuration without modifying source code.

Common use cases:

* Different API URLs for development and production
* Feature flags
* Secure configuration values
* Environment-specific settings

Example environments:

```
.env
.env.development
.env.production
```

---

# Best Practices

* Never commit sensitive environment values
* Use `.env.example` to document required variables
* Keep API configuration centralized
* Use TypeScript typings for environment variables

---

# Future Improvements

Possible improvements for this project:

* Add React Navigation
* Add search functionality
* Add pull-to-refresh
* Implement pagination
* Add unit testing using Jest

---

# Technologies Used

* React Native
* TypeScript
* react-native-config
* FlatList
* Fetch API

---

# License

This project is for learning and demonstration purposes.
