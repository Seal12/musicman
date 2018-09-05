import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { connect } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { searchActions } from '../../_actions'
import { searchConstants } from '../../_constants';

const suggestions = [
  { track: "Thriller", artist: "Michael Jackson", lyrics: "" },
  { track: "Like a Prayer", artist: "Madonna", lyrics: "" },
  { track: "When Doves Cry", artist: "Prince", lyrics: "" },
  { track: "I Wanna Dance With Somebody", artist: "Whitney Houston", lyrics: "" },
  { track: "Baby One More Time", artist: "Britney Spears", lyrics: "" },
  { track: "It’s Gonna Be Me", artist: "N Sync", lyrics: "" },
  { track: "Everybody (Backstreet’s Back)", artist: "Backstreet Boys", lyrics: "" },
  { track: "Rolling in the Deep", artist: "Adele", lyrics: "" },
  { track: "Don’t Stop Believing", artist: "Journey", lyrics: "" },
  { track: "Billie Jean", artist: "Michael Jackson", lyrics: "" },
  { track: "Single Ladies (Put a Ring on It)", artist: "Beyoncé", lyrics: "" },
  { track: "Genie in a Bottle", artist: "Christina Aguilera", lyrics: "" },
  { track: "Hollaback Girl", artist: "Gwen Stefani", lyrics: "" },
  { track: "Call Me Maybe", artist: "Carly Rae Jepsen", lyrics: "" },
  { track: "Uptown Funk", artist: "Mark Ronson and Bruno Mars", lyrics: "" },
  { track: "Shake it Of", artist: "Taylor Swift", lyrics: "" },
  { track: "Party in the U.S.A.", artist: "Miley Cyrus", lyrics: "" },
  { track: "Sorry", artist: "Justin Bieber", lyrics: "" },
  { track: "Firework", artist: "Katy Perry", lyrics: "" },
  { track: "No Scrubs", artist: "TLC", lyrics: "" },

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
  const isSelected = (selectedItem || '').indexOf(suggestion.track) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.track}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      <span>{suggestion.track} <strong> BY </strong> {suggestion.artist}</span>
    </MenuItem>
  );
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.object.isRequired,
};

function getSuggestions(inputValue, type) {
  let count = 0;
  const maxResult = 5

  return suggestions.filter(suggestion => {
    switch (type){
      case searchConstants.PROBER_TRACK:
        count += 1;
        return (!inputValue || suggestion.track.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
                  count <= maxResult;

      case searchConstants.PROBER_ARTIST:
        count += 1;
        return (!inputValue || suggestion.artist.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
                  count <= maxResult;

      case searchConstants.PROBER_LYRIC:
        count += 1;
        return (!inputValue || suggestion.lyrics.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
                  count <= maxResult;

      default:
        return true
    }
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
    this.state= {
      searchBy: this.props.prober
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({
      searchBy: nextProps.prober,
    })
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.searchBy);
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
                  {getSuggestions(inputValue, this.state.searchBy).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.track }),
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

AutoComplete = withStyles(styles)(AutoComplete)

const mapStateToProps = (state) => ({
  prober: state.search.prober,
})


export default connect( mapStateToProps, {} )(AutoComplete)
