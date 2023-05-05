import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

function LongUrl() {
  const [ LongUrl , setLongUrl ] = useState(null);

  const handleSubmit = async(e)=>{
    e.preventDefault(); 
    const payload = {LongUrl}
    try{
      let res = await axios.post(`${url}/new`,payload)
      toast.success(res.data.message)
      let inp = document.querySelector('input')
      inp.value='';
    }catch(error){
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className='long' >
    <form className='form' onSubmit={handleSubmit}>
    <TextField 
    label="Paste Your URL" 
    onChange={(e)=>setLongUrl(e.target.value)}
    color="secondary"/>
    <Button 
    type='submit'
    variant="contained" >
  Link
</Button>
      </form>
    </div>
  )
}

export default LongUrl