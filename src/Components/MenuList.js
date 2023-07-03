import {BsFillHouseFill, BsFillCompassFill} from 'react-icons/bs'
import {FaMicrophoneAlt} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'


const MenuList = [
    {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Inicio",
    hrfe: "/inicio"
    },
    {
    id: 2,
    icon: <BsFillCompassFill />,
    name: "Explorar",
    hrfe: "/inicio/explorar"
    },
    {
    id: 3,
    icon: <FaMicrophoneAlt />,
    name: "Microfono",
    hrfe: "/inicio/microfono"
    },
    {
    id: 4,
    icon: <AiFillHeart />,
    name: "Like",
    hrfe: "/inicio/like"
    },
];

export { MenuList };