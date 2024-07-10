import React from 'react'
import logo from './assests/logo.png';
import { FaSearch } from "react-icons/fa";
const Header = () => {
    return (
        <div class='flex gap-16 py-10 px-10 justify-between	place-items-center'>
            <div class='flex gap-3'>
                <div>
                    {/* Logo of our school */}
                    <img src={logo} />
                </div>
                <div class='py-5'>
                    <span class="font-headerFont">
                        GURU HARKRISHAN HIGH SCHOOL<br />
                        &<br />
                        JUNIOR COLLEGE OF COMMERCE
                    </span>
                </div>
            </div>

            <div class='flex gap-3'>
                <div class='flex border-2 rounded-xl h-8 w-200 p-2 searchBackground'>
                    <input placeholder='Search' type='text' class='background-transparent searchBackground' />
                    <FaSearch />
                </div>

                <button class="buttonBackground border-2 rounded-xl h-8 w-200 p-1 text-white ">Contact Us</button>
            </div>




        </div>

    )
}

export default Header

