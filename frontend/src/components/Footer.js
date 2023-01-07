import React from 'react';

function Footer(props) {
  
      return (
          <>
        <div className='text-center p-3 text-white'  bg="dark" style={{ backgroundColor: '#303956' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='/'>
          Oktay Agdag
        </a>
      </div>
          </>
      )
  }

  export default Footer;