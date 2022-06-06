

import React from 'react';

const Header = () => {
    return (
        <div class="navbar-start mt-10 ml-20 bg-base-100">
            <div class="">
                <ul class="menu menu-horizontal p-0">
                    <li><a className='bg-amber-200 ml-5'>Home</a></li>
                    <li><a className='bg-amber-200 ml-5'>Product & Service</a></li>
                    <li><a className='bg-amber-200 ml-5'>Becaume a Client</a></li>
                    <li><a className='bg-amber-200 ml-5'>About us</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;