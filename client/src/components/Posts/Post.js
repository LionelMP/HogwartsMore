import styled from "styled-components";
import { format } from "date-fns";
import { enCA } from "date-fns/locale";
import srcHufflepuff from "../../asset/HufflepuffCommonRoom.jpg";


const Post = ({ post }) => {
  let time = format(new Date(post.timestamp), "hh:mm a dd LLL yyyy", {
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
        <PostMedia>
          {post.media}
        </PostMedia>
      </PostContent>
    </PostBox>
  );
};

export default Post;

const PostBox = styled.div`
width: calc(100vw/3);
/* background-image: url(${srcHufflepuff});
opacity: 0.5; */
/* display: flex; */
`;

const PostInfo = styled.div`
display: flex;
opacity: 1;
`;

const PostAuthor = styled.div``;

const PostTime = styled.div``;

const PostContent = styled.div`
`;

const PostText = styled.div``;

const PostMedia = styled.div``;
