import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';

const Logo = ({ height }) => {
  const navigate = useNavigate();

  return (
    <StLogoContainer height={height}>
      <StLogo onClick={() => navigate('/')}>
        <img src={logo} alt='아이콘' />
      </StLogo>
    </StLogoContainer>
  );
};

export default Logo;

const StLogoContainer = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StLogo = styled.div`
  width: 350px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
