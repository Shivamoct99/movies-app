import React from 'react'
import { useGlobalContext } from '../context'

export default function Search() {
  let {query,setquery,Error}=useGlobalContext()
  return (
  <section className='search-section'>
    <h2>Search your favourite movies</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text" placeholder='search here' value={query} onChange={(e)=>setquery(e.target.value)} />
      </div>
    </form>
    <div className="card-error">
      <p>{Error.show && Error.msg}</p>
    </div>
  </section>
  )
}
