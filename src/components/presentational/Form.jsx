import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = ({distance, setDistance, costRatio, setCostRatio, onFieldChange, handleSubmit}) => {
    return (
        <form className="home__form" onSubmit={handleSubmit}>
          <div className="home__form-title">
            Introduce the data and calculate the route's cost!
          </div>
          <div className="home__form-inner-container">
            <TextField
              id="distance"
              variant="filled"
              className="home__form-input"
              placeholder="Introduce the distance in km"
              name="distance"
              required
              value={distance}
              onChange={(event) =>
                onFieldChange(event.target.value, setDistance)
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
              onChange={(event) =>
                onFieldChange(event.target.value, setCostRatio)
              }
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
    )
}

export default Form
