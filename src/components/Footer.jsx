import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
        <p>Tüm Hakları Saklıdır | BurgerReact</p>
    </div>
  )
}

export default Footer