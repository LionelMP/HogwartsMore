import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { FamousWizardsContext } from "./FamousWizardsContext";
import srcChocoFrogCard from "../../asset/ChocolateFrogCard.png";
import CircularProgress from "@mui/material/CircularProgress";
import CommonRoomError from "../CommonRoom/CommonRoomError";

const WizardDetails = () => {
    const { famousWizards, status } = useContext(FamousWizardsContext);
    const { name } = useParams();

    const wizard = famousWizards.find(element => element.name === name);
        
    return (
        <>
        {status === "loading" && <CircularProgress />}
        {status === "error" && <CommonRoomError />}
        {status === "idle" && 
        <Wrapper>
            {wizard.image
            ?<Image src={`${wizard.image}`}/>
            :<Image src={srcChocoFrogCard} />}
            <Info>
                {wizard.name && <WizardName>Name: {`${wizard.name}`}</WizardName>}
            {wizard.dateOfBirth && <BirthDate>Birthdate: {`${wizard.dateOfBirth}`}</BirthDate>}
            {wizard.house && <House>House: {`${wizard.house}`}</House>}            
            <Wand>Wand
                {wizard.wand.wood && <Wood>Wood: {`${wizard.wand.wood}`}</Wood>}
                {wizard.wand.core && <Core>Core: {`${wizard.wand.core}`}</Core>}
                {wizard.wand.length && <Length>Length: {`${wizard.wand.length}`}</Length>}
            </Wand>            
            {wizard.patronus && <Patronus>Patronus: {`${wizard.patronus}`}</Patronus>}
            {wizard.actor && <Actor>Actor: {`${wizard.actor}`}</Actor>}
            </Info>
            
        </Wrapper>} </>
    );
};

export default WizardDetails;

const Wrapper = styled.div`
display: flex;
`;

const WizardName = styled.div``;

const BirthDate = styled.div``;

const House = styled.div``;

const Wand = styled.div``;

const Wood = styled.div``;

const Core = styled.div``;

const Length = styled.div``;

const Patronus = styled.div``;

const Actor = styled.div``;

const Image = styled.img`
position: absolute;
left: 400px;
top: 200px;
`;

const Info = styled.div`
position: absolute;
left: 800px;
top: 200px;
border: 3px solid goldenrod;
padding: 10px;
`;