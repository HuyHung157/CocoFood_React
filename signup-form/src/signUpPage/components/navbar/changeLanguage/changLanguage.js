import React, { Component } from 'react';
import i18next from 'i18next';

class ChangLanguage extends Component {
  handleClick(lang){
    i18next.changeLanguage(lang)
  }
  render() {
    return (
      <div className="header__language header__item col-2">
        <button className="language__EN" onClick={() => this.handleClick("en")}>EN</button>
        <button className="language__VN" onClick={() => this.handleClick("vn")}>VN</button>
    </div>
    );
  }
}

export default ChangLanguage;
