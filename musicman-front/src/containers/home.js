import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Body from './body';

import SongSearch from './songSearch';


import gclef_shodow_md from '../assets/gclef_shodow_md.png';

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
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
        {key: 1, name: 'Albums', description: "View a list albums you saved", url: "/albums"},
        {key: 2, name: 'Songs', description: "View all my songs", url: "/songs"},
        {key: 3, name: 'Playlists', description: "View my playlists", url: "/playlists"},
      ]
     }
  }

  render() {
    const { classes } = this.props;
    return (
      <Body>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              Welcome to <span className={classes.heroContent}>MusicMan</span>
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              MusicMan is a music management website that lets you keep a personal album of all your favourite songs. It allows you to search for songs by artist, album and even partial lyrics. Once you have your song, create a playlist for future use.
            </Typography>
            <SongSearch />
          </div>
        </div>
        {/* End hero unit */}
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {this.state.cards.map(card => (
              <Grid item key={card.key} sm={6} md={4} lg={4}>
                <Link to={card.url}>
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
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </Body>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
