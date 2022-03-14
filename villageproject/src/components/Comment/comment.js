import React from 'react'
import { Input } from 'antd'
import 'antd/dist/antd.css';
import './comment.css'

const Comments = () => {
  return (
    <div className='comment-container'>
        <Input className='comment-styling' placeholder="AM Comments"/>
    </div>
  )
}

export default Comments