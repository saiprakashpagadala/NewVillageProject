import React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.css';
import './buttonspagefour.css'

const ButtonsPageFour = () => {
  return (
    <div className='buttons'>
        <Button className='button' type="primary">Approve</Button>
        <Button className='button' type="primary">Re Do Projection Meeting</Button>
    </div>
  )
}

export default ButtonsPageFour