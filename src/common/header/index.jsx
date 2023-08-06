import styled from "styled-components";
import Logo from "../../components/img/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Img src={Logo} />
      <LogoText>요즘무엇</LogoText>
      <NavT>로그인</NavT>
      <NavT>회원가입</NavT>
    </HeaderContainer>
  );
};

export default Header;

const Img = styled.img`
  width: 78.262px;
  height: 85.046px;
`;

const HeaderContainer = styled.div`
  border: 1px solid black;
  width: auto;
  height: 89.578px;
  box-shadow: 0px 3.062499761581421px 15.312499046325684px 0px
    rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.p`
  color: #4f98ff;
  font-size: 36.75px;
  font-weight: 700;
  margin: 0;
`;

const NavT = styled.p`
  color: #4f98ff;
`;
