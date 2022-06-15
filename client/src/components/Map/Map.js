import styled from "styled-components";
import srcIntro from "../../asset/IntroMaraudersMap.gif";
import srcMaraudersMap from "../../asset/MaraudersMap.jpg";
import { useState } from "react";

const Map = () => {
    const [intro, setIntro] = useState(true);

    // Display intro just for 5 secs
    setTimeout(() => {
        setIntro(false);
    }, 5000);

    return (
        <Wrapper>
            {intro
            ? <Intro src={srcIntro}/>
            : <MaraudersMap src={srcMaraudersMap}/>}
        </Wrapper>
    );
};

export default Map;

const Wrapper = styled.div`
display: flex;
justify-content: center;
background-color: rgb(189, 165, 115, 1);
`;

const Intro = styled.img`
height: 92vh;
`;

const MaraudersMap = styled.img`
height: 92vh;
`;