import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import useTable from "../../components/useTable";
import * as cropData from "../../components/data/cropData";
import Controls from "../../components/Controls/Control";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Popup from "../../components/Popup";
import AddCropForm from "./addCropForm";
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "500px",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "cropid", label: "Crop Id" },
  { id: "field", label: "Field - Location" },
  { id: "crop", label: "Crop" },
  { id: "LandUsage", label: "Land Usage" },
  { id: "Stage", label: "Stage" },
  { id: "Action", label: "Actions" },
];

const AddCrop = () => {
  const classes = useStyles;
  const [openPopup, setOpenPopup] = useState(false);
  const [records, setRecords] = useState(cropData.getAllCrops());
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.crop.toLowerCase().includes(target.value)
          );
      },
    });
  };
  const addOrEdit = (crop, resetForm) => {
    if (crop.id === 0) cropData.addCrop(crop);
    else cropData.updateCrop(crop);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(cropData.getAllCrops());
    setNotify({
      isOpen: true,
      message: "Submitted Successfully Crop",
      type: "success",
    });
  };
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    cropData.deleteCrop(id);
    setRecords(cropData.getAllCrops());
    setNotify({
      isOpen: true,
      message: "Deleted Successfully Crop",
      type: "error",
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Crop</h1>
      <br />

      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Crop"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Controls.Button
            text="Add Crop"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.field}</TableCell>
                <TableCell>{item.croptype}</TableCell>
                <TableCell>{item.land}</TableCell>
                <TableCell>{item.stage}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlinedIcon fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="secondary"
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Are you sure to delete this record?",
                        subTitle: "You can't undo this operation",
                        onConfirm: () => {
                          onDelete(item.id);
                        },
                      });
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup title="Add Crop" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddCropForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>

      <Notification notify={notify} setNotify={setNotify} />

      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default AddCrop;
