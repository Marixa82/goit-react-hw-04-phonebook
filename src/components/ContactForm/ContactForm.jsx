import { Button, Input, Label, Form} from "./ContactForm.styled";
import { Component } from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    name: '',
    number: '',
}
class ContactForm extends Component{
    state = INITIAL_STATE
   static propTypes = {
     onAdd: PropTypes.func.isRequired,
     onCheckUnique: PropTypes.func.isRequired,
  };
  
   handelChangeForm = ({target}) => {
        const {name, value} = target
    this.setState({[name] : value})
  }

 handelSubmit = (e) => {
  e.preventDefault();
  const { name, number } = this.state;
  const { onAdd } = this.props;
  const id = nanoid();
  const isValidatedForm = this.validateForm();

  if (isValidatedForm) {
    onAdd({ id, name, number });
    this.resetForm();
  }
};

resetForm = () => this.setState(INITIAL_STATE);

validateForm = () => {
  const { name, number } = this.state;
  const { onCheckUnique } = this.props;

  if (!name || !number) {
    alert('Some field is empty');
    return false;
  }

  return onCheckUnique(name);
};

    
    render() {
    const { name, number } = this.state;
   this.nameInputId = nanoid()
        return (
            <Form onSubmit={this.handelSubmit}>
        <Label htmlFor={this.nameInputId}>
            Name<Input
            type="text"
            name='name'
            value={name}
            placeholder="Enter contact name"
            onChange={this.handelChangeForm}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
            </Label>
            <Label htmlFor=""> Number
              <Input
                type="tel" name='number'
                value={number}
                placeholder="Enter contact number"
                onChange={this.handelChangeForm} 
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              /></Label>
          <Button type='submit'>Add contact</Button>
        </Form>
        )
    }
}
export default ContactForm;