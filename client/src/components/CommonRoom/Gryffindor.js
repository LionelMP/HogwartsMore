import styled from "styled-components";
import src from "../../asset/GryffindorCommonRoom.jpg"

const Gryffindor = () => {
    return (
        <GryffindorCommonRoom 
        src={src}
        alt="Gryffindor common room image"
        />
    );
};

export default Gryffindor;

const GryffindorCommonRoom = styled.img``;