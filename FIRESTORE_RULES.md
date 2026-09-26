# Firestore Security Rules — The Global Food Encyclopedia

Paste these rules into the Firebase console under **Build > Firestore Database >
Rules**, then click **Publish**. They let each signed-in user read and write
only their own shelf document (`users/{uid}/shelf/main`) — nothing else in the
database is accessible.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Each user's private shelf: only that signed-in user may read/write it.
    match /users/{uid}/shelf/main {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    // Everything else: deny by default.
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

The site writes a document shaped like:

```json
{
  "fav": ["Picanha", "..."],
  "try": ["..."],
  "tried": ["..."],
  "viewed": ["..."],
  "myratings": { "Picanha": 5 },
  "updatedAt": "<server timestamp>"
}
```
