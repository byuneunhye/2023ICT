import styled from "styled-components";
import Logo from "../../components/img/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Img src={Logo} />
      <LogoText>요즘무엇</LogoText>
      <Nav>
        <NavT>취향확인</NavT>
        <NavT>로그인</NavT>
        <NavT>회원가입</NavT>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 68px;
  left: 0;
  top: 0;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  /* justify-content: center; */
  position: fixed;
  margin: 0;
`;

const Img = styled.img`
  width: 60px;
  height: 60x;
`;

const LogoText = styled.p`
  color: #4f98ff;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
`;

const NavT = styled.p`
  color: #4f98ff;
`;

const Nav = styled.div`
  margin-left: 840px;
  display: flex;
  flex-direction: row;
  gap: 45px;
`;
