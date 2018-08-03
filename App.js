import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import { Container, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      email:'', subject:'',message:''
    };
  }

  klikPost=()=>{
    var url = `http://192.168.1.104:3210/kirimemail`;
    axios.post(url, {
      email: this.state.email,
      subjek: this.state.subject,
      message: this.state.message
      }).then((input)=>{
        alert(input.data)
      }).catch((y)=>{alert(y.data)})

  }

  render() {
    return (
    <Container>
      <View>
        <Header
          backgroundColor={'teal'}
            centerComponent={{ text: 'REACT NATIVE ♥ NODEMAILER', style: {color: 'white'}}}/>
      </View>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label> To (email recipient)...</Label><Input onChangeText={(input)=>this.setState({email: input})}/>
          </Item>
          <Item floatingLabel>
              <Label> Email subject...</Label><Input onChangeText={(input) => this.setState({ subject: input })}/>
          </Item>
          <Item floatingLabel last>
              <Label> Messages...</Label><Input onChangeText={(input) => this.setState({ message: input })}/>
          </Item>
        </Form>
        <Button iconLeft block info
        onPress={this.klikPost}>
          <Icon name='paper-plane' />
         <Text> SEND EMAIL </Text>
        </Button>
          <View>
          <Text style={{textAlign: 'center'}}>
             Email will be sent from
          </Text>
          <Text style={{ textAlign: 'center' }}>
            raedinurdiansyah@gmail.com
          </Text>
        </View>

      </Content>
    </Container>
    );
  }
}

export default App;