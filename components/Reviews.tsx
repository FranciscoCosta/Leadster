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
                    <h1>Pronto para triplicar sua</h1>
                    <h1>Geração de Leads?</h1>
                    <h3>Criação e ativação em <span>4 minutos</span></h3>
                    <div className='line'/>
                </div>
                <div className="Review__right-mid">
                    <button>
                        Ver Demonstração
                    </button>
                    <div className='image__container'>
                        <Image  src={'/images/selo_RD.png'} fill alt='selo_RD.png' className='object-contain'/>
                    </div>
                </div>
                <div className="Review__right-bottom">
                    <>
                    <div className='image__container'>
                        <Image src={'/images/no-card-dark.webp'} fill alt='no-card-dark' className='object-contain'/>
                    </div>
                    <p><span>Não</span> é necessário Cartão de Crédito</p>
                    </>
                    <h1>|</h1>
                    <>
                        <div className='image__container'>

                        </div>
                        <p><span>4.9</span>/5 média de sastifação</p>
                    </>

                </div>
                </div>
        </div>
    )
}

export default Reviews;