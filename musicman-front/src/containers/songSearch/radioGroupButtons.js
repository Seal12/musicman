import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '@material-ui/core/Radio';
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from '@material-ui/core/styles';

import { searchActions } from '../../_actions'
import { searchConstants } from '../../_constants';

const styles = theme => ({
  group: {
    margin: `${theme.spacing.unit}px 0`,
    display: 'inline'
  }
});

class RadioGroupButtons extends React.Component {
  constructor(props){
    super(props);
    let options = [
      {key: 1, name: 'Track Title', value: searchConstants.PROBER_TRACK},
      {key: 2, name: 'Artist', value: searchConstants.PROBER_ARTIST},
      {key: 3, name: 'Partial Lyrics', value: searchConstants.PROBER_LYRIC}
    ];
    this.state={
      selectedValue: options[0].value,
      options: options,
    };

  }

  handleChange = event => {
    var searchBy = event.target.value;
    this.props.changeProber(searchBy)
    this.setState({ selectedValue: searchBy });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <RadioGroup
            aria-label="search-criteria"
            name="search-criteria"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {this.state.options.map(option => (
              <FormControlLabel
                  key={option.key}
                  value={option.value}
                  control={<Radio checked={this.state.selectedValue === option.value} color="primary"/>}
                  label={option.name}
                  onChange={this.handleChange}
                />
              ))
            }
          </RadioGroup>
      </div>
    );
  }
}

RadioGroupButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

RadioGroupButtons = withStyles(styles)(RadioGroupButtons);

RadioGroupButtons.propTypes = {
  changeProber: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  prober: state.search.prober,
})


export default connect(
  mapStateToProps,
  {
    changeProber: searchActions.changeProber,
  }
)(RadioGroupButtons)
