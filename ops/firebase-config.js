// ============================================================
// CarNexus — Firebase configuration
//
// 1. Go to https://console.firebase.google.com
// 2. Create a project (name it anything, e.g. "carnexus")
// 3. In the project, click the "</>" (web app) icon to register a web app
// 4. Copy the firebaseConfig values it gives you into the object below
// 5. In the left sidebar go to Build > Firestore Database > Create database
//    - Start in "test mode" for now (see note about security below)
// 6. Save this file, and re-upload it to GitHub alongside your other files
// ============================================================

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
  projectId: "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "PASTE_YOUR_SENDER_ID_HERE",
  appId: "PASTE_YOUR_APP_ID_HERE"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
// Avoids some ad-blockers / privacy extensions flagging Firestore's streaming
// connection as tracking (shows as ERR_BLOCKED_BY_CLIENT in the console).
window.db.settings({ experimentalAutoDetectLongPolling: true });
