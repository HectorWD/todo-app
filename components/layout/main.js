import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar/navbar'

const Main = ({children}) => {
  return (
    <div>
        <Head>
            <meta
            name='To do List'
            content='List of to do´s'
            initial-scale='1'
            />
            <title>Hector Wong - To do List</title>
        </Head>
        <Navbar/>
        <div
        className='pt-0 '
        >
            {children}
        </div>
    </div>
  )
}

export default Main