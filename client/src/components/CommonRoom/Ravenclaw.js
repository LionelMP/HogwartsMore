import styled from "styled-components";
import src from "../../asset/RavenclawCommonRoom.jpg";

const Ravenclaw = () => {
    return (
        <Wrapper>
            <RavenclawCommonRoom 
        src={src}
        alt="Ravenclaw common room image"
        />
        </Wrapper>
        
    );
};

export default Ravenclaw;

const RavenclawCommonRoom = styled.img`
height: 94vh;

`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
`;