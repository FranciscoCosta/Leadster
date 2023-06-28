"use client"

import React from 'react'

import CardDetails from './CardDetails'
import { mockDataItem } from '@/types'
import { useState } from 'react'
import Image from 'next/image'
import { title } from 'process'

interface CardItemProps {
    card: mockDataItem
}

const CardItem = ({ card }: CardItemProps) => {

    const [isOpen, setisOpen] = useState(false);

    const handleClick=()=>{
        console.log(isOpen)
        setisOpen(!isOpen)
    }

    const { title, date, description, tumbnail, tags, link } = card;
    return (
        <div className='Card__container group' onClick={handleClick}
        >
            <div className="Card__container-top">
                <Image src={tumbnail} alt={title} fill className='object-cover' />
                <div className='overlay__bg'>
                    <div className='play-button'></div>
                </div>

            </div>
            <div className="Card__container-bottom">
                <h2 className='text-color-black px-6 py-4 font-bold text-[20px] card__title '>{title}</h2>
            </div>

        <CardDetails isOpen={isOpen} closeModal={() => setisOpen(false)} card ={card} />
        </div>
    )
}

export default CardItem