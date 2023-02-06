import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MuiAlert = () => {
  return (
    <Stack sx={{ width: '50%' }} spacing={2} className='alert'>
        <Alert severity="error" >Ops! Debes completar todos los campos</Alert>
    </Stack>
  )
}

export default MuiAlert