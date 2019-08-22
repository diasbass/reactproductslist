import React from "react";

const Header = () => {
  return(
    <nav>
    <div className="nav-wrapper indigo lighten-1">
      <a href="/" className="brand-logo">Cadastro</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Autores</a></li>
        <li><a href="/">Cursos</a></li>
        <li><a href="/">Sobre</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header;