// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import './index.css'
import { useLocation } from 'react-router-dom';
import { instance } from '../../helpers/axios/instance';
import dollar from '../../images/currency-dollar.png'
import SearchOverlay from '../SearchOverlay/SearchOverlay';
import menu from '../../images/menu.png'
import ngmusic from '../../images/ngmusic.png'
import search from '../../images/search.png'


function Result() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [songs, setSongs] = useState([])
    const [displaySearchOverlay, setDisplaySearchOverlay] = useState(false)

    const query = queryParams.get('q');

    const fetchItems = async term => {
        await instance.get('https://itunes.apple.com/search', {
            params: {
                term
            }
        })
        .then(response => {
            const items = response.data.results
            if(Array.isArray(items)) {
                setSongs(items)
            }
        })
    }

    const onClose = () => {
        setDisplaySearchOverlay(false)
    }

    const displayOverlay = () => {
        setDisplaySearchOverlay(true)
    }

    useEffect(() => {
        fetchItems(query)
    }, [query])

    return (
        <>
            { displaySearchOverlay && <SearchOverlay onClose={onClose} /> }
            <div className='container-result'>
                <div className='content-header'>
                    <img
                        alt='menu' 
                        className='ico' 
                        src={menu} 
                    />
                    <img
                        alt='menu' 
                        className='ngmusic-logo' 
                        src={ngmusic} 
                    />
                    <button onClick={displayOverlay}>
                        <img
                            alt='menu' 
                            className='ico' 
                            src={search} 
                        />
                    </button>
                </div>
                <div className='content-body'> 
                    <div className='label-result'>
                        Search result for : <label>{ query }</label>
                    </div>
                    <div className='card-container'>
                        {
                            songs.map((item, key) => {
                                return (
                                    <div
                                        key={key} 
                                        className='card'>
                                        <img
                                            alt={`album-${key}`} 
                                            className='album' 
                                            src={item.artworkUrl100} 
                                        />
                                        <div className='detail-container'>
                                            <div className='detail-container-title'>
                                                <span className='detail-container-title-artist'>{ item.artistName }</span> 
                                                <p className='detail-container-title-track'>{ item.trackName }</p>
                                            </div>
                                            <div className='detail-container-props'>
                                                <div className="type-badge">
                                                    { item.primaryGenreName }
                                                </div>
                                                <div className='badge-price'>
                                                    <img src={dollar} alt='dollar-logo' />
                                                    <span>{ item.trackPrice }</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result
