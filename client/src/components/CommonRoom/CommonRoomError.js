import styled from "styled-components";
import src from "../../asset/ArgusFilch.gif";

const CommonRoomError = () => {
    return (
        <Wrapper>
            <ErrorImage 
        src={src}
        alt="Argus Filch eye-rolling image"
        />
        </Wrapper>
        
    );
};

export default CommonRoomError;

const ErrorImage = styled.img`
height: 92vh;

`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
`;