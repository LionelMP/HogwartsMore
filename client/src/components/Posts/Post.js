import styled from "styled-components";
import { format } from "date-fns";
import { enCA } from "date-fns/locale";
import { GiOwl } from "react-icons/gi";

const Post = ({ post }) => {
  // Set up the wanted time fomat
  let time = format(new Date(post.timestamp), "dd LLL yyyy hh:mm a", {
    locale: enCA,
  });
  
  // Evaluating the freshness of a message
  let postingTime = new Date(post.timestamp).getTime();

  let now = new Date().getTime();

  let diffMs = (now - postingTime);
    
  return (
    <PostBox>
        <PostInfo>
        <PostAuthor>{post.author}</PostAuthor>
        <PostTime>{time}</PostTime>
         {diffMs < 600000 && <GiOwl style={{color:"blue"}} />}
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
width: 33vw;
z-index: 3;
margin: 3px;
`;

const PostInfo = styled.div`
display: flex;
width: fit-content;
border-radius: 5px;
background-color: rgb(250, 250, 250, 0.7);
`;

const PostAuthor = styled.span`
font-size: 20px;
margin-right: 5px;
`;

const PostTime = styled.span`
display: flex;
align-items: flex-end;
`;

const PostContent = styled.div`
padding: 5px;
background-color: rgb(250, 250, 250, 0.8);
border-radius: 20px;
width: fit-content;
`;

const PostText = styled.div`
font-size: 20px;
`;
