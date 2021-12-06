import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Control";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { useForm, Form } from '../../components/useForm';
import * as cropData from "../../components/data/cropData";
import GeoLocal from '../../components/pages/GeoLocation'





const initialFValues = {
    id: 0,
    field: '',
    croptypeId: '',
    land: '',
    stageId: '',
    startDate: new Date(),
    harvestDate:new Date(),
    fertilizer:'',
    fieldMap:''

   
}





export default function CropForm(props)  {

    
        const { addOrEdit, recordForEdit } = props
        
   

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('field' in fieldValues)
            temp.field = fieldValues.field ? "" : "This field is required."
        if ('crop' in fieldValues)
          temp.crop = fieldValues.crop ? "" : "This field is required."
        if ('land' in fieldValues)
            temp.land = fieldValues.land? "" : "This field is required"
        if ('stageId' in fieldValues)
            temp.stageId = fieldValues.stageId ? "" : "This field is required."
        if ('startDate' in fieldValues)
            temp.startDate = fieldValues.startDate ? "" : "This field is required."
        if ('harvestDate' in fieldValues)
            temp.harvestDate = fieldValues.harvestDate ? "" : "This field is required."
        if ('fertilizer' in fieldValues)
            temp.fertilizer = fieldValues.fertilizer ? "" : "This field is required."
       
        setErrors({
            ...temp
        })
    
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log('d');
    
        
            addOrEdit(values, resetForm);
        
             
    }
    
    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])
 

   

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
                   
                    <Controls.Select
                        name="croptypeId"
                        label="Crop"
                        value={values.croptypeId}
                        onChange={handleInputChange}
                        options={cropData.getCropCollection()}
                        error={errors.croptypeId}
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
                        error={errors.stageId}
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
                      
                   <GeoLocal />
                   

                    <div>
                    </div>
                    <div>
                    
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}