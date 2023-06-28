"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { Hero, Reviews, CustomFilter, CustomSelect } from '@/components';

import data from '../public/cards.json';

export default function Home() {

  useEffect(() => {
    setActiveData(data)
  }, []);

  const [activeFilter, setActiveFilter] = useState('');
  const [data, setActiveData] = useState(null);
  const handleClick = (title : string) => {
    setActiveFilter(title);
  };

  console.log(data);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='Content'>
        <div className='Content__container'>
          <div className='Content__filters'>
            <div className='Content__btn'>
              <CustomFilter title="Agências" handleClick={() => handleClick('Agências')} isActive={activeFilter === 'Agências'} />
              <CustomFilter title="Chatbot" handleClick={() => handleClick('Chatbot')} isActive={activeFilter === 'Chatbot'} />
              <CustomFilter title="Marketing Digital" handleClick={() => handleClick('Marketing Digital')} isActive={activeFilter === 'Marketing Digital'} />
              <CustomFilter title="Geração de Leads" handleClick={() => handleClick('Geração de Leads')} isActive={activeFilter === 'Geração de Leads'} />
              <CustomFilter title="Mídia Paga" handleClick={() => handleClick('Mídia Paga')} isActive={activeFilter === 'Mídia Paga'} />
            </div>
            <div className='Content__order'>
              <CustomSelect />
            </div>
          </div>
          <div className='line__filter'/>

        </div>
      </div>
      <Reviews />
    </main>
  )
}
