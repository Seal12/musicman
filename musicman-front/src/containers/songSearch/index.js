import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import AutoComplete from './autocomplete';
import RadioGroupButtons from './radioGroupButtons';

const styles = theme => ({
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  }
});

class SongSearch extends Component {
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroButtons}>
        <Grid container spacing={16}>
          <RadioGroupButtons />
        </Grid>
        <Grid container spacing={16} justify="center">
          <AutoComplete />
        </Grid>
      </div>
    )
  }
}

SongSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SongSearch);
