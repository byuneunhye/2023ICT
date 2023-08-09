import styled from "styled-components";
import Header from "../header";

const PostPage = () => {
  return (
    <div>
      <Header />
      <Content>
        <Title>
          유저님, <br /> 무엇을 좋아하세요?
        </Title>
        <Explain>딱 맞는 트렌드를 보여드립니다✨</Explain>
      </Content>
    </div>
  );
};

export default PostPage;

const Content = styled.div`
  padding: 100px 97px;
`;

const Title = styled.p`
  color: #4f98ff;
  font-size: 66px;
  font-weight: 600;
  margin: 0;
  margin-top: 80px;
`;

const Explain = styled.p`
  color: #9b9a9a;
  font-size: 30px;
  font-weight: 400;
`;
