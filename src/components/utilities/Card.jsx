import React from 'react'

function CardComponent({profileData, cardStyle}) {
  return (
    <div>
        <a href={profileData.html_url}>
        <div className='h-fit max-w-80 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
            <img src={profileData.avatar_url} style={{width:300,}}/>
            <div className='text-start ml-5'>
                <h3 className='mb-2 text-2xl   font-bold tracking-tight text-gray-900 dark:text-white'>{profileData.name}</h3>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Bio:{profileData.bio}</p>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Followers:{profileData.followers}</p>
            </div>
        </div>
        </a>
    </div>
  )
}

export default CardComponent