import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 330px;
    height: 620px;
    background-color: ${({theme})=>theme.card};
    border-radius: 10px;
    box-shadow: 0px 0px 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`;




const Image = styled.img`
    width: 100%;
    height: 180px;
    // background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=>theme.primary};
    background-color: ${({theme})=>theme.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({theme})=>theme.text_secondary+99};
    overflow: hidden;
    text-overflow: ellipsis;
    // -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    margin-top: 8px;
    max-width: 100%;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;




const ProjectCard = ({project}) => {
    return (
        <Card>
            <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <ButtonGroup>
                <Button dull href={project?.github} target='new'>View Code</Button>
                {project.webapp && (
                <Button href={project.webapp} target='new'>Demo</Button>)}
            </ButtonGroup>
        </Card>
    );
};

export default ProjectCard;