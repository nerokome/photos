import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Travel photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 md:gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
            <img src='https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
             alt='/'
             layout='responsive' 
             width= '677'
             height= '451'
             />
        </div>
        <div className='w-full h-full'>
          <img src='https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
          alt='/'
          width= '215'
          height= '217'
          layout ='responsive'
          objectFit= 'cover'/>
          

        </div>
        <div className='w-full h-full'>
          <img src='https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
          alt='/'
          width= '215'
          height= '217'
          layout ='responsive'
          objectFit= 'cover'/>
          

        </div>
        <div className='w-full h-full'>
          <img src='https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
          alt='/'
          width= '215'
          height= '217'
          layout ='responsive'
          objectFit= 'cover'/>
          

        </div>
        <div className='w-full h-full'>
          <img src='https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D'
          alt='/'
          width= '215'
          height= '217'
          layout ='responsive'
          objectFit= 'cover'/>
          

        </div>
      

        </div>
        
    </div>
  )
}

export default Portfolio
