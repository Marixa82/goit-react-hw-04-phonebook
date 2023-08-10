import { Li, Span,Button } from './ContactListItem.styled';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id,name, number,delContact }) => {
        return (
        <Li>
           <Span>{name}</Span> : <Span>{number}</Span>
            <Button type="button" onClick={()=> delContact(id)}>Delete</Button>
        </Li>
    )
}
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  
}