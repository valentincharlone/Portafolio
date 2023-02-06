import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MuiAlertSuccess = () => {
  return (
    <Stack sx={{ width: '20%' }} spacing={2} className='alert'>
        <Alert severity="success" >ENVIADO!</Alert>
    </Stack>
  )
}

export default MuiAlertSuccess