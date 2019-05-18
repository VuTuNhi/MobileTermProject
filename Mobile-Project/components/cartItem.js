import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react/native';
type Props = {};
@observer
class CartItem extends Component<Props> {
  state = {
    isHover: false,
  };
  handleRemove = () => {
    this.props.product.removeFromCart();
  };
  handlePlusPress = () => {
    this.setState({ isHover: true });
  };
  handleInc = () => {
    this.props.product.incCartQty();
  };
  handleDec = () => {
    this.props.product.decCartQty();
  };
  render() {
    const { product } = this.props;
    const { isHover } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 3 }}>
          <Image style={styles.image} source={{ uri: product.imageUrl }} />
        </View>
        <View style={{ flex: 8, padding: 10, alignItems: 'center' }}>
          <Text style={styles.title}>{product.name}</Text>
        </View>
        {!isHover && (
          <View style={{ flex: 2 }}>
            <TouchableOpacity onPress={this.handlePlusPress.bind(this)}>
              <View
                style={{
                  borderColor: 'lightgray',
                  borderWidth: 0.5,
                  height: 20,
                  width: 20,
                  alignItems: 'center',
                }}>
                <Text style={{ justifyContent: 'center', fontSize: 11 }}>
                  {product.cartQty}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {isHover && (
          <View
            style={{
              position: 'absolute',
              right: 15,
              top: 20,
              zIndex: 99,
              width: 100,
              height: 30,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {product.cartQty > 1 ? (
                <TouchableOpacity onPress={this.handleDec.bind(this)}>
                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlv0ZLc-5n1mSY1dEpkmX0LW08m43-LwGfLgaBd1ZyhTyOEQKUXg',
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={this.handleRemove.bind(this)}>
                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCDluTDiMF8dNNNjB8H238tv6GDR4AdNsax3qOBdKSlSy8upz',
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
              )}
              <Text>{product.cartQty}</Text>
              <TouchableOpacity onPress={this.handleInc}>
                <Image
                  source={{
                    uri:
                      'https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/06-512.png',
                  }}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
            {product.totalPrice}
          </Text>
        </View>
      </View>
    );
  }
}
export default CartItem;
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    marginBottom: 8,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 10,
  },
});
