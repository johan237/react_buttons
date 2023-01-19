import React,{ useState } from 'react'
import './Index.css'
import Button from './Button'

function App() {

  return (
    <div className="App">
      {/* <Button /> */}
      
      <div className='container flex'>
            <div className="flexCol">
              <h2> Button </h2>
              <Button />
            </div>

            <div className="flexCol">
              <h2> Variant outline </h2>
              <Button variant='outline' />
            </div>     
      </div>


      <div className='container flex'>
            <div className="flexCol">
              <h2> Variant text </h2>
              <Button variant='text' />
            </div>

            <div className="flexCol">
              <h2> Disable Shadow</h2>
              <Button disableShadow />
            </div>     
      </div>

      <div className='container flex'>
            <div className="flexCol">
              <h2> Disabled </h2>
              <Button disabled />
            </div>

            <div className="flexCol">
              <h2> Variant text disabled </h2>
              <Button variant='text' disabled />
            </div>     
      </div>

      <div className='container flex'>
            <div className="flexCol">
              <h2> Start Icon </h2>
              <Button startIcon = 'lgs' />
            </div>

            <div className="flexCol">
              <h2> End Icon</h2>
              <Button endIcon='lgs' />
            </div>     
      </div>

      <div className='container flex'>
            <div className="flexCol">
              <h2> Size small </h2>
              <Button size = 'sm' />
            </div>

            <div className="flexCol">
              <h2> Size medium </h2>
              <Button size = 'medium' />
            </div>

            <div className="flexCol">
              <h2> Size large </h2>
              <Button size = 'lg' />
            </div>

      </div>

      <div className='container flex'>
            <div className="flexCol">
              <h2> Color Default </h2>
              <Button color = 'default' />
            </div>

            <div className="flexCol">
              <h2> Color Primary</h2>
              <Button color = 'primary' />
            </div>

            <div className="flexCol">
              <h2> Color Secondary</h2>
              <Button color = 'secondary' />
            </div>

            <div className="flexCol">
              <h2> Color Danger</h2>
              <Button color = 'danger' />
            </div>
           

      </div>
    </div>
  )
}

export default App
