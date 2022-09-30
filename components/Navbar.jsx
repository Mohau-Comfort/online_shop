import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';

import { urlFor } from '../lib/client';
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">
          Mohau's Audio and Speakers
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick="">
        <AiOutlineShopping /> <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Navbar
