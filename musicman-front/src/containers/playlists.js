import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import PlaylistTable from './playlists/playlistTable';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '100%',
    marginRight: '0px !important',
    display: "flex"
  },
  listContainer: {
    minWidth: "15%"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Playlists extends Component  {
  constructor(props){
    super(props);
    this.state={
      open: true,
      playlists: [
        {name: "Playlist 1", songs: 35, description: ""},
        {name: "Playlist 2", songs: 67, description: ""},
        {name: "Playlist 3", songs: 15, description: ""}
      ]
    }
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">My Playlists</ListSubheader>}
         className={classes.listContainer}
        >
          {this.state.playlists.map(playList => (
            <ListItem button>
              <ListItemIcon>
                  <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary={playList.name} />
            </ListItem>
          ))}
        </List>
        <PlaylistTable />
      </div>
    );
  }
}

Playlists.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Playlists);
