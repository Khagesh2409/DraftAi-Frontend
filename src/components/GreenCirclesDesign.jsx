import React from 'react';

const GreenCirclesDesign = () => {
    const circleSizes = [24, 20, 16, 12, 8, 4, 1];
    const numIterations = 100;

    return (
        <div className="flex gap-2 items-center justify-center">
            {[...Array(numIterations)].map((_, index) => (
                <div key={index} className="flex flex-col-reverse gap-2 items-center justify-center">
                    {circleSizes.map((size, i) => (
                        <div key={i} className={`w-[${size}px] h-[${size}px] bg-custom-green rounded-full`}></div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default GreenCirclesDesign;
