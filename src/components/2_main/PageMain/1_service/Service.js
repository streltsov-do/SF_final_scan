import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import PicTitle from './pic1.png';
import Button from "../custom/Button/Button";
import { mediaMaxWidh } from "../../../utils/consts";

const Container=styled.div`
    height: 620px;
    display: flex;
    position: relative;
    padding-left: 9px;
    @media (max-width: ${mediaMaxWidh}) {
        padding: 0;
        width : auto;
        height: auto;
        flex-direction: column;
    }
`
    const DivTItle=styled.div`
        width: 743px;
        height: 593px;
        z-index: 2;
        padding-top: 18px;
        display: flex;
        flex-direction: column;
        position: relative;
        @media (max-width: ${mediaMaxWidh}) {
            padding-top: 0;
            width : auto;
            height: auto;
        }
    `
        const Title=styled.h1`
            width: 743px;
            height: 288px;
            font-family: 'Ferry';
            font-style: normal;
            font-weight: 900;
            font-size: 60px;
            line-height: 72px;
            letter-spacing: 0.01em;
            text-align: left;
            margin-bottom: 20px;
            @media (max-width: ${mediaMaxWidh}) {
                width : auto;
                height: auto;
                font-size: 28px;
                line-height: normal;
                letter-spacing: 0.28px;
                margin-bottom: 19px;
            }
        `
        const TitleDesc=styled.h3`
            width: 550px;
            height: 48px;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            text-align: left;
            margin-bottom: 70px;
            @media (max-width: ${mediaMaxWidh}) {
                width : auto;
                height: auto;
                margin-bottom: 32px;
            }
        `
    const TitleImg=styled.img`
        width: 629px;
        height: 593px;
        left:  ${props => props.left};
        right: ${props => props.right};
        z-index: 1;
        position: absolute;
        @media (max-width: ${mediaMaxWidh}) {
            position: relative;
            left:  0;
            width: 347.182px;
            height: 327.312px;
            margin-bottom: 55.39px;
        }
    `


function Service(props) {
    const {logged} = props;
    const navigate=useNavigate();
    
    const refDiv = useRef(null);

    const [ imgOffset, setImgOffset] = useState(["530px","60px"]);

    function handleClick(){
        navigate("/search");
    }

    function handeResize() {
        let v_width = refDiv.current.offsetWidth;
        let lOffset = (v_width<1210)?"522px":"auto";
        let rOffset = (v_width<1210)?"auto":"60px";
        setImgOffset([lOffset,rOffset]);
    }

    useEffect(() => {
        handeResize()
    },[]);

    useEffect(() => {
        window.addEventListener('resize', handeResize);
        
        return () => {
            window.removeEventListener('resize', handeResize);
        };

    }, [imgOffset]);

    const isMobile = useMediaQuery({ maxWidth: mediaMaxWidh});

    return (
        <Container
            ref={refDiv}
            >
            <DivTItle>
                <Title>сервис по поиску<br/>публикаций {isMobile?<br/>:""}о компании<br/>по его ИНН</Title>
                <TitleDesc>Комплексный анализ публикаций, получение данных<br/>в формате PDF на электронную почту.</TitleDesc>
                {   
                    logged
                    ?
                        <Button 
                            name={"Запросить данные"} 
                            onClick={handleClick}
                            m_bottom={39}
                        />
                    :   <></>
                }
            </DivTItle>
            <TitleImg 
                src={PicTitle}
                left={imgOffset[0]}
                right={imgOffset[1]}
            >
            </TitleImg>
        </Container>
    )
}

export default Service;