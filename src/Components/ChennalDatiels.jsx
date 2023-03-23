import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Vedios , ChannelCard} from './AllImports'
import { fetchFromAPI } from '../Utilities/fatchFromAPI';

const ChennalDatiels = () => {
  const [channeldet,setChanneldet]=useState(null);
  const [vedio, setVedio]= useState([]);
  
  const { id } = useParams();

  console.log(channeldet,vedio);

  useEffect(()=>{
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => setChanneldet(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVedio(data?.items));
  },[id])


  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height: '300px'
        }}
        />
          <ChannelCard channel={channeldet} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm: '100px'}}}/>
          <Vedios vedios={vedio} />
      </Box>
    </Box>
  )
}
export default ChennalDatiels