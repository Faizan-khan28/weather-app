import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function () {
    return (
        <div className='flex justify-center items-center h-[100vh] w-[100vw] '>
          <Container className='flex justify-center'>
            <Box sx={{ bgcolor: '#cfe8fc', height: '500px', width: "400px" }} className="flex items-center gap-9 rounded-md  flex-col" >
               <h1 className='font-medium text-[40px]'>Weather App</h1>
               <div>
                <TextField style={{width: "300px"}} label="Enter City Name" variant="outlined" />
               </div>
               <div>
                <Button style={{background: "black", width: "150px"}} variant="contained">Search</Button>
                </div>
              
               <div className='text-[18px] font-medium'>
                 <h1>Delhi</h1>
                 <p>temp:</p>
                 <p>Humidity:</p>
                 <p>Min-Tem:</p>
                 <p>Max-Tem:</p>
                 <p>Feels Like cold</p>
               </div>
            </Box>
          </Container>
        </div>
    )
}