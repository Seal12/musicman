import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Header from './header';
import { Routes } from '../Routes'

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class Main extends Component {
  constructor(props){
    super(props);
    this.state={ }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <main>
          <Routes />
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="title" align="center" gutterBottom>
            Powered by Seale Rapolai ©2018. Code licensed under an MIT-style License.
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
            Version 0.0.5-build.45333+sha.0139173.
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
