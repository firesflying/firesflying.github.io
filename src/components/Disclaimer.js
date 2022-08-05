import React from 'react';
import 'antd/dist/antd.css';
import { Alert } from 'antd';
// import { gold } from '@ant-design/colors';

import Marquee from 'react-fast-marquee';

const onClose = (e) => {
  console.log(e, 'I was closed.');
};


export default function Disclaimer(props) {
  return (
    <>

    <div style={{backgroundColor: "#fffbe6"}}>
    <div className='container'>
      <Alert banner message={
            <Marquee pauseOnHover gradient={false}> <strong>{props.title}</strong>  </Marquee>
            }
            type="warning" closable onClose={onClose}
        />
    </div>
    </div>
        
    </>
  )
}
