"use client"
import React from 'react'
import { CustomFilterProps } from '@/types'

const CustomFilter = ({title, handleClick, isActive} : CustomFilterProps ) => {
  return (
    <button
    type='button'
    className={`custom-btn-filter ${isActive ? 'btn-filter-active' : ''}`}
    onClick={handleClick}
    data-testid={`filter-btn-${title}`}
    
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomFilter