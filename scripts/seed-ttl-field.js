const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc, Timestamp } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDummyKeyForFreeTier", // This is locally substituted by env in build, but I'll use the placeholder or real key if I can find it.
    projectId: "spelling-bee-relay-1025"
};

// Actually, I should use the REAL API Key from the environment if available
const apiKey = process.env.FIREBASE_API_KEY || "AIzaSyDummyKeyForFreeTier";
const projectId = process.env.RELAY_PROJECT_ID || "spelling-bee-relay-1025";

const app = initializeApp({ apiKey, projectId });
const db = getFirestore(app);

async function seed() {
    console.log(`Seeding dummy document to ${projectId}...`);
    await setDoc(doc(db, 'rooms', '_ttl_seed'), {
        expiresAt: Timestamp.fromMillis(Date.now() + 1000 * 60 * 60 * 24),
        note: "This document exists to let the console recognize the expiresAt field."
    });
    console.log("Done! You should now see 'expiresAt' in the TTL dropdown.");
}

seed().catch(console.error);
