import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import './style.css'

import iconStar from '../../images/icon-star.svg'
import illustration from '../../images/illustration-thank-you.svg'

function App() {
  const [isSelection, setIsSelection] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const [note, setNote] = useState(0)

  const selectionButton = (option) => {
    let classSelected = document.getElementsByClassName(option)[0]
    setNote(option.substring(6))
    if (classSelected.classList.contains('value-option')) {
      classSelected.classList.remove('value-option')
      setIsSelection(false)
    } else if (
      !classSelected.classList.contains('value-option') &&
      !isSelection
    ) {
      classSelected.classList.add('value-option')
      setIsSelection(true)
    }
  }

  const evaluated = () => {
    toast.success('Evaluation sent!')
    setIsSubmit(true)
  }

  return (
    <div className='container'>
      {!isSubmit ? (
        <div>
          <header>
            <div>
              <img src={iconStar} alt='Icon star' />
            </div>
            <h1>How did we do?</h1>
          </header>
          <main className='main-major'>
            <div className='text'>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className='button-options'>
              <button
                name='option'
                value
                onClick={() => selectionButton('option1')}
                className='option1'
              >
                1
              </button>
              <button
                name='option'
                value
                onClick={() => selectionButton('option2')}
                className='option2'
              >
                2
              </button>
              <button
                name='option'
                value
                onClick={() => selectionButton('option3')}
                className='option3'
              >
                3
              </button>
              <button
                name='option'
                value
                onClick={() => selectionButton('option4')}
                className='option4'
              >
                4
              </button>
              <button
                name='option'
                value
                onClick={() => selectionButton('option5')}
                className='option5'
              >
                5
              </button>
            </div>
          </main>
          <footer>
            <button
              tyoe='submit'
              onClick={() =>
                isSelection ? evaluated() : toast.error('Choose a note!')
              }
            >
              SUBMIT
            </button>
          </footer>
        </div>
      ) : (
        <div className='content'>
          <header className='header-feedback'>
            <img src={illustration} alt='' />
            <p>You select {note} out of 5</p>
            <h1>Thank you!</h1>
          </header>
          <main>
            <p>
              You selected out of 5 Thank you! We appreciate you taking the
              time to give a rating. If you ever need more support, don’t
              hesitate to get in touch!
            </p>
          </main>
        </div>
      )}
      <Toaster />
    </div>
  )
}

export default App
