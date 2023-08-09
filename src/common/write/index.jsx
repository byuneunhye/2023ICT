import styled from "styled-components";
import Header from "../header";
import { useState } from "react";
import { customAxios } from "../../apis";

const WritePage = () => {
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
        <Title
          placeholder="트렌드 제목을 입력하세요"
          onChange={onChange}
          type="text"
          name="title"
        />
        <TagContainer>
          <Tag placeholder="키워드 입력"></Tag>
        </TagContainer>
      </PostContainer>

      <Content
        placeholder="게시글 내용을 입력하세요"
        onChange={onChange}
        type="text"
        name="description"
      ></Content>
      <Button onClick={fetchPost}>업로드</Button>
      {/* <Commend>
        <ComProfile>
          <UserId>유저</UserId>
          <Date>2080.80.80</Date>
        </ComProfile>
        <ComContent>
          댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용
        </ComContent>
      </Commend> */}
    </Container>
  );
};

export default WritePage;

const Container = styled.div`
  padding: 100px 100px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.input`
  color: black;
  font-size: 50px;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid #4f98ff;
  margin: 0;
`;

const Tag = styled.input`
  width: 152px;
  height: 46px;
  border-radius: 76px;
  background-color: #d0ebfe;
  text-align: center;
  align-items: center;
  margin-top: 30px;
  border: none;
`;

const Content = styled.textarea`
  width: 100%;
  height: 526px;
  border: 1px solid #4f98ff;
  font-size: 20px;
  padding: 30px;
  margin-top: 10px;
`;

const TagContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 202px;
  height: 90px;
  border-radius: 100px;
  margin-top: 30px;
  background-color: #d0ebfe;
  color: black;
  font-size: 30px;
  border: none;
`;
