import styled from "styled-components";
import { format } from "date-fns";
import { enCA } from "date-fns/locale";

const Post = ({ post }) => {
  let time = format(new Date(post.timestamp), "dd LLL yyyy hh:mm a", {
    locale: enCA,
  });
    
  return (
    <PostBox>
        <PostInfo>
        <PostAuthor>{post.author}</PostAuthor>
        <PostTime>{time}</PostTime>
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
