import React from 'react'

const CustomSelect = () => {
    return (
        <div className='Filter__select'>
            <label htmlFor="orderby" className='font-bold text-color-black mr-4'>Ordenar por:</label>
            <select name="orderby" className='custom-select-filter' id="orderby" placeholder='Data de Publicação'>
                <option value="recent" >Data de publicação</option>
                <option value="recent" >Mais Recente</option>
                <option value="oldest" >Mais Antigo</option>
            </select>
        </div>
    )
}

export default CustomSelect