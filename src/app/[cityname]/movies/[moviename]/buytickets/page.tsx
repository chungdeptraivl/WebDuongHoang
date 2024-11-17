"use client"
import React from 'react';
import DatePicker from "react-horizontal-datepicker";
import './BuyTicketsPage.css';
import Link from 'next/link'
import { usePathname} from 'next/navigation'

export const page = () => {
  const pathname = usePathname()

  const movie = {
    moviename: 'Venom',
    // screen: '4Dx',
    date: new Date(),
    language: 'Vietnamese',
    type: 'Science Fiction/Action',
    screens: [
      {
        name: 'Screen 1',
        location: 'Lotte Cinema, Hanoi'
      },
      {
        name: 'Screen 2',
        location: 'Lotte Cinema, Hanoi'
      },
      {
        name: 'Screen 3',
        location: 'Lotte Cinema, Hanoi'
      },
    ]
  }

  const selectedDay = (val:any) => {
    console.log(val)
  };

  return (
    <div className='buytickets'>
      <div className='s1'>
        <div className='head'>
        <h1>{movie.moviename} - {movie.language}</h1>
        <h3>{movie.type}</h3>
        </div>
        <DatePicker getSelectedDay={selectedDay} 
          endDate = {100}
          selectDate = {new Date("2024-11-12")}
          labelFormat = {"MMM"}
          color = {"rgb(248, 68, 100)"}
        />

      </div>
      <div className='screens'>
        {
          movie.screens.map((screen, index) => {
            return (
              <div className='screen' key={index}>
                <div>
                <h2>{screen.name}</h2>
                <h3>{screen.location}</h3>
                </div>
                <Link href={`${pathname}/${screen.name}`} className='theme_btn1 linkstylenone'>Select</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default page
