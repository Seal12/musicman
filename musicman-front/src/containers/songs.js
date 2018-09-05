import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import gclef_shodow_md from '../assets/gclef_shodow_md.png';

import { songActions } from '../_actions'

import Body from './body';

const styles = theme => ({
  addButton: {
    margin: theme.spacing.unit,
    position: 'absolute',
    right: '20px',
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
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
});

var dummyData = [
  {_id: 1, title: 'Song 1', artist: "Artist 1", genre: "Gendre A", url: ""},
  {_id: 2, title: 'Song 2', artist: "Artist 2", genre: "Gendre C", url: ""},
  {_id: 3, title: 'Song 3', artist: "Artist 3", genre: "Gendre C", url: ""},
  {_id: 4, title: 'Song 4', artist: "Artist 4", genre: "Gendre B", url: ""},
  {_id: 5, title: 'Song 5', artist: "Artist 5", genre: "Gendre A", url: ""},
]
class Songs extends Component {
  constructor(props){
    super(props);
    this.state= {
      cards: dummyData,
      songs: []
     }
  }

  componentDidMount() {
    this.props.getAll();
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({
      songs: nextProps.songs,
      loading: nextProps.loading,
      success: nextProps.success
    })
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.songs);
    return (
      <Body>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
              My Songs
            </Typography>
            <Typography variant="title" align="center" color="textSecondary" paragraph>
              View a list songs you saved
            </Typography>
          </div>
          <Button variant="fab" color="primary" aria-label="Add" className={classes.addButton}>
            <AddIcon />
          </Button>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {this.state.songs && this.state.songs.map(card => (
              <Grid item key={card._id} sm={6} md={4} lg={3}>
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
                      <strong>Genre:</strong> {card.genre}
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

Songs.propTypes = {
  classes: PropTypes.object.isRequired,
};

Songs = withStyles(styles)(Songs);

Songs.propTypes = {
  create: PropTypes.func.isRequired,
  getAll: PropTypes.func.isRequired,
  getById: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  song: state.songs.song,
  songs: state.songs.songs,
  loading: state.songs.loading,
  error: state.songs.error,
  success: state.songs.success,
})

export default connect(
  mapStateToProps,
  {
    create: songActions.create,
    getAll: songActions.getAll,
    getById: songActions.getById,
    update: songActions.update,
    remove: songActions.remove
  }
)(Songs)
