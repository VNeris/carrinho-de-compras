import  React  from 'react'
import { BsSearch } from 'react-icons/bs'
import { useState, useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext';
import CartButton from '../CartButton/CartButton';


function Header () {

    
    const {setProducts, cartItems} = useContext(AppContext)
    
    const [SearchValue, setSearchValue] = useState('')


    const handleSearch = async (event) => {     
        event.preventDefault()

        const products = await fetchProducts(SearchValue)
        
        setProducts(products)
        setSearchValue('')
    }


    return (

        <header className="bg-cyan-900 p-5 fixed w-full z-10">
            <div className="flex items-center justify-evenly">
                <form action="" className="flex items-center sm:gap-1" onSubmit={handleSearch}> {name}

                    <input type="search" placeholder="Buscar Produtos" value={SearchValue} onChange={ ({target}) => setSearchValue(target.value)} className='search-input rounded-md p-2 md:w-[500px] text-sm max-w-full' required />
                    <button type="submit" className="search-button p-2 rounded-md ml-2 bg-stone-200"><BsSearch></BsSearch></button>

                </form>
              <CartButton></CartButton>
            </div>
        </header>
    )
}

''
export default Header