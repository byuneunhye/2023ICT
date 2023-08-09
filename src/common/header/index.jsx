import styled from "styled-components";
import Logo from "../../components/img/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Img src={Logo} />
      <LogoText>요즘무엇</LogoText>
      <Nav>
        <NavBox>
          <Red>New!</Red>
          <NavT>취향확인</NavT>
        </NavBox>

        <NavT>로그인</NavT>
        <NavT>회원가입</NavT>
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
