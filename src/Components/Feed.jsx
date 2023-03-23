import React from 'react';
import { Box,Stack,Typography } from '@mui/material';
import {SideBar, Vedios} from './AllImports';
import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../Utilities/fatchFromAPI';

const Feed = () => {

  const [selectedCat,setSelectedCat] = useState('New');
  const [vedios,setVedios]= useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCat}`)
      .then((data)=>setVedios(data.items))
  },[selectedCat]);

  return (
    <Stack sx={{flexDirection:{sx:'column', md: 'row'}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'},borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
        <SideBar
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
        />
        <Typography 
        className='copyright' 
        variant='body2' 
        sx={{mt:1.5,color:'#fff'}}
        >
          Copyright2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCat} <span style={{color:'#f31503'}}>Videos</span>
        </Typography>
        <Vedios vedios={vedios} />
      </Box>
    </Stack>
  )
}

export default Feed