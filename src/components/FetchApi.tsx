import React, { useState } from 'react';
import { useFetchBreedsQuery } from '../store/api-slice';
import Spinner from './Spinner/Spinner'; // Import the Spinner component

const FetchApi = () => {
    const [dogNum, setDogNum] = useState(20);
    const { data = [], isFetching, error } = useFetchBreedsQuery(dogNum);

    return (
        <div className='w-[60%] m-auto'>
            <div className="border-b mb-5 p-2">
                <div className='flex justify-center gap-2 mb-3'>
                    <p>Dogs to fetch:</p>
                    <select value={dogNum} onChange={(e) => setDogNum(Number(e.target.value))}>
                        <option value="20">20</option>
                        <option value="40">40</option>
                        <option value="60">60</option>
                        <option value="80">80</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="172">172</option>
                    </select>
                </div>
                <p>Number of dogs fetched: {data.length }</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                {isFetching && <Spinner />} {/* Show spinner while fetching */}
                {error && <p>Error fetching data!</p>}
                {!isFetching && data.map(breed => (
                    <div key={breed.id}>
                        <img src={breed.image.url} alt={breed.name} height={'350px'} width={'350px'} />
                        <h1 className='text-2xl mb-3'>{breed.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchApi;
