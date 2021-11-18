import React from "react";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'location', headerName: 'Location', width: 180 },
    { field: 'livestockCrop', headerName: 'Livestock/Crop', width: 190 },
    {
      field: 'cropLivestockId',
      headerName: 'Crop/Livestock ID',
      type: 'number',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
     
    },
  ];
  
  const rows = [
    { id: 1, location: 'Field 1', livestockCrop: 'Cows', cropLivestockId: 192, status: 'Growing' },
    { id: 2, location: 'Field 2', livestockCrop: 'Corn', cropLivestockId: 100, status: 'Harvesting' },
    { id: 3, location: 'Field 5', livestockCrop: 'Beans', cropLivestockId: 180, status: 'Planting' },
    { id: 4, location: 'Field 6', livestockCrop: 'Pigs', cropLivestockId: 190, status: 'Nursey' }
  
  ];
const search = () => {
    return (
      <div >
        <h1 style={{ textAlign: "center" }}>Search for Livestock / Crop</h1>
        <br />
        
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>

      </div>
    );
  };
  
  export default search;