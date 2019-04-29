import React from "react";

import PieChart from "../../components/PieChart";
import SimpleSelect from "../../components/Dropdown";

import data from "./../../assets/bat_yam_pedestrians_count_per_year.json";


// function AccidentSeverityByYear() {

//   const formattedData = data.filter(d=>d.accident_year==="2008").map(d => ({
//     id: d.injury_severity,
//     value: d.count,
//     label: `${d.injury_severity_hebrew}`
//   }));

//   return (
//     <>
//       <h3 style={{ textAlign: "center" }}>Accident Severity By Year</h3>

//       <SimpleSelect />
//       <PieChart data={formattedData} />
//     </>
//   );
// }

// export default AccidentSeverityByYear;




import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class AccidentSeverityByYear extends React.Component {
  state = {
    year: '',
    labelWidth: 200,
  };

  handleChange = event => {
    console.log(event)
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    const years =  [...new Set(data.map(d => d.accident_year))]; 

    const formattedData = data.filter(d=>d.accident_year===(this.state.year!==''?this.state.year:years[0])).map(d => ({
      id: d.injury_severity,
      value: d.count,
      label: `${d.injury_severity_hebrew}`
    }));


    return (
      <>
          <div style={{display: 'flex', flexFlow: 'row nowrap',  justifyContent: 'space-between'}}>
            <h3>Accident Severity By Year</h3>  
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="year-simple">Year</InputLabel>
          <Select
            value={this.state.year!==''?this.state.year:years[0]}
            onChange={this.handleChange}
            inputProps={{
              name: 'year',
              id: 'year-simple',
            }}
          >
            {years.map(d=><MenuItem value={d}>{d}</MenuItem>)}
          </Select>
        </FormControl>

          </div>
          
    
      

          <PieChart data={formattedData} />
</>


    );
  }
}

AccidentSeverityByYear.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccidentSeverityByYear);


