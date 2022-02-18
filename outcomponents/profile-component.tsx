import React, { useState } from 'react';
import { View, Text, Button, Modal, Image, TextInput } from 'react-native';

export default function ProfileComponent() {
  const [showFeed, setShowFeed] = useState(true);
  const [showUpdateProfModal, setShowUpdateProfModal] = useState(false);
  function ModalImage() {
    return (
      <View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={true}
          onRequestClose={() => {}}>
          <View style={{}}>
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
              <UserInfo />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  function UpdateProfileModal() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={showUpdateProfModal}
          onRequestClose={() => setShowUpdateProfModal(!showUpdateProfModal)}>
          <View
            style={{ flex: 1, alignSelf: 'center', backgroundColor: 'white' }}>
            <TextInput
              placeholder='First Name'
              onChangeText={setFirstName}
              value={firstName}
            />
            <TextInput
              placeholder='Last Name'
              onChangeText={setLastName}
              value={lastName}
            />
            <TextInput
              placeholder='Email'
              onChangeText={setEmail}
              value={email}
            />
            <Button title='Submit Update' onPress={() => {}}></Button>
            <Button
              title='Close Modal'
              onPress={() =>
                setShowUpdateProfModal(!showUpdateProfModal)
              }></Button>
          </View>
        </Modal>
      </View>
    );
  }

  function ShowFeed() {
    if (showFeed) {
      return <Text>Feed</Text>;
    } else {
      return <Text>Followers</Text>;
    }
  }

  function UserInfo() {
    return (
      <View>
        <Image
          style={{ height: 64 * 1.5, width: 64 * 1.5 }}
          source={require('.././assets/Sale.png')}
        />
        <Text>Your Name</Text>
        <Text>UserName</Text>
      </View>
    );
  }

  function SearchBar() {
    return (
      <View style={{ flex: 1, backgroundColor: 'grey' }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'stretch', margin: 4 }}>
          <Text style={{ flex: 1 }}>NavButton</Text>
          <View style={{ flex: 4 }} />
          <Text style={{ flex: 1 }}>Search</Text>
        </View>
      </View>
    );
  }

  function UpdateProfileNest() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'dimgrey',
          flexDirection: 'row-reverse',
          alignItems: 'center',
        }}>
        <View style={{ margin: 5 }}>
          <Button
            title='Profile'
            onPress={() => setShowUpdateProfModal(!showUpdateProfModal)}
          />
        </View>
      </View>
    );
  }

  function Feed() {
    return (
      <View style={{ backgroundColor: 'darkgrey', flex: 10 }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 5 }}>
          <Button
            title='Feed'
            onPress={() => {
              setShowFeed(true);
            }}
          />
          <Button
            title='followers'
            onPress={() => {
              setShowFeed(false);
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 5 }}>
          <ShowFeed />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <SearchBar />
      <UpdateProfileNest />
      <Feed />
      <View>
        <UpdateProfileModal />
      </View>
    </View>
  );
}
