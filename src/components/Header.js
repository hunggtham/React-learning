import icons from '../ultis/icons'
import React from 'react'
import { Search } from './';

const { HiArrowSmLeft, HiArrowSmRight } = icons;

const Header = () => {
    return (
        <div className='flex justify-between w-full items-center'>
            <div className='flex gap-6 w-full items-center'>
                <div className='flex text-gray-400 gap-6'>
                    <span><HiArrowSmLeft size={24} /></span>
                    <span><HiArrowSmRight size={24} /></span>
                </div>
                <div className='w-1/2'>
                    <Search />
                </div>
            </div>
            <div>
                Login
            </div>
        </div>
    )
}

export default Header