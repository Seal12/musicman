import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const suggestions = [
  { label: '“Thriller” by Michael Jackson' },
  { label: '“Like a Prayer” by Madonna' },
  { label: '“When Doves Cry” by Prince' },
  { label: '“I Wanna Dance With Somebody” by Whitney Houston' },
  { label: '“Baby One More Time” by Britney Spears' },
  { label: '“It’s Gonna Be Me” by ‘N Sync' },
  { label: '“Everybody (Backstreet’s Back)” by the Backstreet Boys' },
  { label: '“Rolling in the Deep” by Adele' },
  { label: '“Don’t Stop Believing” by Journey' },
  { label: '“Billie Jean” by Michael Jackson' },
  { label: '“Single Ladies (Put a Ring on It)” by Beyoncé' },
  { label: '“Genie in a Bottle” by Christina Aguilera' },
  { label: '“Hollaback Girl” by Gwen Stefani' },
  { label: '“Call Me Maybe” by Carly Rae Jepsen' },
  { label: '“Uptown Funk” by Mark Ronson and Bruno Mars' },
  { label: '“Shake it Off” by Taylor Swift' },
  { label: '“Party in the U.S.A.” by Miley Cyrus' },
  { label: '“Sorry” by Justin Bieber' },
  { label: '“Firework” by Katy Perry' },
  { label: '“No Scrubs” by TLC' },
];

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(inputValue) {
  let count = 0;

  return suggestions.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
});

class AutoComplete extends Component {
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Downshift id="downshift-simple">
          {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder: 'Search a song',
                }),
              })}
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          )}
        </Downshift>
      </div>
    );
  }

}

AutoComplete.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoComplete);
