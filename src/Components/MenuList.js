import {BsFillHouseFill} from 'react-icons/bs'
import { BiAddToQueue } from 'react-icons/bi';


const MenuList = [
    {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Inicio",
    hrfe: "/inicio"
    },
    {
    id: 2,
    icon: <BiAddToQueue />,
    name: "Agregar",
    hrfe: "/inicio/addsong"
    },
   
];

export { MenuList };