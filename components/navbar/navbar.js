import Link from 'next/link'
import React from 'react'
import NavLink from './navLink'


const Navbar = () => {
  return (
    <div className='container mx-auto text-center mt-5'>
        <div
        className='font-bold pt-4 pb-6 text-xl '
        >
            #Todo
        </div>
        <div
        className='
        flex flex-wrap
        justify-around items-center
        '
        >
          <Link href={'/'}>
            <a>
            <NavLink title='All' />
            </a>
          </Link>
          <Link href={'/activeScreen'}>
            <a>
            <NavLink title='Active' />
            </a>
          </Link>
          <Link href={'/completedScreen'}>
            <a>
            <NavLink title='Completed'  />
            </a>
          </Link>
        </div>
            <hr/>
    </div>
  )
}

export default Navbar