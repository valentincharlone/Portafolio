import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MuiAlert = () => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2} className='alert'>
        <Alert severity="error" ><span>Ops! Debes completar todos los campos</span> </Alert>
    </Stack>
  )
}

export default MuiAlert