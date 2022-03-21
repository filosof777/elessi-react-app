import React from 'react'
import { services } from '../../../../Data/categories'
import classes from './Service.module.scss'

function Service() {
  return (
    <div className={classes.Service}>
      <ul>
        {services.map(item => {
          return (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          )
        })

        }
      </ul>
    </div>
  )
}

export default Service