import styled from "styled-components";
import Header from "../header";
import Profile from "../../components/img/profile.png";

const WritePage = () => {
  return (
    <Container>
      <Header />
      <Content>게시글 내용</Content>
      <Commend>
        <ComProfile>
          <img src={Profile} alt="프로필" />
          <UserId>유저</UserId>
        </ComProfile>
        <ComContent>
          댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
        </ComContent>
      </Commend>
    </Container>
  );
};

export default WritePage;

const Container = styled.div`
  padding: 100px 100px;
`;

const Content = styled.div`
  width: 1171px;
  height: 526px;
  border: 3px solid #4f98ff;
`;

const ComProfile = styled.div`
  display: flex;
  flex-direction: row;
`;

const Commend = styled.div`
  width: 1181px;
  border-bottom: 0.5px solid black;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

const UserId = styled.p`
  color: black;
  font-size: 30px;
  margin: 0;
  margin-left: 10px;
`;

const ComContent = styled.div`
  margin: 30px 10px 20px;
`;
