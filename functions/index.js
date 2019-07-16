const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	response.send('Hello from Firebase!');
// });

// firebase deploy --only functions
// const createNot = notification => {
// 	return
// };
exports.pushNotOnCardCreate = functions.firestore
	.document('Cards/{CardsID}')
	.onCreate(async doc => {
		const docData = doc.data();
		const userData = await admin.auth().getUser(docData.createdBy);
		const snapshot = await admin
			.firestore()
			.doc(`Boards/${docData.inDesk}`)
			.get();
		const contributors = snapshot.data().contributors;
		const not = {
			messege: `In desk ${docData.inDeskName} was added a card ${docData.name} by ${userData.email}`,
			contributors
		};
		return admin
			.firestore()
			.collection('notifications')
			.add(not);
	});

exports.pushNotOnCardUpdate = functions.firestore
	.document('Cards/{CardsID}')
	.onUpdate(async change => {
		const docData = change.after.data();
		const userData = await admin.auth().getUser(docData.createdBy);
		const snapshot = await admin
			.firestore()
			.doc(`Boards/${docData.inDesk}`)
			.get();
		const contributors = snapshot.data().contributors;
		const not = {
			messege: `In desk ${docData.inDeskName} a card ${docData.name} was modefied by ${userData.email}`,
			contributors
		};
		return admin
			.firestore()
			.collection('notifications')
			.add(not);
	});

exports.pushNotOnCardDelete = functions.firestore
	.document('Cards/{CardsID}')
	.onDelete(async doc => {
		const docData = doc.data();
		const userData = await admin.auth().getUser(docData.createdBy);
		const snapshot = await admin
			.firestore()
			.doc(`Boards/${docData.inDesk}`)
			.get();
		const contributors = snapshot.data().contributors;
		const not = {
			messege: `In desk ${docData.inDeskName} a card ${docData.name} was deleted by ${userData.email}`,
			contributors
		};
		return admin
			.firestore()
			.collection('notifications')
			.add(not);
	});
