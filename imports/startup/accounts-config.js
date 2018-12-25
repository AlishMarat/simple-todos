import { Accounts } from 'meteor/accounts-base';
 //this code use for creating accouts and add it for using password
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});