import React from 'react'

import { BsCloudDownload } from 'react-icons/bs';

import {downloadBtn} from '@/types'

const CustomDowloadBtn = ({title, containerStyles} : downloadBtn) => {
  return (
    <div className={`Btn__container ${containerStyles}`}>
      <div className='btn__download-left'>
      <BsCloudDownload className='svg__download'/>
      </div>
      <div className='btn__download-right'>
        <h2>{title}</h2>
      </div>

    </div>
  
  )
}

export default CustomDowloadBtn;