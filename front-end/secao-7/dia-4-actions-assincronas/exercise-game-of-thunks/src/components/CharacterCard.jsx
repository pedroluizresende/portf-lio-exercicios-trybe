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
    
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{ name}</h2>
          <p className="card-text">Gênero: { gender }</p>
          <p className="card-text">Cultura: { culture}</p>

          <ul className="list-group list-group-flush">
            <p className="card-text">Títulos:</p>
            {titles.map((title, index) => (
              <li className="list-group-item" key={ `${title}${index}`}>
                { title }
              </li>
            ))}
          </ul>
          <br />
          <ul className="list-group list-group-flush">
            <p className="card-text">Apelidos:</p>
              {aliases.map((alias, index) => (
                <li className="list-group-item" key={  `${alias}${index}` }>
                  { alias }
                </li>
              ))}
          </ul>
        </div>
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