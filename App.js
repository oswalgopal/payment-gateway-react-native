import React from 'react';
import {View, Button, TouchableHighlight, Text} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const stripePayment = () => {};
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableHighlight
        style={{
          width: 150,
          padding: 10,
          backgroundColor: 'blue',
          color: '#fff',
        }}
        onPress={() => {
          var options = {
            description: 'test razorpay integration',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_l4pVzgQPivO7t0',
            amount: '100',
            name: 'foo',
            prefill: {
              email: 'gploswal@gmail.com',
              contact: '7024415907',
              name: 'Razorpay Software',
            },
            theme: {color: 'black'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
          }}>
          Razorpay
        </Text>
      </TouchableHighlight>
      <View
        style={{
          width: 150,
          margin: 10,
        }}>
        <Button title={'stripe'} onPress={stripePayment()} />
      </View>
    </View>
  );
};

export default App;
