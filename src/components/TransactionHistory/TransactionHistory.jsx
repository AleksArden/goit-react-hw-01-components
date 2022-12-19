import PropTypes from 'prop-types';
import { TransactionHistoryStyled, TableHead, Title, Information} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryStyled>
  <TableHead>
    <tr>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </TableHead>
  <tbody>
                {items.map(({ id, type, amount, currency }, idx) => 
   <tr key={id}>
      <Information idx={idx}>{type}</Information>
      <Information idx={idx}>{amount}</Information>
      <Information idx={idx}>{currency}</Information>
    </tr>
   )}
    
  </tbody>
</TransactionHistoryStyled>
    )
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}