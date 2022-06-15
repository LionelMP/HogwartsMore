import styled from "styled-components";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { useContext,useEffect, useState } from "react";
import srcGryffindor from "../../asset/GryffindorCommonRoom.jpg";
import srcHufflepuff from "../../asset/HufflepuffCommonRoom.jpg";
import srcRavenclaw from "../../asset/RavenclawCommonRoom.jpg";
import srcSlytherin from "../../asset/SlytherinCommonRoom.jpg";
import Post from "../Posts/Post";
import NewPost from "../Posts/NewPost";



const CommonRoom = () => {

  const { currentUser } = useContext(CurrentUserContext);
  const [ feed, setFeed ] = useState([]);

  let src="";

useEffect(() => {
  fetch(`/api/get-houseFeed/${currentUser.house}`)
    .then((res) => res.json())
    .then((data) => {
      setFeed(data.data.feed);
  })
}, []);  

  if (currentUser.house === "Gryffindor")
  {
    src=srcGryffindor;
  }
  else if (currentUser.house === "Hufflepuff")
  {
    src=srcHufflepuff;
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
      <FeedWrapper>
      <Image 
      src={src} 
      alt={`${currentUser.house} common room image`}
      />
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
    </FeedWrapper>
    
      <CommonRoomImage 
      src={src} 
      alt={`${currentUser.house} common room image`}>          
      </CommonRoomImage>
      <FeedWrapper>
      <Image 
      src={src} 
      alt={`${currentUser.house} common room image`}
      />
      <HouseFeed>
        {feed.map((post, index) => {
          return (
            <Post 
            key={`postKey: ${post.author}, ${index}`}
            post={post}
            />
          );
        })}
        <NewPost feed={feed} setFeed={setFeed} />   
      </HouseFeed>
      </FeedWrapper>     
    </Wrapper>
  );
};

export default CommonRoom;

const FeedWrapper = styled.div`
overflow: hidden;
`;

const Image = styled.img`
position: absolute;
opacity: 0.7;
z-index: 1;
object-fit: cover;
height: 92vh;
`;

const HouseFeed = styled.div`
display: flex;
flex-direction: column;
z-index: 1;
overflow-y: scroll;
width: 34vw;
`;

const Wrapper = styled.div`
overflow: hidden;
display: flex;
justify-content: center;
height: 92vh;
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
z-index: 3;
`;
