import styled from "styled-components";
import { TagList } from "../../components/Tag/data";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get("http://172.30.1.62:3000/user/loginCheck", {
        withCredentials: true,
      })
      .then(
        ({
          response: {
            data: { loggedIn, loginData },
          },
        }) => {
          console.log(loggedIn);
          setLogin(loggedIn);
          setUserData(loginData ?? {});
        }
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [search, setSearch] = useState("");
  return (
    <MainContainer>
      <TextBox>
        <Trend>트렌드가 궁금할 땐? </Trend>
        <Yomu> 요즘무엇! {login ? "로그됨" : "안됨"}</Yomu>
      </TextBox>
      <Input
        type="text"
        placeholder="키워드를 입력하세요"
        onChange={() => {}}
      />
      <TagContainer>
        {TagList.map((item) => (
          <Tag>
            <TagText>{item.tag}</TagText>
          </Tag>
        ))}
      </TagContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  padding: 211px 97px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

const Trend = styled.p`
  color: #4a81b7;
  font-size: 35px;
  margin: 0;
`;

const Yomu = styled.p`
  color: #4f98ff;
  font-size: 35px;
  margin: 0;
`;

const Input = styled.input`
  border-radius: 76px;
  border: 3px solid #4f98ff;
  width: 960px;
  height: 76px;
  padding-left: 30px;
  &::placeholder {
    color: #4f98ff;
    font-size: 22px;
    font-weight: 100;
  }
  margin: 40px 150px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Tag = styled.div`
  width: 202px;
  height: 76px;
  border-radius: 76px;
  background: #d0ebfe;
  text-align: center;
  align-items: center;
`;

const TagText = styled.p`
  color: black;
  font-size: 25px;
`;
