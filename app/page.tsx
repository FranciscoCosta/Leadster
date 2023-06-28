"use client"

import { mockDataItem } from "../types/index"
import React, { useState, useEffect } from 'react';
import { Hero, Reviews, CustomFilter, CustomSelect, CardItem } from '@/components';

import datamock from '../public/cards.json';

export default function Home() {

  useEffect(() => {

    setActiveData(datamock as mockDataItem[])
  }, []);

  const [activeFilter, setActiveFilter] = useState('');
  const [data, setActiveData] = useState<mockDataItem[]>([]);
  
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
          <div className='Cards__container'>
            {
              data?.map((card)=> <CardItem card={card} />)
            }
          </div>
        </div>
      </div>
      <Reviews />
    </main>
  )
}
