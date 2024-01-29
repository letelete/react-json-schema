import ContactForm from './components/ContactForm';
import StringField from './components/StringField';
import CheckboxField from './components/CheckboxField';

import ReactJsonSchema from 'react-json-schema';

const welcomeSchema = {
  'component': 'h2',
  'className': 'text-center',
  'text': 'Hello World!'
};

const WelcomeBannerComponent = new ReactJsonSchema().parseSchema(welcomeSchema)

const formSchema = {
  'component': 'ContactForm',
  'title': 'Tell us a little about yourself, we\'d appreciate it',
  'children': [
    {
      'component': 'StringField',
      'label': 'What\'s your name',
      'name': 'fullname',
      'help': 'It\'s okay, don\'t be shy :)'
    },
    {
      'component': 'CheckboxField',
      'checkboxes': [
        {
          'label': 'I\'m already checked!',
          'defaultChecked': true,
          'key': 0
        },
        {
          'label': 'Here\'s another',
          'key': 10
        }
      ]
    }
  ]
};

const componentMap = { ContactForm, StringField, CheckboxField };
const contactForm = new ReactJsonSchema();
contactForm.setComponentMap(componentMap);
const ContactFormComponent = contactForm.parseSchema(formSchema)

export default function App() {
  return <div>
    {WelcomeBannerComponent}
    {ContactFormComponent}
  </div>
}
