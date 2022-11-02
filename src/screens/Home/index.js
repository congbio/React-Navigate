import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from 'react-native';
import React, {useState} from 'react';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const INITIAL_DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img: require('../../img/image20.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    img: require('../../img/image21.png'),
    title: 'Second Item',
  },
  {
    id: '5869d4a0f-3da1-471f-bd96-145571e29d72',
    img: require('../../img/image22.png'),
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd9d6-145571e29d722',
    img: require('../../img/image23.png'),
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557129d72',
    img: require('../../img/image133.png'),
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-b96-145571e29d72',
    img: require('../../img/image22.png'),
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557d1e29d72',
    img: require('../../img/image134.png'),
    title: 'Third Item',
  },
  {
    id: '58694a0f-3d1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2d72',
    img: require('../../img/image20.png'),
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471-bd96-145571e29d72',
    img: require('../../img/image20.png'),
    title: 'Third Item',
  },
];

const Home = ({navigation}) => {
  const [data, setData] = useState(INITIAL_DATA);

  const onLoadMore = () => {
    setData([
      ...data,
      {
        id: `${Math.random()}`,
        title: 'New Item',
      },
      {
        id: `${Math.random()}`,
        title: 'New Item',
      },
      {
        id: `${Math.random()}`,
        title: 'New Item',
      },
    ]);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {headerTitle: 'Product 2'});
        }}
        style={styles.item}>
        <Text>{item?.title}</Text>
        <Image
                style={styles.picture}
                source={item?.img}
            />
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text>headerTitle</Text>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>Empty</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color="red" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        stickyHeaderIndices={[0]}
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              setData(INITIAL_DATA);
            }}
          />
        }
        onEndReached={onLoadMore}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: 80,
    borderWidth: 1,
    marginTop: 10,
  },
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'pink',
  },
  headerContainer: {height: 44, backgroundColor: 'pink'},
});
