import { useState } from 'react'
import './App.css'


const App = () => {
  const [data, setData] = useState([])
  const [text, setText] = useState('')
  const [blur, setBlur] = useState(false)


  const handleSetText = (e) => {
    setText(e.target.value)


  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setData([text, ...data])
    setText('')
    setBlur(false)

  }
  const hendleDelete = (i) => {
    setBlur(false)
    setData(data.filter((item, index) => {
      if (index !== i) {
        return item
      }


    }))


  }
  const handleBlur = () => {
    setBlur(true)

  }

  return (
    <div className='content'>
      <form onSubmit={handleSubmit}  >
        
        <input
        
          type="text"
          value={text}
          onBlur={handleBlur}
          onChange={handleSetText} />
        <button className='button1' type='submit' disabled={!text}> Добавить</button>
        {blur && !text ? <div className='pole'>поле не должно быть пустым</div> : null}
        
      </form>


      <div className='rod'>
        {data.map((item, index) => {
          return (

            <div className='item'>

              <span>{item}</span>
              <button onClick={() => hendleDelete(index)} >x</button>
            </div>

          )
        })}
      </div>



    </div>
  )
}

export default App
