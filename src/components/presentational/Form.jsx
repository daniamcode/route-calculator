import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = ({
  option,
  setOption,
  distance,
  setDistance,
  costRatio,
  setCostRatio,
  origin,
  setOrigin,
  destination,
  setDestination,
  onFieldChange,
  handleSubmit,
}) => {
  const classes = useStyles();
  return (
    <form className="home__form" onSubmit={handleSubmit}>
      <div className="home__form-title">
        Introduce the data and calculate the route's cost!
      </div>
      <div className="home__form-inner-container">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Distance Entry</InputLabel>
          <Select
            labelId="option-label"
            id="option"
            value={option}
            onChange={(event) => onFieldChange(event.target.value, setOption)}
          >
            <MenuItem value={'Manually'}>Manually</MenuItem>
            <MenuItem value={'Via Origin and Destination'}>Via Origin and Destination</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="distance"
          variant="filled"
          className="home__form-input"
          placeholder="Introduce the distance in km"
          name="distance"
          required
          value={distance}
          onChange={(event) => onFieldChange(event.target.value, setDistance)}
        />
        <TextField
          id="origin"
          variant="filled"
          className="home__form-input"
          placeholder="Introduce the origin coordinates (i.e. 41.3879,2.16992)"
          name="origin"
          required
          value={origin}
          onChange={(event) => onFieldChange(event.target.value, setOrigin)}
        />
        <TextField
          id="destination"
          variant="filled"
          className="home__form-input"
          placeholder="Introduce the destination coordinates (i.e. 41.98311,2.82493)"
          name="destination"
          required
          value={destination}
          onChange={(event) =>
            onFieldChange(event.target.value, setDestination)
          }
        />
        <TextField
          id="costRatio"
          variant="filled"
          className="home__form-input"
          placeholder="Introduce the cost in €/km"
          name="costRatio"
          required
          value={costRatio}
          onChange={(event) => onFieldChange(event.target.value, setCostRatio)}
        />
        <Button
          variant="contained"
          color="primary"
          className="home__form-button"
          type="submit"
        >
          Calculate cost of the route
        </Button>
      </div>
    </form>
  );
};

export default Form;
