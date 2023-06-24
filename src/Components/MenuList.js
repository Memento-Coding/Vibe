import {BsFillHouseFill, BsFillCompassFill} from 'react-icons/bs'
import {FaMicrophoneAlt} from 'react-icons/fa'
import {AiFillHeart} from 'react-icons/ai'
import {IoIosAlbums} from 'react-icons/io'

const MenuList = [
    {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Inicio",
    },
    {
    id: 2,
    icon: <BsFillCompassFill />,
    name: "Explorar",
    },
    {
    id: 3,
    icon: <FaMicrophoneAlt />,
    name: "Microfono",
    },
    {
    id: 4,
    icon: <IoIosAlbums />,
    name: "Albums",
    },
    {
    id: 5,
    icon: <AiFillHeart />,
    name: "Like",
    },
];

export { MenuList };