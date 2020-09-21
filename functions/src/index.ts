import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const getCollections = functions.https.onCall(async (data = {}) => {
    const collectionReferences = data.path
        ? await admin.firestore().doc(data.path).listCollections()
        : await admin.firestore().listCollections();

    return {
        collections: collectionReferences.map((collection) => {
            return { id: collection.id, path: collection.path };
        }),
    };
});
