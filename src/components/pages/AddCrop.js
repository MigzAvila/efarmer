import React, { useState } from 'react'
import { Grid, } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import PageHeader from '../../components/PageHeader';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as cropData from "../../components/data/cropData";
import Controls from "../../components/Controls/Control";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Popup from '../../components/Popup';
import AddCropForm from "./addCropForm";
import AddLivestockForm from "./addLivestockForm"; 
import Notification from "../../components/Notification";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '125%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'field', label: 'Field - Location' },
    { id: 'crop', label: 'Crop / Livestock' },
    { id: 'LandUsage', label: 'Land Usage' },

    { id: 'Stage', label: 'Stage' }
   
]

const AddCrop = () => {
    const classes = useStyles;
    const [openPopup, setOpenPopup] = useState(false)
    const [openPopLivestock, setOpenLivestockPopup] = useState(false)
    const [records, setRecords] = useState(cropData.getAllCrops())
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })

    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable( records, headCells, filterFn)

    const addOrEdit = (crop, resetForm) => {
        if (crop.id === 0)
            cropData.addCrop(crop)
        else
            cropData.updateCrop(cropData)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(cropData.getAllCrops())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }
    const openInPopup = item => {
        // setRecordForEdit(item)
        setOpenPopup(true)
    }

    const openInLivestockPopup = item =>{

        setOpenLivestockPopup(true)
    }
    
    
    return (
      <div >
        <h1 style={{ textAlign: "center" }}> Crop</h1>
        <br />

        <Paper className={classes.pageContent}>
        <Toolbar>
                    <Controls.Input
                        label="Search Crop and LiveStock"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        // onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add Crop"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                         onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                    <Controls.Button
                        text="Add LiveStock"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                         onClick={() => { setOpenLivestockPopup(true) }}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.field}</TableCell>
                                    <TableCell>{item.crop}</TableCell>
                                    <TableCell>{item.LandUsage}</TableCell>
                                    <TableCell>{item.Stage}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                // setConfirmDialog({
                                                //     isOpen: true,
                                                //     title: 'Are you sure to delete this record?',
                                                //     subTitle: "You can't undo this operation",
                                                //     onConfirm: () => { onDelete(item.id) }
                                                // })
                                            }}>
                                            <CloseIcon fontSize="small" />
                                        </Controls.ActionButton>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
        </Paper>
            <Popup
                title="Add Crop"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
               
                  <AddCropForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                  />
            </Popup> 
            <Popup
                title="Add LiveStock"
                openLivestock={openPopLivestock}
                setOpenLivestockPopup={setOpenLivestockPopup}
            >
                <AddLivestockForm/>
                  
            </Popup>  

              <Notification
                notify={notify}
                setNotify={setNotify}
            />               
      </div>
    );
  };
  
  export default AddCrop;