import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { colors } from '../theme/theme';

const Layout = ({ children }) => {
  return <StContainer>{children}</StContainer>;
};

export default Layout;

const StContainer = styled(Container)`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
`;
