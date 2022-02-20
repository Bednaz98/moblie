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
                        <View
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}>
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
            <Modal
                animationType='slide'
                transparent={true}
                visible={showUpdateProfModal}
                onRequestClose={() =>
                    setShowUpdateProfModal(!showUpdateProfModal)
                }>
                <View
                    style={{
                        backgroundColor: 'white',
                    }}>
                    <label>
                        First Name:
                        <TextInput
                            placeholder='John'
                            onChangeText={setFirstName}
                            value={firstName}
                        />
                    </label>
                    <label>
                        Last Name:
                        <TextInput
                            placeholder='Doe'
                            onChangeText={setLastName}
                            value={lastName}
                        />
                    </label>
                    <label>
                        Email:
                        <TextInput
                            placeholder='jdoe123@emailprovider.com'
                            onChangeText={setEmail}
                            value={email}
                        />
                    </label>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: 'white',
                            justifyContent: 'space-between',
                        }}>
                        <Button
                            title='Go Back'
                            onPress={() =>
                                setShowUpdateProfModal(!showUpdateProfModal)
                            }
                        />
                        <Button title='Submit Update' onPress={() => {}} />
                    </View>
                </View>
            </Modal>
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
                    style={{
                        flexDirection: 'row',
                        alignItems: 'stretch',
                        margin: 4,
                    }}>
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
                        title='Update Profile'
                        onPress={() =>
                            setShowUpdateProfModal(!showUpdateProfModal)
                        }
                    />
                </View>
            </View>
        );
    }

    function Feed() {
        return (
            <View style={{ backgroundColor: 'darkgrey', flex: 10 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        margin: 5,
                    }}>
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
                <View
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        margin: 5,
                    }}>
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
            <UpdateProfileModal />
        </View>
    );
}
