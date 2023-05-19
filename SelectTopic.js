import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   formControlLabel: {
//     marginBottom: theme.spacing(1)
//   }
// }));

const SelectTopic = () => {
//   const classes = useStyles();
   const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  const handleDoneClick = () => {
    console.log(Object.keys(checkedItems).filter((key) => checkedItems[key]));
  };

  const checkboxes = [
    { label: "Education", name: "checkbox1" },
    { label: "Marketing", name: "checkbox2" },
    { label: "Finance", name: "checkbox3" },
    { label: "Photography", name: "checkbox4" },
    { label: "Development", name: "checkbox5" },
    { label: "Music", name: "checkbox6" },
    { label: "business", name: "checkbox7" },
    { label: "Programming", name: "checkbox8" },
    { label: "Fitness", name: "checkbox9" },
    { label: "Sports", name: "checkbox10" },
    { label: "History", name: "checkbox11" },
    { label: "Films", name: "checkbox12" },
    //{ label: "Madical", name: "checkbox13" },
    //{ label: "Politics", name: "checkbox14" },
   // { label: "Cooking", name: "checkbox15" },
    //{ label: "Traveling", name: "checkbox16" },
    //{ label: "Design", name: "checkbox17" },
    //{ label: "Fashion Designing", name: "checkbox18" },
    //{ label: "Islamic", name: "checkbox19" },
    //{ label: "Culture", name: "checkbox20" }
  ];

  return (
    <div >
      <h1 style={{textAlign:'center'}}>SELECT TOPIC</h1>
      <Grid container spacing={2}>
        {checkboxes.map((checkbox, index) => (
          <Grid key={checkbox.name} item xs={6}>
            <FormControlLabel
            //   className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={checkedItems[checkbox.name]}
                  onChange={handleChange}
                //   name={checkbox.name}
                  color={checkedItems[checkbox.name] ? "primary" : "default"}
                />
              }
              label={checkbox.label}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleDoneClick} style={{textAlign:'center'}} >
            Done
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SelectTopic;

