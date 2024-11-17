import { CelebrityCardType } from '@/types/types'
import exp from 'constants'
import Image from 'next/image'
import React from 'react'
import './CelebCard.css'

export const CelebCard = (data:CelebrityCardType) => {
  return (
    <div className='celebcard'>
        <Image src={data.imageUrl} alt={data.name} width={200} height={200}/>
        <h3>{data.name}</h3>
        <h4>{data.role}</h4>
    </div>
  )
}

export default CelebCard
