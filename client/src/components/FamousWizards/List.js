import styled from "styled-components";
import http from "http";

const List = () => {
    const http = require(`http`);
    
    http.get(`http://hp-api.herokuapp.com/api/characters`, (resp) => {
        "http": require.resolve("stream-http");
        let data = "";

        resp.on("data", (chunk) => {
            data += chunk;
        });

        resp.on("end", () => {
            console.log(JSON.parse(data));
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    })

    return (
        <Wrapper>
           {/* { .map((wizar, index) => {
        return (
          <Name
          key={`wizardKey: ${wizardName}, ${index}`}
          />
        );
      })} */}

        </Wrapper>
    );
};

export default List;

const Wrapper = styled.div``;

// const Name = styled(Link)``;