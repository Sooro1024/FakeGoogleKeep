import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { chageCardAction } from "../actions/cardActions";

const CardInputFields = ({ cardDesc, cardKey, changeCard }) => {
  // if (cardDesc === undefined) {
  //   // eslint-disable-next-line no-param-reassign
  //   cardDesc = "";
  // }
  const [descValue, setDescValue] = useState(cardDesc);
  const [nothigChanges, setNothigChanges] = useState(true);
  // useEffect(() => {}, []);

  function changeHanler(ev) {
    setNothigChanges(false);
    setDescValue(ev.target.value);
  }

  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Card Description"
        value={descValue}
        onChange={changeHanler}
      />
      <Button
        color="secondary"
        disabled={nothigChanges}
        onClick={() => {
          changeCard(descValue, cardKey);
          setNothigChanges(true);
        }}
      >
        Save changes
      </Button>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  changeCard: (descValue, cardKey) =>
    dispatch(chageCardAction(descValue, cardKey))
});

export default connect(
  null,
  mapDispatchToProps
)(CardInputFields);
