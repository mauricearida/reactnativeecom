import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

var { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nnqBE3rTETcVAO7qnsZsTgHaFj%26pid%3DApi&f=1",
      "asydahttps://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fecs7.tokopedia.net%2Fimg%2Fcache%2F700%2Fproduct-1%2F2020%2F3%2F20%2F96126043%2F96126043_8d952195-3ec7-46de-ad17-4e82b77ba098_800_800&f=1&nofb=1sd",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fbaby-toys-10219700.jpg&f=1&nofb=1",
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoPlay={true}
            autoPlayTimeout={2}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
