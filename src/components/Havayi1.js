import React from 'react';
import { CRETATE_DESK } from '../actions/getDataAction';
import { connect } from 'react-redux';
import {
	Card,
	CardHeader,
	CardContent,
	CircularProgress
} from '@material-ui/core';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

const Havayi1 = ({ deskCollection, requested }) => {
	if (requested) {
		return deskCollection.map(el => (
			<Link to={`/${el.deskName}/:${el.id}`}>
				<Card key={el.id}>
					<CardHeader>{el.deskAuthor}</CardHeader>
					<CardContent>{el.deskName}</CardContent>
				</Card>
			</Link>
		));
	} else {
		return <CircularProgress />;
	}
};

const MapDispatchToProps = {
	// CRETATE_DESK
};

const MapStateToProps = state => ({
	deskCollection: state.firestore.ordered.deskCollection,
	requested: state.firestore.status.requested.deskCollection
});

export default compose(
	connect(
		MapStateToProps,
		MapDispatchToProps
	),
	firestoreConnect([
		{
			collection: 'deskCollection' // here wy tipe the collection name in our firestore colectione
		}
	])
)(Havayi1);
