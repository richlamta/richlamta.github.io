import React from "react";
import styled from "styled-components";

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }


    @media (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document} {
        display: flex;
    }

    border: 0.1px solid #306ee8;
    box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
`;

const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`;



const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme})=>theme.text_primary +99};

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;


const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme})=>theme.text_secondary+99};

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Description = styled.div`
    font-size: 15px;
    width: 100%;
    font-weight: 400;
    color: ${({theme})=>theme.text_primary +99};
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;


const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`


const Date = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    {/* <Date>{education.date}</Date> */}
                </Body>
            </Top>
            <Date><b></b>{education.date}</Date>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard;