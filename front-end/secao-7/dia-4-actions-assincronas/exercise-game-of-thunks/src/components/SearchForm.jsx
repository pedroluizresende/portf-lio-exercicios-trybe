import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCharacter } from '../redux/actions';

export class SearchForm extends Component {
  state = {
    searchInput: '',
  }

  handleChangle = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  clickChangle = () => {
    const { dispatch } = this.props;
    const { searchInput } = this.state;

    dispatch(fetchCharacter(searchInput))
  }

  render() {
    return (
      <form >
        <label htmlFor="search-input">
          <input
            type="text" id="search-input"
            name="searchInput"
            placeholder="nome completo do personagem"
            onChange={ this.handleChangle}
            className="input-group-text"
          />
        </label>
        <button
          type="button"
          onClick={this.clickChangle}
          class="btn btn-primary"
        >
          Buscar
        </button>
      </form>
    )
  }
}

export default connect()(SearchForm);
