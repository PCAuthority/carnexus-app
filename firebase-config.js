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
  apiKey: "AIzaSyAZ0XcUR2nzEovhbk2cIRhxmLLvtXDaMoY",
  authDomain: "carnexus-dea3f.firebaseapp.com",
  projectId: "carnexus-dea3f",
  storageBucket: "carnexus-dea3f.firebasestorage.app",
  messagingSenderId: "181231983343",
  appId: "1:181231983343:web:8162e1cd6b5de181d5991a"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();
// Avoids some ad-blockers / privacy extensions flagging Firestore's streaming
// connection as tracking (shows as ERR_BLOCKED_BY_CLIENT in the console).
window.db.settings({ experimentalAutoDetectLongPolling: true, merge: true });
