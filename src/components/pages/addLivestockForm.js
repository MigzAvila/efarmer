import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/Controls/Control";
import { useForm, Form } from '../../components/useForm';
import * as cropData from "../../components/data/cropData";



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
    orgin: '',
    weight: '',
    goalWeight:'',

   
}

export default function LivestockForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

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