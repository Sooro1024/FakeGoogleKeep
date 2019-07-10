import React, { useEffect } from "react";
import { connect } from "react-redux";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { getCardsByListKey, deleteCardByKey } from "../actions/cardActions";

const TrelloCard = ({ listKey, getCards, cardLoading, cards, deleteCard }) => {
  useEffect(() => {
    getCards(listKey);
  }, [listKey, getCards, cardLoading]);

  if (cards === null) {
    return null;
  }
  if (cards[listKey] === undefined) {
    return null;
  }
  return cards[listKey].map(e => (
    <List key={e.key}>
      <ListItem button onClick={() => deleteCard(e.key)}>
        <ListItemText primary={e.values.name} />
      </ListItem>
    </List>
  ));
};

const mapStateToProps = state => {
  return {
    cards: state.firestoreReducer.cards,
    cardLoading: state.firestoreReducer.cardLoading
  };
};

const mapDispatchToProps = dispatch => ({
  getCards: listKey => dispatch(getCardsByListKey(listKey)),
  deleteCard: cardKey => dispatch(deleteCardByKey(cardKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrelloCard);
