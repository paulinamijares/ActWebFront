import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import ResponsiveAppBar from './NavBar.jsx';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 21 }
];

export default function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
        <Typography variant="h4"  textAlign='center' style={{ marginTop: '40px' ,fontWeight:"bolder" }}>
        Dashboard
        </Typography>
        <ResponsiveAppBar />
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 1 }}>
        
            <Box sx={{ p: 2 }}>
            <Paper elevation={3} sx={{ p: 2 }} style={{ marginBottom: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                    Data Table
                    </Typography>
                    <Box sx={{ height: 150, width: '100%'}}>
                    <DataGrid 
                        rows={rows}
                        columns={columns}
                        pagination={false} 
                        hideFooter
                        disableRowSelectionOnClick
                        rowHeight={30}
                        sx={{ 
                            height: '150px',
                            fontSize: '12px',
                        }}
                    />

                    </Box>
                </Paper>
                
                <Paper elevation={3} sx={{ p: 2 }} style={{ padding: 20, marginBottom: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                        Quarterly Performance
                        </Typography>
                        <BarChart
                            series={[
                                { data: [35, 44, 24, 34] },
                                { data: [51, 6, 49, 30] },
                                { data: [15, 25, 30, 50] },
                                { data: [60, 50, 15, 25] },
                            ]}
                            height={125}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        />
                </Paper>
            </Box>

            <Box sx={{ p: 2 }}>
                <div>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                        Metrics
                        </Typography>
                        <Stack direction="column" spacing={3} alignItems="center">
                        <Gauge width={175} height={175} value={70} innerRadius={40} />
                        <Gauge width={175} height={175} value={90} startAngle={-90} endAngle={90} innerRadius={40}/>
                        </Stack>
                    </Paper>
                </div>
            </Box>
        
        </Box>
    </Box>
  );
}
