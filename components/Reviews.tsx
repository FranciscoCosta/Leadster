"use client";

import React from 'react'
import Image from 'next/image';

const Reviews = () => {
    return (
        <div className='Reviews'>
            <div className='Review__left sides'>
                    <div className="image__container">
                        <Image src={'/images/comparativo_img_CTA.png'} fill className='object-contain' alt={'comparativo_img_CTA'} />
                    </div>
                    <div className='bg__shape'></div>
            </div>
            <div className='Review__right sides'>
                <div className="Review__right-top">
                    <h1 className='Review__sub-title'>Pronto para triplicar sua</h1>
                    <h1 className='Review__title'>Geração de Leads?</h1>
                    <h3 className='Review__text-title'>Criação e ativação em <span className='font-bold'>4 minutos.</span></h3>
                    <div className='Review__line' />
                </div>
                <div className="Review__right-mid">
                    <button className='btn-demo'>
                        Ver Demonstração
                    </button>
                    <div className='top10__container'>
                        <Image src={'/images/selo_RD.png'} fill alt='selo_RD.png' className='object-contain' />
                    </div>
                </div>
                <div className="Review__right-bottom">
                    < div className='Review__bottom-container'>
                        <div className='nocard__container'>
                            <Image src={'/images/no-card-dark.webp'} fill alt='no-card-dark' className='object-contain' />
                        </div>
                        <p className='text-color-black text-sm'><span className='font-bold text-color-black text-sm'>Não</span> é necessário Cartão de Crédito</p>
                    </div>
                    <h1 className='text-color-black mx-1 text-sm' >|</h1>
                    < div className='Review__bottom-container'>
                        <div className='rating__container'>
                            <Image src={'/images/rating.webp'} fill alt='rating' className='object-contain' />
                        </div>
                        <p className='text-color-black text-sm'><span className='font-bold text-color-black text-sm'>4.9</span>/5 média de sastifação</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reviews;