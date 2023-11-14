'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
const [pickupLines] = useState(['1','2','3','4','5','6','7','8','9'])
const [copyOfPickupLines,setCopyOfPickupLines] = useState([...pickupLines])
const [pickupLine , setPickupLine] = useState('shalom')

// to get random pickup line without to repeat what all ready been said 
const getPickupLine = () => {
  // getting random int from 0 to the length of the copyOfPickupLines array 
    const idx = getRandomInt(copyOfPickupLines.length)
    // setting new pickup line 
    setPickupLine( copyOfPickupLines[idx])
 // getting new arry without the last pickup line 
    const newArr = copyOfPickupLines.filter(item => item !== copyOfPickupLines[idx])

    if(!copyOfPickupLines.length){
      // case length is 0
      setCopyOfPickupLines( [...pickupLines] )
    }
    if(copyOfPickupLines.length){
      // case length more 0
      setCopyOfPickupLines(newArr)

    }
   return pickupLine

}

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

  return (
    <main className='main-layout'>
      <section className='hero-container flex-ac flex-col '>
    <section className='pickup-line-container flex-jc-ac flex-col'>
    <Image
    onClick={ () => getPickupLine() }
    className='hero'
    src={'/theChild.jpg'} 
    width={250}
    height={250}
    alt='pic'
    priority
    />
        <h1 className='headline'> The pickup line generator</h1>
      <p className='pickup-line'>{pickupLine? pickupLine : 'start again'}</p>
    </section>
      </section>
    </main>
  )
}
