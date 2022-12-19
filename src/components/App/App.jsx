import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'assets/user.json';
import friends from 'assets/friends.json';
import data from 'assets/data.json';
import transactions from 'assets/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <FriendList friends={friends} />

      <Statistics title="Upload stat" stats={data} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
