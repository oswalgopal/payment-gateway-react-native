import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  return (
    <TouchableHighlight
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
      }}
    >
      <Text>Razorpay</Text>
    </TouchableHighlight>
  );
};

export default App;
