import React from 'react'
import Results from './components/Results'
import { revalidatePath } from 'next/cache'

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre ?? "fetchTrending"
  
  const res:Response = await fetch(
    `http://api.themoviedb.org/3${genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`
    ,{next: {revalidate: 10}}
  )
  const data = await res.json()
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  const results: any[] = data.results;
  
  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
