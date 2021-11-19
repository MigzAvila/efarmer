import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Control";
import { useForm, Form } from '../../components/useForm';
import * as livestockData from "../../components/data/livestockData";



const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    
]

const initialFValues = {
    id: 0,
    species: '',
    breed: '',
    gender: '',
    age: '',
    stageId:'',
    orgin: '',
    weight: '',
    goalWeight:'',

   
}

export default function LivestockForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('species' in fieldValues)
            temp.species = fieldValues.species ? "" : "This field is required."
        if ('breed' in fieldValues)
         temp.breed = fieldValues.breed ? "" : "This field is required."

        if ('age' in fieldValues)
            temp.age = fieldValues.age ? "" : "This field is required."

        if ('stageId' in fieldValues)
            temp.stageId = fieldValues.stageId ? "" : "This field is required."
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
        if (validate()) {
            addOrEdit(values, resetForm);
        }
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
                        name="species"
                        label="Species"
                        value={values.field}
                        onChange={handleInputChange}
                        error={errors.field}
                    />
                    <Controls.Input
                        label="Breed"
                        name="breed"
                        value={values.breed}
                        onChange={handleInputChange}
                        error={errors.breed}
                    />
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Input
                        label="Age"
                        name="age"
                        value={values.age}
                        onChange={handleInputChange}
                        error={errors.age}
                    />

                    <Controls.Select
                        name="stageId"
                        label="Stage"
                        value={values.stageId}
                        onChange={handleInputChange}
                        options={livestockData.getStageCollection()}
                        error={errors.stageId}
                    />

                </Grid>
                <Grid item xs={6}>
                     <Controls.Input
                        label="Orgin"
                        name="orgin"
                        value={values.orgin}
                        onChange={handleInputChange}
                        error={errors.orgin}
                    />
                    <Controls.Input
                        label="Weight"
                        name="weight"
                        value={values.weight}
                        onChange={handleInputChange}
                        error={errors.weight}
                    />

                    <Controls.Input
                        label="Goal Weight"
                        name="goalWeight"
                        value={values.goalWeight}
                        onChange={handleInputChange}
                        error={errors.goalWeight}
                    />  

                    <Controls.Input
                        label="Field Map"
                        name="fieldMap"
                        value={values.fieldMap}
                        onChange={handleInputChange}
                        error={errors.fieldMap}
                    />

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