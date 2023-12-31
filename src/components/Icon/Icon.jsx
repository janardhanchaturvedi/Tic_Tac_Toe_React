import React from 'react'
import { FaRegCircle, FaBolt} from 'react-icons/fa'
import { GiCrossMark } from "react-icons/gi";

function Icon({ name }) {
    if(name == "cross"){
        return <GiCrossMark />
    } else if(name =="circle"){
        return <FaRegCircle />
    }else{
        return <FaBolt />;
    }
}

export default Icon