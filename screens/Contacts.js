import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Contacts from 'expo-contacts';

export default class ContactList extends Component {
  constructor () {
    super();
    this.state = {
      contacts: null
    };
  };

  componentDidMount() {

    const contact = Contacts.getContactByIdAsync();
      if (contact) {
        console.log(contact);
    }


    // const { data } = Contacts.getContactsAsync({
    //   fields: [Contacts.Fields.Emails],
    // });

    // console.log(data);

  }
    /*
    if (data.length > 0) {
      const contact = data[0];
      console.log(contact);
    }
  } */

  render() {
    return (
      <Text>Contacts</Text>
    )
  }

}




