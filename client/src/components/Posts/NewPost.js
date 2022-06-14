import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../CurrentUser/CurrentUserContext";
import { GrSend } from "react-icons/gr";

const NewPost = () => {
    const [message, setMessage] = useState("");
    const { currentUser } = useContext(CurrentUserContext);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        fetch(`/api/add-post/${currentUser.house}/${currentUser._id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ content: message, name: currentUser.name })
        })
        .then((res) => res.json())
        .then((data) => {
            window.location.reload(true);
        })
    };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <PostInput
          id="postContent"
          type="text"
          size="300"
          placeholder="Write your message here, no more than 300 caracters."
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <PostButton type="submit">Post ! <GrSend /></PostButton>
      </Form>
    </Wrapper>
  );
};

export default NewPost;

const Form = styled.form`
  width: 100px;
  `;

const Wrapper = styled.div`
z-index: 3;
  display: flex;
  flex-direction: column;
`;

const PostInput = styled.input`
    width: 400px;
    font-size: 15px;
`;

const PostButton = styled.button`
font-size: 15px;
`;
