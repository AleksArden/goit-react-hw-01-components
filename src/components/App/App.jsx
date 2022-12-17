import { BoxProfile } from 'components/BoxProfile/BoxProfile';
import user from '../../assets/user.json'
import {Container} from './App.styled'

export const App = () => {
  return (
    <Container>
      <BoxProfile user={ user } />
    </Container>
  );
};

