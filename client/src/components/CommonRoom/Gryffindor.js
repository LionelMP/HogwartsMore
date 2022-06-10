import styled from "styled-components";
import src from "../../asset/GryffindorCommonRoom.jpg";

const Gryffindor = () => {
    return (
        <Wrapper>
            <GryffindorCommonRoom 
        src={src}
        alt="Gryffindor common room image"
        />
        </Wrapper>
        
    );
};

export default Gryffindor;

const GryffindorCommonRoom = styled.img`

height: 94vh;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
`;