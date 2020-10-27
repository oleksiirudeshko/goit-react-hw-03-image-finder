import React, { Component } from 'react';

import s from './Search.module.css';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={this.handleSubmit}>
            <button type='submit' className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}></span>
            </button>
            <input
              className={s.SearchFormInput}
              type='text'
              placeholder='Search images and photos'
              value={value}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}
