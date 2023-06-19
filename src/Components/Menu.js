import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Menu({menuObject}) {

  useEffect(() => {
      const allLi = document.querySelector(".menuContainer ul").querySelectorAll("li");

    function changeMenuActive() {
        allLi.forEach( (n) => n.classList.remove("active") );
        this.classList.add("active");
      }

      allLi.forEach( (n) => n.addEventListener("click", changeMenuActive));
    }, [])

  return (
    <div className="menuContainer">
        <ul>
            {
                menuObject && menuObject.map((menu) => (
                    <li>
                        {" "}
                        <Link to={menu.hrfe}>
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </Link>
                        
                        
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export { Menu }