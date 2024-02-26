import React from 'react'
import './newsletter.scss'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { Button } from '@mui/material'
const Newsletter = () => {
  return (
    <div className='newsLetterBanner'>
    <SendOutlinedIcon />
    <input type='text' placeholder='Your email address' />
    <Button className='bg-g'>Subscribe</Button>
</div>
  )
}

export default Newsletter
