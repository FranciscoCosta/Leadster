"use client"

import { mockDataItem } from "../types/index"
import React, { useState, useEffect } from 'react';
import { Hero, Reviews, CustomFilter, CardItem } from '@/components';

import datamock from '../public/cards.json';

export default function Home() {

  useEffect(() => {

    setActiveData(datamock as mockDataItem[])
    setFilteredData(datamock as mockDataItem[])
  }, []);

  const [activeFilter, setActiveFilter] = useState('');
  const [data, setActiveData] = useState<mockDataItem[]>([]);
  const [filteredData, setFilteredData] = useState<mockDataItem[]>([]);

  const handleClick = (title: string) => {
    setActiveFilter(title);
    if (title === 'Agências') {
      setFilteredData(data.filter((item) => item.tags.includes('Agências')));
    }
    if (title === 'Chatbot') {
      setFilteredData(data.filter((item) => item.tags.includes('Chatbot')));
    }
    if (title === 'Marketing Digital') {
      setFilteredData(data.filter((item) => item.tags.includes('Marketing Digital')));
    }
    if (title === 'Geração de Leads') {
      setFilteredData(data.filter((item) => item.tags.includes('Geração de Leads')));
    }
    if (title === 'Mídia Paga') {
      setFilteredData(data.filter((item) => item.tags.includes('Mídia Paga')));
    }
    if (title === '') {
      setFilteredData(data);
    }
    if (title === 'recent') {
      setFilteredData(filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    console.log(filteredData)
    }
    if (title === 'oldest') {
      setFilteredData(filteredData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    console.log(filteredData)
    }
  };

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
              <div className='Filter__select'>
                <label htmlFor="orderby" className='font-bold text-color-black mr-4'>Ordenar por:</label>
                <select name="orderby" className='custom-select-filter' id="orderby" placeholder='Data de Publicação' onChange={(event) => handleClick(event.target.value)}>
                  <option value="recent" >Data de publicação</option>
                  <option value="recent" >Mais Recente</option>
                  <option value="oldest" >Mais Antigo</option>
                </select>
              </div>
            </div>
          </div>
          <div className='line__filter' />
          <div className='Cards__container'>
            {
              filteredData?.map((card) => <CardItem card={card} />)
            }
          </div>
        </div>
      </div>
      <Reviews />
    </main>
  )
}
