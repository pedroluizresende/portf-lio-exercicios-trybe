import React, { Component } from 'react'
import { connect } from 'react-redux'

class CharacterCard extends Component {
  render() {
    const { name, titles, gender, culture, aliases, isLoading } = this.props
    if(isLoading ) {
      return (
        <p>Carregando...</p>
      )
    }
  
    return (
    
      <div>
    
        <p>Name: { name}</p>
        <p>Gênero: { gender }</p>
        <p>Cultura: { culture}</p>
        <ul>
          <p>Títulos:</p>
          {titles.map((title, index) => (
            <li key={ `${title}${index}`}>
              { title }
            </li>
          ))}
        </ul>
        <ul>
          <p>Apelidos:</p>
            {aliases.map((alias, index) => (
              <li key={  `${alias}${index}` }>
                { alias }
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.appReducer
  }
}

export default connect(mapStateToProps)(CharacterCard);