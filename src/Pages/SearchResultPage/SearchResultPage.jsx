import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import CardComponent from '../../Components/Cards/Card';
import "./SearchResultPage.css"
import CardSkeleton from '../../Components/skeleton/CardSkeleton';

const SearchResultPage = () => {
    const location = useLocation();
    const { filteredData } = location.state;

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

    }, []);
    
    return (
        <>
            {
                (loading) ? <CardSkeleton /> : <div className='searchResultContainer'>
                    {
                        filteredData.map((obj) => {
                            return <CardComponent obj={obj} key={obj.id} />
                        })
                    }
                </div>
            }

        </>
    )
}

export default SearchResultPage
