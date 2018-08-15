import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class Playlists extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div><h1>Playlists Page (Temp)</h1></div>
    );
  }
}

Playlists.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Playlists);
