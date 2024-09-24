import React from 'react';

interface LabelProps{
    children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children }) => {
    return (
        <div  className='w-auto px-5 h-12 rounded-full bg-black text-white shadow-lg flex items-center justify-center'>
            {children}
        </div>
    );
};