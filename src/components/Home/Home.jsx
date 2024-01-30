import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import logo from '../../images/logo.png'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('')

    const handleInputChange = e => {
        setSearch(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault()
        navigate(`/result?q=${search}`)
    }

    return (
    <div className='container'>
        <div className='container-main'>
            <img src={logo} alt='logo' className='logo' />
        </div>
        <form 
            className='container-menu'
            onSubmit={onSubmit}>
            <input 
                required
                onChange={handleInputChange} 
                placeholder='Artist / Album / Title'>
            </input>
            <button type='submit'>Search</button>
        </form>
    </div>
    )
}

export default Home
