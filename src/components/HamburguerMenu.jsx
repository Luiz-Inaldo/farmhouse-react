import { useReducer } from 'react'
import { NavLink } from 'react-router-dom'
import './HamburguerMenu.css'

const initialState = {
    isOpen: false,
    toOpenName: 'menu',
    toCloseName: 'close'
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'OPEN_CLOSE_MENU':
            if (!state.isOpen) {
                return {
                    ...state,
                    isOpen: true
                }
            } else {
                return {
                    ...state,
                    isOpen: false
                }
            }
    }


}

export const HamburguerMenu = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='hamburguer-menu-container'>
            <span className="material-symbols-outlined"
                onClick={() => dispatch({ type: 'OPEN_CLOSE_MENU' })}>
                {!state.isOpen ? state.toOpenName : state.toCloseName}
            </span>
            <div className={`slide-menu ${!state.isOpen ? 'slide-hidden' : ''
                }`}>
                <NavLink to='/'
                    className={({ isActive }) => isActive ? "active-slide-link" : ""}>Home</NavLink>

                <NavLink to='/servicos'
                    className={({ isActive }) => isActive ? "active-slide-link" : ""}>Serviços</NavLink>

                <NavLink to='/sobre'
                    className={({ isActive }) => isActive ? "active-slide-link" : ""}>Sobre</NavLink>

                <NavLink to='/contato'
                    className={({ isActive }) => isActive ? "active-slide-link" : ""}>Contato</NavLink>
            </div>
        </div>
    )
}
