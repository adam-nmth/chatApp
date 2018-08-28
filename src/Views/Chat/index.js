import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border: 1px solid black;
  height: 600px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border: 1px solid red;
  height: 80px;
  display: flex;
`;

const Body = styled.div`
  height: 100%;
  display: flex;
`;

const Users = styled.div`
  border: 1px solid white;
  display: flex;
  flex: 1;
`;

const Conversation = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;

const Messages = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex: 6;
`;

const InputArea = styled.div`
  border: 1px solid blue;
  display: flex;
  flex: 1;
`;

class Chat extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Body>
          <Users />
          <Conversation>
            <Messages />
            <InputArea />
          </Conversation>
        </Body>
      </Wrapper>
    ) 
  }
}

export default Chat;
