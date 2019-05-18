import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  withNavigation,
} from 'react-navigation';
import DetailScreen from '../DetailScreen';
import {observer} from 'mobx-react/native';
import shoppingCartStore from '../stores/Cart';
type Props = {};
@observer
class ProductCard extends Component<Props> {
  state = {
    isHover: false,
  };
  handlePlusPress = () => {
    this.setState({ isHover: true });
    if (this.props.product.cartQty === 0){
    this.props.product.addToCart();
    }
  };
  handleInc = () => {
    this.props.product.incCartQty();
  };
  handleClose = () => {
    this.setState({ isHover: false });
  };
  handleRemove = () => {
    this.handleClose();
    this.props.product.removeFromCart();
  }
  handleDec = () => {
    this.props.product.decCartQty();
  };
  render() {
    const { product } = this.props;
    const { isHover } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ flex: 3 }} onPress={this.handleClose.bind(this)}>
          <Image style={styles.image} source={{ uri: product.imageUrl }} />
        </TouchableOpacity>
        <View style={{ flex: 8, padding: 10 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.title}>{product.price} d</Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Detail', {
                data: {
                  id: product.id,
                  ten: product.name,
                  gia: product.price,
                  mota: product.describ,
                  hinh: product.imageUrl,
                },
              })
            }>
            <Image
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/547901444708241408/JKjU008S.png',
              }}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
        {!isHover && (
          <TouchableOpacity
            onPress={this.handlePlusPress.bind(this)}
            style={{ right: 5, top: 5 }}>
            <Image
              style={{ width: 25, height: 25, right: 5, top: 5 }}
              source={{
                uri:
                  'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/add-circle-green-512.png',
              }}
            />
          </TouchableOpacity>
        )}
        {isHover && (
          <View
            style={{
              position: 'absolute',
              right: 5,
              top: 5,
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
      </View>
    );
  }
}
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
  },
  title: {
    fontSize: 14,
  },
});
export default withNavigation(ProductCard);
