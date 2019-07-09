import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const SearchResults = ({ results }) => {
  return results === null ? null : (
    <List>
      {results.map(el => (
        <ListItem button onClick={() => console.log("member")}>
          <ListItemText primary={el.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResults;
