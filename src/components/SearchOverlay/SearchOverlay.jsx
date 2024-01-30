import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import close_ico from '../../images/x.png'
import './index.css'

const SearchOverlay = ({ onClose }) => {
    const [search, setSearch] = useState('') 
    const navigate = useNavigate();
    const onSearch = e => {
        e.preventDefault()
        navigate(`/result?q=${search}`)
        onClose()
    }
    const handleInputChange = e => {
        setSearch(e.target.value)
    }

    return (
        <div className="overlay-container">
            <button
                onClick={ onClose } 
                className="close">
                <img src={close_ico} />
            </button>
            <form
                onSubmit={onSearch} 
                className="search-controller">
                <p>Search</p>
                <input
                    onChange={handleInputChange} 
                    required 
                    placeholder="Artis / Album / Title" />
                <button 
                    type="submit"
                    className="close-button">
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchOverlay