import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  appBar: {
    position: 'relative',
    color: 'white'
  },
  button: {
    margin: theme.spacing.unit,
    outline: 'none',
    color: 'white'
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  title: {
    marginTop: '10px',
    marginBottom: '0px',
  }
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class Header extends Component{
  constructor(props){
    super(props);
    this.state={ }
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            <Button className={classes.button}>
              <HomeIcon className={classes.icon} />
              <h4 className={classes.title}>MusicMan</h4>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
