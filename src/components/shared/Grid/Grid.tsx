import React from 'react';

interface GridProps{
    goToPreviousPage?: () => void;
    goToNextPage?: () => void;
    children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children, goToPreviousPage, goToNextPage }) => (
    <div className='container mx-auto w-100'>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-10 mx-auto'>
            {children}
        </div>
        <div className='flex justify-center items-center mt-4 gap-5'>
            {goToPreviousPage && 
                <button className='text-white hover:text-white hover:bg-blue-400 p-2 bg-slate-950 rounded-lg' onClick={goToPreviousPage}>Previous</button>
            }
            {goToNextPage && 
                <button className='text-white hover:text-white hover:bg-blue-400 p-2 bg-slate-950 rounded-lg' onClick={goToNextPage}>Next</button>
            }
        </div>
    </div>
)