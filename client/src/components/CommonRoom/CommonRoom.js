import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { useContext } from "react";
import srcGryffindor from "../../asset/GryffindorCommonRoom.jpg";
import srcHufflepuff from "../../asset/HufflepuffCommonRoom.jpg";
import srcRavenclaw from "../../asset/RavenclawCommonRoom.jpg";
import srcSlytherin from "../../asset/SlytherinCommonRoom.jpg";
import Post from "../Posts/Post";
import { useEffect, useState } from "react";



const CommonRoom = () => {

  const { currentUser } = useContext(CurrentUserContext);
  const [ feed, setFeed ] = useState([]);

  let src="";
  // let alt="";


useEffect(() => {
  fetch(`/api/get-houseFeed/${currentUser.house}`)
    .then((res) => res.json())
    .then((data) => {
      setFeed(data.data.feed);
  })
}, []);
  
  
  // alt=`${currentUser.house} common room image`;

  if (currentUser.house === "Gryffindor")
  {;
    src=srcGryffindor;
  }
  else if (currentUser.house === "Hufflepuff")
  {
    src=srcHufflepuff;
    // console.log("src"+currentUser.house);
    // src=("src"+currentUser.house);
    // console.log(src);
  }
  else if (currentUser.house === "Ravenclaw")
  {
    src=srcRavenclaw;
  }
  else if (currentUser.house === "Slytherin")
  {
    src=srcSlytherin;
  }

  return (
    <Wrapper className={`${currentUser.house}`}>
      <CommonRoomImage 
      src={src} 
      alt={`${currentUser.house} common room image`}>          
      </CommonRoomImage>
      <HouseFeed>
        {feed.map((post, index) => {
          return (
            <Post 
            key={`postKey: ${post.author}, ${index}`}
            post={post}
            />
          );
        })}        
      </HouseFeed>      
    </Wrapper>
  );
};

export default CommonRoom;

const HouseFeed = styled.div`
display: flex;
flex-direction: column;
height: fit-content;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
  &.Gryffindor {
    background-color: var(--gryffindor-color);
  }
  &.Ravenclaw {
    background-color: var(--ravenclaw-color);
  }
  &.Hufflepuff {
    background-color: var(--hufflepuff-color);
  }
  &.Slytherin {
    background-color: var(--slytherin-color);
  }
`;

const CommonRoomImage = styled.img`
height: 92vh;
`;
