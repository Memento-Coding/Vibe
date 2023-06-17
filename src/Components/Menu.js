import React, { useEffect } from 'react'

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
                        <a href='#'>
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </a>
                        
                        
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export { Menu }