import React, { Component } from 'react';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

import gclef_shodow_md from '../assets/gclef_shodow_md.png';

import { albumActions } from '../_actions'

import Body from './body';
import Loader from './common/loader'

const styles = theme => ({
  appBar: {
    position: 'relative',
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
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
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
    {_id: 1, title: 'Album 1', artist: "Artist 1", songs: 2, url: ""},
    {_id: 2, title: 'Album 1', artist: "Artist 2", songs: 5, url: ""},
    {_id: 3, title: 'Album 1', artist: "Artist 3", songs: 8, url: ""},
    {_id: 4, title: 'Album 1', artist: "Artist 4", songs: 1, url: ""},
    {_id: 5, title: 'Album 1', artist: "Artist 5", songs: 3, url: ""},
  ];
class Albums extends Component {
  constructor(props){
    super(props);
    this.state= {
      loading: true,
      cards: dummyData,
      albums: []
     }
  }
  componentDidMount() {
    var albums = this.props.getAll();
    this.setState({albums: albums, loading: false})
  }

  componentWillReceiveProps(nextProps){
    this.setState({albums: nextProps.albums, loading: nextProps.loading})
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
        {/* End hero unit */}
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {this.state.loading && <Loader />}
          {!this.state.loading &&
            <Grid container spacing={40}>
              {this.state.albums.map(album => (
                <Grid item key={album._id} sm={6} md={4} lg={3}>
                  <Card>
                    <CardMedia
                      className={classes.cardMedia}
                      image={gclef_shodow_md}
                      title="Image title"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        {album.title}
                      </Typography>
                      <Typography>
                        <strong>Artist:</strong> {album.artist}
                      </Typography>
                      <Typography>
                        <strong>Songs:</strong> {album.songs}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            }
            </Grid>
          }
        </div>
      </Body>
    );
  }
}

Albums.propTypes = {
  classes: PropTypes.object.isRequired,
};

Albums = withStyles(styles)(Albums);

Albums.propTypes = {
  create: PropTypes.func.isRequired,
  getAll: PropTypes.func.isRequired,
  getById: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  album: state.albums.album,
  albums: state.albums.albums,
  loading: state.albums.loading,
  error: state.albums.error,
  success: state.albums.success,
})

export default connect(
  mapStateToProps,
  {
    create: albumActions.create,
    getAll: albumActions.getAll,
    getById: albumActions.getById,
    update: albumActions.update,
    remove: albumActions.remove
  }
)(Albums)
