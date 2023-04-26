import React from 'react'
import Main from '../components/home/product/Main'
import SearchItem from '../components/home/product/SearchItem'

const Home = () => {
  return (

    <main>
      <section className='bg-slate-100'>
        <SearchItem/>
        <Main/>
      </section>
      
      </main>
  )
}

export default Home