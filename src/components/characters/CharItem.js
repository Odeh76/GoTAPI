import React from 'react'

const CharItem = ({item}) => {
    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Character Name:</strong> {item.name}
              </li>
              <li>
                <strong>Gender</strong> {item.gender}
              </li>
              <li>
                <strong>Culture</strong> {item.culture}
              </li>
              <li>
                <strong>Born</strong> {item.born}
              </li>
              <li>
                <strong>Culture</strong> {item.culture}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharItem
