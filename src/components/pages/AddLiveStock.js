import React, { useState } from 'react'
import { Grid, } from '@material-ui/core';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as livestockData from "../../components/data/livestockData";
import Controls from "../../components/Controls/Control";
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Popup from '../../components/Popup';
import AddLivestockForm from "./addLivestockForm";
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '500px'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


const headCells = [
    { id: 'species', label: 'Species' },
    { id: 'breed', label: 'Breed' },
    { id: 'age', label: 'Age' },
    { id: 'stage', label: 'Stage' },
    { id : 'Action', label: 'Actions'}
   
]

const AddLiveStock = () => {
    const classes = useStyles;
    const [openPopup, setOpenPopup] = useState(false)
    const [records, setRecords] = useState(livestockData.getAllLivestocks())
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable( records, headCells, filterFn)

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.species.toLowerCase().includes(target.value))
            }
        })
    }
    const addOrEdit = (livestock, resetForm) => {
        if (livestock.id === 0)
            livestockData.addLivestock(livestock)
        else
            livestockData.updateLivestock(livestock)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(livestockData.getAllLivestocks())
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
        })
    }
    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

  

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        livestockData.deleteLivestock(id);
        setRecords(livestockData.getAllLivestocks())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }
    
    
    return (
      <div >
        <h1 style={{ textAlign: "center" }}> Livestock</h1>
        <br />

        <Paper className={classes.pageContent}>
        <Toolbar>
                    <Controls.Input
                        label="Search Livestock"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add Livestock"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                         onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
               
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.species}</TableCell>
                                    <TableCell>{item.breed}</TableCell>
                                    <TableCell>{item.age}</TableCell>
                                    <TableCell>{item.stage}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure to delete this record?',
                                                    subTitle: "You can't undo this operation",
                                                    onConfirm: () => { onDelete(item.id) }
                                                })
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
                title="Add Livestock"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <AddLivestockForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup> 
           

            <Notification
                notify={notify}
                setNotify={setNotify}
            />    

            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />           
      </div>
    );
  };
  
  export default AddLiveStock;