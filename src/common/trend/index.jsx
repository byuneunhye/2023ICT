import styled from "styled-components";
import Header from "../header";
import { useState } from "react";
import { customAxios } from "../../apis";

const Trend = () => {
  const [postData, setPostData] = useState({
    userId: "123",
    title: "",
    keyword: "안녕",
    description: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchPost = async () => {
    try {
      await customAxios.post("/board", postData);
      alert("성공!!");
    } catch {
      alert("실패!!");
    }
  };

  return (
    <Container>
      <Header />
      <PostContainer>
        <Title>제목</Title>
        <TagContainer>
          <Tag>태그</Tag>
        </TagContainer>
      </PostContainer>

      <Content>내용</Content>
      <Commend>
        <ComProfile>
          <UserId>유저</UserId>
          <Date>2080.80.80</Date>
        </ComProfile>
        <ComContent>
          댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
        </ComContent>
      </Commend>
    </Container>
  );
};

export default Trend;

const Container = styled.div`
  padding: 100px 100px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: black;
  font-size: 50px;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid #4f98ff;
  margin: 0;
`;

const Tag = styled.div`
  width: 152px;
  height: 46px;
  border-radius: 76px;
  background-color: #d0ebfe;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 30px;
`;

const Content = styled.div`
  width: 100%;
  height: 526px;
  border: 1px solid #4f98ff;
  margin-top: 50px;
  padding: 30px;
`;

const ComProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
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
  font-weight: 500;
  margin: 0;
  margin-left: 10px;
`;

const Date = styled.p`
  font-size: 20px;
  color: lightgray;
  margin: 0;
  margin-top: 10px;
`;

const ComContent = styled.div`
  margin: 30px 10px 20px;
`;

const TagContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
`;
