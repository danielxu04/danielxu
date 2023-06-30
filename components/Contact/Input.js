import { useContext } from "react";
import { LightModeContext } from "../../contexts/LightMode";

function Input(props){

    const lightModeState = useContext(LightModeContext);

    return (
        <input 
            className={`rounded-md  w-[77vw] 2xs:w-[70vw] lg:w-[45vw] p-3 mt-[6vh] font-montserratRegular inline-block mx-auto text-left focus:outline-none 
            transition-075 ${lightModeState.isLightMode === 'light' 
                ? 'bg-zinc-800 text-purple-300 purple-300-glow form-purple-box-shadow' 
                : 'bg-pink-50 text-fuchsia-600 fuchsia-600-glow placeholder-fuchsia-300 light-form-box-shadow'}`}
            name = {props.name}
            id = {props.id}
            type = {props.type}
            placeholder = {props.placeholder}
            onChange = {props.onChange}
            onBlur = {props.onBlur}
            value = {props.value}
        />
    );
}

export default Input;