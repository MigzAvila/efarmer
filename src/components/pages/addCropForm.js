import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../components/Controls/Control";
import { useForm, Form } from "../../components/useForm";
import * as cropData from "../../components/data/cropData";

const initialFValues = {
  id: 0,
  field: "",
  crop: "",
  land: "",
  stageId: "",
  startDate: new Date(),
  harvestDate: new Date(),
  fertilizer: "",
  fieldMap: "",
};

export default function CropForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("field" in fieldValues)
      temp.field = fieldValues.field ? "" : "This field is required.";
    if ("crop" in fieldValues)
      temp.crop = fieldValues.crop ? "" : "This field is required.";
    if ("land" in fieldValues)
      temp.land = fieldValues.land ? "" : "This field is required";
    if ("stageId" in fieldValues)
      temp.stageId = fieldValues.stageId ? "" : "This field is required.";
    if ("startDate" in fieldValues)
      temp.startDate = fieldValues.startDate ? "" : "This field is required.";
    if ("harvestDate" in fieldValues)
      temp.harvestDate = fieldValues.harvestDate
        ? ""
        : "This field is required.";
    if ("fertilizer" in fieldValues)
      temp.fertilizer = fieldValues.fertilizer ? "" : "This field is required.";
    if ("fieldMap" in fieldValues)
      temp.fieldMap = fieldValues.fieldMap ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("d");

    addOrEdit(values, resetForm);
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="field"
            label="Field"
            value={values.field}
            onChange={handleInputChange}
            error={errors.field}
          />
          <Controls.Input
            label="Crop"
            name="crop"
            value={values.crop}
            onChange={handleInputChange}
            error={errors.crop}
          />
          <Controls.Input
            label="Land Usage"
            name="land"
            value={values.land}
            onChange={handleInputChange}
            error={errors.land}
          />
          <Controls.Select
            name="stageId"
            label="Stage"
            value={values.stageId}
            onChange={handleInputChange}
            options={cropData.getStageCollection()}
            error={errors.stafeId}
          />
          <Controls.DatePicker
            name="startDate"
            label="Start Date"
            value={values.startDate}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="harvestDate"
            label="Harvest Date"
            value={values.harvestDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Fertilizer and Pesticides"
            name="fertilizer"
            value={values.fertilizer}
            onChange={handleInputChange}
            error={errors.fertilzier}
          />

          <Controls.Input
            label="Field Map"
            name="fieldMap"
            value={values.fieldMap}
            onChange={handleInputChange}
            error={errors.fieldMap}
          />
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15248.985749321982!2d-89.0847856!3d17.1582192!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbz!4v1637188915037!5m2!1sen!2sbz" width="600" height="450" style="border:0;"  loading="lazy"'
              title="Field Map"
            ></iframe>
          </div>

          <div></div>
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
