import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
      {key: 1, name: 'Track Title'},
      {key: 2, name: 'Artist'},
      {key: 3, name: 'Partial Lyrics'}
    ];
    this.state={
      selectedValue: options[0].name,
      options: options
    };
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
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
                  value={option.name}
                  control={<Radio checked={this.state.selectedValue === option.name} color="primary"/>}
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

export default withStyles(styles)(RadioGroupButtons);
