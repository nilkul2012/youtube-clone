import React from 'react'
import { Stack } from '@mui/material';
import { categories } from '../Utilities/Constants';

const SideBar = ({selectedCat,setSelectedCat}) => {
  return (
    <Stack 
    direction='row' 
    sx={{overflowY:'auto',height:{sx:'auto', md:'95%'},flexDirection:{md:'column'},}}
    >
        {categories.map((cat)=>(
            <button 
            className='category-btn'
            onClick={()=>setSelectedCat(cat.name)} 
            style={{background: cat.name===selectedCat && '#FC1503',color:'white'}}
            key={cat.name}
            >
                <span style={{color:cat.name===selectedCat ? 'white' : 'red', marginRight:'15px'}}>{cat.icon}</span>
                <span style={{opacity: cat.name===selectedCat ? '1' : '0.7'}}>{cat.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar