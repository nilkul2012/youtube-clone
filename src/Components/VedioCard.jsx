import React from 'react'
import { Link } from 'react-router-dom'
import { Card ,CardMedia ,CardContent ,Typography  } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoChannelUrl,demoVedioUrl,demoChannelTitle,demoVedioTitle} from '../Utilities/Constants'

const VedioCard = ({vedio: {id:{videoId},snippet}}) => {
  console.log(videoId,snippet)
  return (
    <Card sx={{width :{xs:'100%',sm:'358px',md:'320px'},boxShadow:'none',borderRadius:0}}>
      <Link to={videoId?`/vedio/${videoId}`:demoVedioUrl}>
        <CardMedia 
         image={snippet?.thumbnails?.high?.url}
         title ={snippet?.title}
         sx={{width:{xs:'100%',sm:'358px',md:'320px'},height:180}}
        />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px'}}>
        <Link to={videoId?`/vedio/${videoId}`:demoVedioUrl}>
          <Typography variant='subtitle1' color='#fff' fontWeight='bold'>
            {snippet?.title.slice(0,60)||demoVedioTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId?`/channelId/${snippet?.channelId}`:demoChannelUrl}>
          <Typography variant='subtitle2' color='gray' fontWeight='bold'>
            {snippet?.channelTitle||demoChannelTitle}
            <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VedioCard