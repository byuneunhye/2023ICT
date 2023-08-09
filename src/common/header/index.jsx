import styled from "styled-components";
import Logo from "../../components/img/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <a
        href="/"
        style={{
          display: "flex",
          flexDirection: "row",
          textDecoration: "none",
        }}
      >
        <Img src={Logo} />
        <LogoText style={{ paddingTop: "15px" }}>요즘무엇</LogoText>
      </a>
      <Nav>
        <a href="/post">
          <NavBox>
            <Red>New!</Red>
            <NavT>취향확인</NavT>
          </NavBox>
        </a>

        <a href="login" style={{ textDecoration: "none" }}>
          <NavT>로그인</NavT>
        </a>
        <a href="signup" style={{ textDecoration: "none" }}>
          <NavT>회원가입</NavT>
        </a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 68px;
  left: 0;
  top: 0;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  position: fixed;
  margin: 10;
  padding: 5px 16px;
  background-color: white;
`;

const Img = styled.img`
  width: 50px;
  height: 50x;
  padding: 5px;
`;

const LogoText = styled.p`
  color: #4f98ff;
  font-size: 30px;
  font-weight: 700;
  margin: 0px;
`;

const Nav = styled.div`
  margin-left: 900px;
  display: flex;
  flex-direction: row;
  gap: 45px;
  padding-top: 20px;
  margin-top: -20px;
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Red = styled.p`
  color: #ee3d3d;
  font-size: 9px;
  font-weight: 400;
  margin: 0;
  margin-top: -10px;
  margin-left: -50px;
`;

const NavT = styled.p`
  color: #4f98ff;
  margin: 0;
`;
