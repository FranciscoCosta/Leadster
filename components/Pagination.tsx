import React from 'react';

interface PaginationProps {
    cardsPerPage: number;
    totalCards: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ cardsPerPage, totalCards, setCurrentPage , currentPage}) => {
    let pages: number[] = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='flex flex-row gap-4 items-center justify-center mt-8'>
            <h2 className='text-color-black font-bold text-xl'>Páginas</h2>
            <div className="Page_number">


                {pages.map((page, index) => {
                    return (
                        <button onClick={() => setCurrentPage(page)} key={index} className={`text-color-black font-bold text-xl ml-4 ${currentPage === page ? "active-page" : ""}`}>
                            {page}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Pagination;
