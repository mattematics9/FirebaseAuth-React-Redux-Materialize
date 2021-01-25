##ABOUT

This project integrates Firebase Authentication with React. If we are logged in, we display a profile page that contains the user's name, email, and picture.  The user's email is stored in Firebase Auth. The user's name is stored in Cloud Firestore.  The user's picture is stored in Firebase Storage.  This project incorporates the basics that are covered in the "FirebaseAuth-React" project--signing up a user, logging in a user, displaying a user profile, and displaying a navigation that is dependent upon whether the user is logged in or logged out--but in addition we also add styling via Materialize, use Redux to store the user on the client instead of the Context API, and retrieve a users picture from Firebase Storage and display it in the profile.   To see the simplified project that just covers the basics mentioned above without the extra features, view the repo "FirebaseAuth-React".  



##FLOW:

Signing up and creating an account will create a User Authentication object in the Firebase Auth Service. As users with an account log in and log out, this Auth object is sent back and forth between Firebase and the client.  The Auth Object is represented in the code throughout the project by 'userAuth'.  If the user is logged out, userAuth = null.  If the User logs in, userAuth contains information about the User.  The 'user' property in userAuth has most of the users information that we need.  userAuth.user.email gives us the email of the user.  userAuth.user.photoURL gives us the URL of the profile picture for the user. userAuth.user.uid is the User's ID #.  This ID is important because it will not only identify the user in Firebase Auth, but we will also set it up so that that same ID identifies the user in Cloud Firestore and Cloud Storage, so there will be one ID that connects the user between all 3 services.  

On the client we will use Redux to store the user's information on a global state.  The Redux store will have a 'currentUser' property, which will itself contain 2 properties: 1) 'user', and 2) 'userFirestoreDoc'.  'user' in the Redux store will be userAuth.user, the 'user' property on the 'userAuth' object that we receive from Firebase Auth.  'userFirestoreDoc' will represent the document in Cloud Firestore pertaining to that user.  In this project we use Cloud Firestore to store the name of the user.  We could have actually used Firebase Auth to store the name in the 'displayName' property in userAuth.user, but I wanted to incorporate Cloud Firestore into the project.  

After you are signed in, the Redux store is populated with the information from Firebase Auth and Cloud Firestore.  Any component that wants to subscribe to changes in the Redux store does so using the 'connect' function from 'react-redux'.  We use 'mapStateToProps' to add a property to the component's props that have values from the state.  We use 'mapDispatchToProps' to add a property to the component's props that has the dispatch method.  

The 'Navbar' component is always rendered.  If you are logged out, the Navbar component renders the 'SignedOutLinks' component.  If you are logged in, the Navbar component renders the 'LoggedInLinks' component.  The 'Navbar' component knows if you are logged in or out because it uses 'connect' to subscribe to changes in the state of the Redux Store, so anytime the store changes, Navbar re-renders, and then 'LoggedInLinks' and 'SignedOutLinks' re-render conditionally.  Just like the 'Navbar' component, the 'Home' component is always rendered regardless if you are logged in or out.  If you are logged out, the Home component renders 'null', so you see a blank screen.  If you are logged in, the 'Home' component renders the 'Profile' component.  The 'Profile' component is a Materialize CSS Card that contains the user's profile picture, email, and name.  The first time you sign up and are logged in, the email and name will be displayed but there will not be a profile picture.  Clicking the 'edit' button on the Card will render the 'EditProfile' component.  Here you can edit the users information, including uploading a profile picture.  We use Cloud Storage to store the profile picture, and we use userAuth.user.photoURL to store the URL for the profile picture in Cloud Storage.  We can retrieve the URL from currentUser.user.photoURL in our Redux Store and inject it into an 'img' jsx tag.  



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

We include the .env.local file in the .gitignore file, so when we push to github, other people will not be able to access our firebase services. If we were to deploy this app online for users to use, we would not use environement variables at all, and just include the original firebaseConfig object in our src/firebase/config.js file.




