import React from 'react'
import BannerImage from '../assets/banner.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}>
        
      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" name="name" placeholder='lütfen adınızı ve soyadınızı giriniz...' />
          <label>Email</label>
          <input type="email" name="email" placeholder='lütfen email adresinizi giriniz...' />
          <label>Mesajınız</label>
          <textarea rows="6" name="meesage"></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact