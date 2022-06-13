import styled from "styled-components";
import src from "../../asset/ArgusFilch.gif";
import { useNavigate } from "react-router-dom";

const CommonRoomError = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate(`/`);
    }, 5000);

    return (
        <Wrapper>
            <ErrorImage 
        src={src}
        alt="Argus Filch eye-rolling image"
        />
        <ErrorMessage>
            <Quote>"Oh, dear, we are in trouble." <QuoteAuthor>Argus Filch</QuoteAuthor></Quote>
            <div>I think you need to be logged to enter your common room.</div>
        </ErrorMessage>
        
        </Wrapper>
        
    );
};

export default CommonRoomError;

const Quote = styled.div`
    font-weight: bold;
`;

const QuoteAuthor =styled.span`
    font-style: italic;
`;

const ErrorMessage = styled.div`
margin-top: 10px;
text-align: center;
font-size: 20px;
`;

const ErrorImage = styled.img`
width: 30vw;
`;

const Wrapper = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
`;