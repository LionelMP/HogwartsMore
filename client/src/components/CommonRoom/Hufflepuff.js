import styled from "styled-components";
import src from "../../asset/HufflepuffCommonRoom.jpg";

const Hufflepuff = () => {
    return (
        <Wrapper>
            <HufflepuffCommonRoom 
        src={src}
        alt="Hufflepuff common room image"
        />
        </Wrapper>
        
    );
};

export default Hufflepuff;

const HufflepuffCommonRoom = styled.img`
height: 94vh;

`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
`;