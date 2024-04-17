import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ImageSlider = ({
  data,
  width,
  height,
  borderRadius,
  separatorWidth,
  contentContainerStyle,
  indicator,
  indicatorActiveColor,
  indicatorInActiveColor,
  indicatorActiveWidth,
  indicatorInActiveWidth,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({ item }) => (
    <Pressable>
      <Image
        style={{
          height: height,
          width: width,
          borderRadius: borderRadius,
          objectFit: "fill",
        }}
        source={item.source}
      />
    </Pressable>
  );
  const keyExtractor = (item) => item.id;
  const ItemSeparatorComponent = () => (
    <View style={{ width: separatorWidth }} />
  );
  const totalItemWidth = width + separatorWidth;
  const getItemLayout = (_, index) => ({
    length: totalItemWidth,
    offset: totalItemWidth * index,
    index,
  });
  const onViewableItemsChanged = ({ _, viewableItems }) => {
    if (viewableItems.length > 0) {
      console.log(viewableItems[0].index);
      setCurrentIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
        getItemLayout={getItemLayout}
        horizontal={true}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        bounces={false}
        contentContainerStyle={contentContainerStyle}
        decelerationRate="fast"
        overScrollMode="never"
        snapToInterval={totalItemWidth}
        showsHorizontalScrollIndicator={false}
      />
      {indicator && (
        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={{
                height: 6,
                width:
                  index === currentIndex
                    ? indicatorActiveWidth
                    : indicatorInActiveWidth,
                borderRadius: 4,
                backgroundColor:
                  index === currentIndex
                    ? indicatorActiveColor
                    : indicatorInActiveColor,
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
});

export default ImageSlider;
