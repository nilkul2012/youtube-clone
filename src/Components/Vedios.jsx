import React from 'react';
import { Stack,Box} from '@mui/material';
import {VedioCard ,ChannelCard} from './AllImports'

const Vedios = ({vedios, direction}) => {
  if(!vedios?.length) return 'Loading...';
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {vedios.map((item,ind)=>(
            <Box key={ind}>
                {item.id.videoId && <VedioCard vedio={item}/>}
                {item.id.channelId && <ChannelCard channel={item}/>}
            </Box>
        ))}

    </Stack>
  )
}

export default Vedios