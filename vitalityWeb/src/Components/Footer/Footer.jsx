import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <>

    <div className='container'>

   <div className='textos'> 
      <text> Fale Conosco </text>
      <p> colocaremailaqui@gmail.com </p>
      <p> (55) 11 90000-0000 </p>

      <text> LEGAL </text>
      <p> colocaremailaqui@gmail.com </p>
      <p> (55) 11 90000-0000 </p>

      <text> LEGAL </text>
      <p> colocaremailaqui@gmail.com </p>
      <p> (55) 11 90000-0000 </p>

</div>

   <div className='fotos'>
   <img src='appstore.png' width={'200px'} height={'150px'}/>
    <img src='playstore.png' width={'200px'} height={'60px'}/>

   </div>
    </div>
    
    </>
  )
}

export default Footer
