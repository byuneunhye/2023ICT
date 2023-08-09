import styled from "styled-components";
import LoginImg from "../../components/img/login.png";
import { useState } from "react";
import { customAxios } from "../../apis";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    id: "",
    pw: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchPost = async () => {
    try {
      await customAxios.post("/user/login", loginData);
      navigate("/");
      alert("성공");
    } catch {
      alert("실패");
    }
  };

  return (
    <LoginContainer>
      <Left>
        <Img src={LoginImg} alt="로그인" />
      </Left>

      <Right>
        <RightContent>
          <LoginText>Login</LoginText>
          <Explain>아주 환상적인 트렌드찾기를 시작해보세요!</Explain>
        </RightContent>
        <Input
          placeholder="아이디를 입력하세요"
          type="text"
          name="id"
          onChange={onChange}
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          type="text"
          name="pw"
          onChange={onChange}
        />
        <Button onClick={fetchPost}>Login</Button>
        <Con>
          <RecommendSignUp>아직회원이 아니신가요?</RecommendSignUp>
          <a href="/signup">
            <GoSign>회원가입</GoSign>
          </a>
        </Con>
      </Right>
    </LoginContainer>
  );
};

export default Signup;

const LoginContainer = styled.div`
  margin: 70px 150px;
  width: 1150.979px;
  height: 663.583px;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  width: 580.979px;
  height: 663.583px;
  background: #4f98ff;
  box-shadow: 0px 4.0833330154418945px 4.0833330154418945px 0px
    rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
  margin: 120px 60px;
`;

const Right = styled.div`
  width: 565.979px;
  height: 663.583px;
  background: #fbfbfb;
  box-shadow: 0px 4.0833330154418945px 4.0833330154418945px 0px
    rgba(0, 0, 0, 0.25);
`;

const LoginText = styled.p`
  color: #000;
  font-size: 65.333px;
  font-weight: 700;
  margin: 0;
`;

const RightContent = styled.div`
  margin: 80px 50px 0px 50px;
`;

const Explain = styled.p`
  color: #9b9a9a;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  margin-top: 15px;
`;

const Input = styled.input`
  border-radius: 15px;
  border: 0.7px solid #4f98ff;
  background: #fff;
  width: 411px;
  height: 64px;
  margin-left: 60px;
  margin-top: 30px;
  padding-left: 30px;
  font-size: 18px;
  font-weight: 300;
`;

const Button = styled.button`
  width: 430px;
  height: 86.771px;
  border-radius: 10.208px;
  background: #4f98ff;
  border: none;
  box-shadow: 3px 3px 3px lightgray;
  color: white;
  font-size: 40px;
  margin: 40px 70px;
  cursor: pointer;

  & :active {
    box-shadow: none;
  }
`;

const Con = styled.div`
  display: flex;
  flex-direction: row;
`;

const RecommendSignUp = styled.p`
  color: #9b9a9a;
  font-size: 15px;
  margin-left: 80px;
`;

const GoSign = styled.p`
  color: #4d69e2;
  font-size: 15.312px;
  font-weight: 500;
`;
