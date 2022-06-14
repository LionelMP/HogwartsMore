import styled from "styled-components";
import { format } from "date-fns";
import { enCA } from "date-fns/locale";
import { GiOwl } from "react-icons/gi";

const Post = ({ post }) => {
  // Set up the wanted time fomat
  let time = format(new Date(post.timestamp), "dd LLL yyyy hh:mm a", {
    locale: enCA,
  });

  let today = format(new Date(), "dd LLL yyyy hh:mm a", {
    locale: enCA,
  });

  let postingTime = new Date(post.timestamp);
  
  // Evaluating the freshness of a message
  let fresh = false;

  let now = new Date();

  let diffMs = (postingTime - time);
  let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
  if (time === today)
  {
    console.log("Same day!");
  }
  
console.log("look here!", time, today);
console.log(postingTime, "!!!", now, "1111", diffMs);

  if (diffMins < 10)
  {
    fresh = true;
  }

    
  return (
    <PostBox>
        <PostInfo>
        <PostAuthor>{post.author}</PostAuthor>
        <PostTime>{time}</PostTime>
        <GiOwl style={{color:"blue"}} />
      </PostInfo>
      <PostContent>
        <PostText>
          {post.content}
        </PostText>
      </PostContent>
    </PostBox>
  );
};

export default Post;

const PostBox = styled.div`
z-index: 3;
margin: 3px;
`;

const PostInfo = styled.div`
display: flex;
background-color: rgb(250, 250, 250, 0.7);
box-sizing: content-box;
`;

const PostAuthor = styled.div`
font-size: 20px;
margin-right: 5px;
`;

const PostTime = styled.div`
display: flex;
align-items: flex-end;
`;

const PostContent = styled.div`
padding: 5px;
background-color: rgb(250, 250, 250, 0.8);
border-radius: 20px;
`;

const PostText = styled.div`
font-size: 20px;
`;
