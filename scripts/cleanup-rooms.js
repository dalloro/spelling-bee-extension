// MIT License
// Copyright (c) 2025 Livio Dalloro
// See LICENSE file for details.

const admin = require('firebase-admin');

/**
 * Cleanup script to delete expired rooms.
 * Requires FIREBASE_SERVICE_ACCOUNT environment variable (JSON).
 */

if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    console.error("Missing FIREBASE_SERVICE_ACCOUNT environment variable.");
    process.exit(1);
}

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function cleanup() {
    console.log("Starting room cleanup...");

    // Find rooms where expiresAt is in the past
    const now = admin.firestore.Timestamp.now();
    const snapshot = await db.collection('rooms')
        .where('expiresAt', '<', now)
        .limit(500) // Firestore batch limit
        .get();

    if (snapshot.empty) {
        console.log("No expired rooms found.");
        return;
    }

    console.log(`Found ${snapshot.size} expired rooms. Deleting...`);

    const batch = db.batch();
    snapshot.forEach(doc => {
        batch.delete(doc.ref);
    });

    await batch.commit();
    console.log("Batch deletion committed successfully.");
}

cleanup()
    .then(() => process.exit(0))
    .catch(err => {
        console.error("Cleanup failed:", err);
        process.exit(1);
    });
