import React from 'react';
import { Box,Typography } from '@mui/material';
import {Vedios} from './AllImports';
import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../Utilities/fatchFromAPI';
import { useParams } from 'react-router-dom';

const SearchItem = () => {
 
  const [vedios,setVedios]= useState([]);
  const { searchTerm, name } = useParams();
  console.log(name)
  
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data)=>setVedios(data.items))
  },[searchTerm]);

  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          Search Results for: <span style={{color:'#f31503'}}>{searchTerm} </span>Videos
        </Typography>
        <Vedios vedios={vedios}/>
      </Box>
  )
}

export default SearchItem