import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import gclef_shodow_md from '../assets/gclef_shodow_md.png';

import Body from './body';
import { albumService } from '../_services';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class Albums extends Component {
  constructor(props){
    super(props);
    this.state= {
      cards: [
        {key: 1, title: 'Album 1', artist: "Artist 1", songs: 2, url: ""},
        {key: 2, title: 'Album 1', artist: "Artist 2", songs: 5, url: ""},
        {key: 3, title: 'Album 1', artist: "Artist 3", songs: 8, url: ""},
        {key: 4, title: 'Album 1', artist: "Artist 4", songs: 1, url: ""},
        {key: 5, title: 'Album 1', artist: "Artist 5", songs: 3, url: ""},
      ]
     }
     console.log(albumService.GetAll());

  }

  render() {
    const { classes } = this.props;
    return (
      <Body>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              My Albums
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              View a list albums you saved
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {this.state.cards.map(card => (
              <Grid item key={card.key} sm={6} md={4} lg={3}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image={gclef_shodow_md}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      <strong>Artist:</strong> {card.artist}
                    </Typography>
                    <Typography>
                      <strong>Songs:</strong> {card.songs}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Body>
    );
  }
}

Albums.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Albums);
