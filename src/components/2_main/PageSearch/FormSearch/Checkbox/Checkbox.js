import React from "react";
import styled from "styled-components/macro";

import DivFlex from "../../../../utils/DivFlex/DivFlex";

const Input=styled.input`
    width: 20px;
    height: 20px;
`
const Label=styled.label`
    color: #000000;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    opacity: ${props => (props.enabled)?1:0.4};
`

export default function Checkbox(props){
    const {name, defaultChecked, enabled, change} = props;

    return(
        <DivFlex 
            height={22} 
            gap={17}
            align="center"
            render={
                <>
                    <Input 
                        type="checkbox" 
                        value={name} 
                        name={name} 
                        defaultChecked={defaultChecked} 
                        onChange={change}
                    ></Input>
                    <Label htmlFor="Input" enabled={enabled}>{name}</Label>
                </>
            }
        />
    )
}