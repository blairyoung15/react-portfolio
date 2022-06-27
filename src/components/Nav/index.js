import React from "react";

function Nav() {

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
      <header>
      <nav>
        <ul className="flex-row">
        <li className="mx-2">
            <a data-testid="link" href="/">
              Home
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a  data-testid="portfolio" href="#portfolio" onClick={() => handleClick('Portfolio')}>
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact-form" onClick={() => handleClick('Contact')}>
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={() => handleClick('Resume')}>
              Resume
            </a>
          </li>
       
        </ul>
      </nav>
    </header>
  );
}

export default Nav;