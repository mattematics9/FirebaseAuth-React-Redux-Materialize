##ABOUT

This project integrates Firebase Authentication with React. If we are logged in, we display a profile page that contains the user's name, email, and picture.  The user's email is stored in Firebase Auth. The user's name is stored in Cloud Firestore.  The user's picture is stored in Firebase Storage.  This project incorporates the basics that are covered in the "FirebaseAuth-React" project--signing up a user, logging in a user, displaying a user profile, and displaying a navigation that is dependent upon whether the user is logged in or logged out--but in addition we also add styling via Materialize, signing in with Google, Redux to store the user on the client instead of the Context API, and retreiving a users picture from Firebase Storage.   To see the simplified project that just covers the basics mentioned above without the extra features, view the repo "FirebaseAuth-React".  

##FIREBASE SETUP AND ENVIRONMENT VARIABLES

In order to use Firebase you need to go through the following steps:

go to https://firebase.google.com and sign in with google.

Add a project. You do not need to enable google analytics but you can if you want.

Add a web app. You should see the web app option under "Get started by adding Firebase to your app". Name your app.

Add the Firebase SDK to your project. You will see something like this:

var firebaseConfig = {
    apiKey: "AIgaSyAvu__t_6LOw8kiPnZ2wjyUYeVgHN8UD5U",
    authDomain: "name-of-project.firebaseapp.com",
    databaseUrl: https://name-of-project.firebaseio.com
    projectId: "name-of-project",
    storageBucket: "name-of-project.appspot.com",
    messagingSenderId: "289923169528",
    appId: "1:289923169528:web:8b436e9dae4fa67fd4e791"
    measurementId: G-NQJ7JS8PWF
};

Instead of copying and pasting this object into src/firbase/config.js, I used a .env.local file to store the environment variables, and then I used process.env to retrieve them in the source code. This way, my app works on my local device, but when I push to github, other users will not be able to access my Firebase Auth and Cloud Firestore. You can replicate the procedure with your own firebase configuration and environment variables by following these steps:

In your root directory make a .env.local file. In this file we will store our firebase config values like so:

REACT_APP_FIREBASE_API_KEY = AIgaSyAvu__t_6LOw8kiPnZ2wjyUYeVgHN8UD5U
REACT_APP_FIREBASE_AUTH-DOMAIN = name-of-project.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL = https://name-of-project.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID = name-of-project
REACT_APP_FIREBASE_STORAGE_BUCKET = name-of-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = 289923169528
REACT_APP_FIREBASE_APP_ID = 1:289923169528:web:8b436e9dae4fa67fd4e791
REACT_APP_FIREBASE_MEASUREMENT_ID = G-NQJ7JS8PWF
Note: all environment variables in react need to start with REACT_APP. I then added _FIREBASE. The rest is just the names of the keys of the firebase config object. We use all caps and separate words with _

Therefore, in the src/firebase/config.js file, we see the following:

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

Now I included the .env.local file in the .gitignore file, so when I push to github, other people will not be able to access my firebase services. If I was to deploy this app online for users to use, I would not use environement variables at all, and just include the original firebaseConfig object in my src/firebase/config.js file.

When you are logged in to Firebase, you can see both the Authentication and Cloud Firestore tabs on the left hand side. We are using both of these to store information about the user.

##FLOW:

When a user first loads the app they are presented with a navigation that has the logged-out-links "Home", "Login", and "Sign Up", as well as the Home component that displays "This is the home page". Signing up the user will create a user in Firebase Auth. This Auth object, represented throughout the project as "userAuth", has a "user" property that contains the email of the user, as well as the user id, represented by "uid". The name entered by the user when signing up gets stored in Cloud Firestore in a document that has a name that is the same as the "uid". After you are signed in, Firebase sends to the client both the Auth object and the Cloud Firestore document for the user. The user is stored in the UserContext object specified in src/providers/UserProvider.js. This UserContext is passed down to every component that subscribes to the context, so when the user is changed, the context changes, and the rest of the components receive that change. Each component subscribes to the context by importing the UserContext from src/providers/UserProvider.js and getting the user from useContext(UserContext). After you are signed up you are directed to the user's profile page, which displays the following sentence:

    <users name> is logged in with email <users email>

You also see the navigation that has the logged-in-links "Home" and "Logout". If you logout you go back to the original home page, you sign out of Firebase Auth, the UserContext gets updated with 'null', and the components that subscribe to the context get informed that no user is logged in, and the UI updates accordingly. From this point on, you may login with the email and password and retrieve both the the Firebase Auth object that contains the user's email, as well as the Cloud Firestore document which contains the user's name. Both the email and name are then displayed on the profile page just like before.
