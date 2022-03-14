import React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css';
import './buttonspagetwo.css'

const ButtonsPageTwo = () => {
  return (
    <div className='buttons'>
        <Button className='button' type="primary">Approve</Button>
        <Button className='button' type="primary">Reject</Button>
    </div>
  )
}

export default ButtonsPageTwo