# react-mobx-firebase-authentication

Project based on Robin Wieruch's tutorial, updated to recent versions of React, MobX, and Firebase.


[![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/)

* Found in [Taming the State in React](https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE)
* [Live](https://react-firebase-authentication.wieruch.com/)
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
   
   3 crases aqui
   git clone <repo-url>
   cd react-mobx-firebase-authentication
   3 crases aqui

2. Install dependencies:
   
   3 crases aqui
   npm install
   3 crases aqui

3. Set up your Firebase credentials:

- Create a Firebase project in the Firebase console  
- Enable Email/Password sign-in method  
- Paste your credentials into `src/firebase/firebase.js`

4. Start the development server:
   
   3 crases aqui
   npm start
   3 crases aqui

5. Open your browser and go to: http://localhost:3000

## Build for Production

To create a production build:

3 crases aqui
npm run build
3 crases aqui

## Running Tests

To run tests:

3 crases aqui
npm test
3 crases aqui

## Notes

- This project uses MobX decorators configured with modern Babel setup (no legacy plugins).  
- If you have permission issues on files (e.g., node_modules), fix with appropriate `chown` or `chmod`.  
- For questions or contributions, please open issues or pull requests on GitHub.

