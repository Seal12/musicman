import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import AutoComplete from './common/autocomplete'

import gclef_shodow_md from '../assets/gclef_shodow_md.png';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  }
});

class Home extends Component {
  constructor(props){
    super(props);
    this.state= {
      cards: [
        {key: 1, name: 'Albums', description: "View a list albums you saved", url: ""},
        {key: 2, name: 'Songs', description: "View all my songs", url: ""},
        {key: 3, name: 'Playlists', description: "View my playlists", url: ""},
      ]
     }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Welcome to <span className={classes.heroContent}>MusicMan</span>
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              MusicMan is a music management website that lets you keep a personal album of all your favourite songs. It allows you to search for songs by artist, album and even partial lyrics. Once you have your song, create a playlist for future use.
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <AutoComplete />
              </Grid>
            </div>
          </div>
        </div>
        {/* End hero unit */}
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {this.state.cards.map(card => (
              <Grid item key={card.key} sm={6} md={4} lg={4}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image={gclef_shodow_md}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
