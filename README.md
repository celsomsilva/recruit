![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![MobX](https://img.shields.io/badge/MobX-6.x-FF9955?logo=mobx&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-11.x-FFCA28?logo=firebase&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router%20DOM-7.x-ca4245?logo=reactrouter&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-5.x-007FFF?logo=mui&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-7.x-F9DC3E?logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/Webpack-5.x-8DD6F9?logo=webpack&logoColor=black)
![License](https://img.shields.io/github/license/celsomsilva/recruit)



# react-mobx-firebase-authentication

Project based on Robin Wieruch's tutorial, updated to recent versions of React, MobX, and Firebase.

* [Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)


## Technologies Used

- React 18.x (create-react-app)
- MobX 6.x (with decorators)
- Firebase 11.x
- React Router DOM 7.x
- Material-UI / MUI
- Babel 7.x (with decorators support)
- Webpack 5.x

## Features

- Firebase authentication (email and password)
- Sign up, sign in, sign out, password reset, and password change
- Protected routes with authorization
- State management with MobX using modern decorators
- User data persistence in Firebase

## Getting Started

1. Clone the repo and enter the directory:
   
   ```
   git clone <repo-url>
   cd react-mobx-firebase-authentication
   ```

2. Install dependencies:
   
   ```
   npm install
   ```

3. Set up your Firebase credentials:

- Create a Firebase project in the Firebase console  
- Enable Email/Password sign-in method  
- Paste your credentials into `src/firebase/firebase.js`

4. Start the development server:
   
   ```
   npm start
   ```

5. Open your browser and go to: http://localhost:3000

## Build for Production

To create a production build:

```
npm run build
```

## Running Tests

To run tests:

```
npm test
```

## Notes

- This project uses MobX decorators configured with modern Babel setup (no legacy plugins).  
- If you have permission issues on files (e.g., node_modules), fix with appropriate `chown` or `chmod`.  
- For questions or contributions, please open issues or pull requests on GitHub.

