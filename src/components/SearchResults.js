import React, { useState } from "react";
import { connect } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { addAContrebutorAction } from "../actions/userActions";

const SearchResults = ({ results, addMember }) => {
  const init = results.map(() => false);
  const [checked, setChecked] = useState(init);

  const handleChange = index => {
    checked[index] = !checked[index];
    setChecked([...checked]);
  };

  return results === null ? null : (
    <FormGroup>
      {results.map((el, index) => (
        <FormControlLabel
          key={el.key}
          control={
            <Checkbox
              checked={checked[index]}
              onChange={() => {
                handleChange(index);
                addMember(el.key);
              }}
              value="checkedA"
              disabled={el.isMamber}
            />
          }
          label={el.nickName}
        />
      ))}
    </FormGroup>
  );
};

const mapDispatchToProps = dispatch => ({
  addMember: key => dispatch(addAContrebutorAction(key))
});
export default connect(
  null,
  mapDispatchToProps
)(SearchResults);
