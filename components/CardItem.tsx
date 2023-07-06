"use client"

import React from 'react'
import { BsFillPlayFill } from "react-icons/bs";

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
        <div className='Card__container group mb-4' onClick={handleClick}
        >
            <div className="Card__container-top">
                <Image src={tumbnail} alt={title} fill className='object-cover' />
                <div className='overlay__bg'>
                    <BsFillPlayFill className="play-button" />
                </div>

            </div>
            <div className="Card__container-bottom overflow-hidden">
                <h2 className='text-color-black px-6 py-4 font-bold md:text-[20px] sm:text-[15px] card__title'>{title}</h2>
            </div>

        <CardDetails isOpen={isOpen} closeModal={() => setisOpen(false)} card ={card} />
        </div>
    )
}

export default CardItem