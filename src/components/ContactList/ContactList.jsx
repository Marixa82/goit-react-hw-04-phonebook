import PropTypes from 'prop-types';
import { Ul } from './ContactList.styled';
import {ContactListItem} from "./ContactListItem";

export const ContactList = ({ contacts, delContact }) => {
    if(contacts.length === 0) return null
    return (
        <Ul>
            {contacts.map(contact => {
                const { id } = contact
                return (
                    < ContactListItem
                        key={id}
                    {...contact}
                delContact={delContact} />)    
            })}
         </Ul>)
    }
    
ContactList.propTypes = {
     contacts: PropTypes.array.isRequired,
 }