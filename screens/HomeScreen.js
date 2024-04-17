import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../utils/constants";
import ImageSlider from "../components/ImageSlider";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const categories = [
    {
      id: 1,
      text: "Favorit",
    },
    {
      id: 2,
      text: "Transfer",
    },
    {
      id: 3,
      text: "E-Wallet",
    },
    {
      id: 4,
      text: "Pembayaran",
    },
    {
      id: 5,
      text: "Pembelian",
    },
  ];

  const categoryItem = ({ item }) => {
    const isActive = item.id === activeCategory;
    return (
      <Pressable
        style={[
          styles.categoryItem,
          isActive ? styles.activeCategory : styles.inActiveCategory,
        ]}
        onPress={() => setActiveCategory(item.id)}
      >
        <Text
          style={[
            styles.textSmall,
            isActive ? styles.textBlazeOrange : styles.textShipGrayMedium,
          ]}
        >
          {item.text}
        </Text>
      </Pressable>
    );
  };

  const categoryItemSeparator = () => <View style={{ width: 8 }} />;

  const menus = [
    {
      id: 1,
      text: "Transfer",
      source: require("../assets/menu-transfer.png"),
    },
    {
      id: 2,
      text: "E-Wallet",
      source: require("../assets/menu-ewallet.png"),
    },
    {
      id: 3,
      text: "Pembayaran",
      source: require("../assets/menu-purchase.png"),
    },
    {
      id: 4,
      text: "Pembelian",
      source: require("../assets/menu-payment.png"),
    },
    {
      id: 5,
      text: "Investasi",
      source: require("../assets/menu-investment.png"),
    },
    {
      id: 6,
      text: "Lifestyle",
      source: require("../assets/menu-lifestyle.png"),
    },
    {
      id: 7,
      text: "Life Goals",
      source: require("../assets/menu-lifegoals.png"),
    },
    {
      id: 8,
      text: "Gaming",
      source: require("../assets/menu-gaming.png"),
    },
  ];

  const itemsPerRow = 4;
  const numRows = Math.ceil(menus.length / itemsPerRow);

  const MenuItem = ({ item }) => {
    return (
      <Pressable style={styles.menuItem}>
        <Image style={styles.menuImage} source={item.source} />
        <Text
          style={[
            styles.textMedium,
            styles.textCenter,
            styles.textShipGrayMedium,
            { width: 70 },
          ]}
        >
          {item.text}
        </Text>
      </Pressable>
    );
  };

  const promotions = [
    {
      id: 1,
      source: require("../assets/banner-promo-1.png"),
    },
    {
      id: 2,
      source: require("../assets/banner-promo-2.png"),
    },
  ];

  // Samsung Galaxy A55, width 384
  // console.log(Dimensions.get("screen").width);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ScrollView style={styles.mainContainer}>
        {/* App Bar */}
        <View style={styles.appBarContainer}>
          {/* Company Logo */}
          <Image
            style={styles.companyLogo}
            source={require("../assets/logo-bni.png")}
          />
          {/* Notification Button */}
          <Pressable style={{ marginLeft: "auto" }}>
            <MaterialIcons
              name="notifications-none"
              size={24}
              color={COLORS.BLAZE_ORANGE}
            />
            <Image
              style={styles.circleBadge}
              source={require("../assets/ic-circle-badge.png")}
            />
          </Pressable>
          {/* Help Button */}
          <Pressable style={[styles.helpButton, { marginLeft: 12 }]}>
            <MaterialIcons
              name="headset"
              size={18}
              color={COLORS.BLAZE_ORANGE}
            />
            <Text style={[styles.textSmall, styles.textBlazeOrange]}>
              Bantuan
            </Text>
          </Pressable>
        </View>
        {/* Profile */}
        <View style={styles.profileContainer}>
          {/* Avatar */}
          <Image
            style={styles.avatar}
            source={require("../assets/avatar.png")}
          />
          <View>
            <Text style={[styles.textLarge, styles.textShipGrayLight]}>
              Selamat Datang
            </Text>
            <Text style={[styles.textLarge, styles.textShipGrayDark]}>
              Mochammad Arya Salsabila
            </Text>
          </View>
        </View>
        {/* Account */}
        <View style={styles.accountContainer}>
          <ImageBackground
            style={{ padding: 12 }}
            imageStyle={{ borderRadius: 12 }}
            source={require("../assets/bg-account-card.png")}
          >
            {/* Account Type */}
            <View style={styles.accountType}>
              <Text style={[styles.textMedium, styles.textWhite]}>
                Taplus Pegawai BNI
              </Text>
              <Pressable>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={16}
                  color={COLORS.WHITE}
                />
              </Pressable>
            </View>
            {/* Account Balance */}
            <View style={styles.accountBalance}>
              <Text
                style={[
                  styles.textExtraLarge,
                  styles.fontBold,
                  styles.textWhite,
                ]}
              >
                Rp • • • • • • •
              </Text>
              <Pressable>
                <MaterialCommunityIcons
                  name="eye-off-outline"
                  size={18}
                  color={COLORS.WHITE}
                />
              </Pressable>
            </View>
            <View style={styles.accountNumberAndPoints}>
              {/* Account Number */}
              <View style={styles.accountNumber}>
                <Text style={[styles.textMedium, styles.textWhite]}>
                  1812345678
                </Text>
                <Pressable>
                  <MaterialIcons
                    name="content-copy"
                    size={16}
                    color={COLORS.WHITE}
                  />
                </Pressable>
              </View>
              {/* Points Button */}
              <Pressable style={styles.pointsButton}>
                <Image
                  style={[styles.pointsLogo, { marginRight: 4, marginLeft: 6 }]}
                  source={require("../assets/logo-points.png")}
                />
                <Text
                  style={[
                    styles.textSmall,
                    styles.textBlazeOrange,
                    { marginRight: 6 },
                  ]}
                >
                  3.100
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={16}
                  color={COLORS.BLAZE_ORANGE}
                />
              </Pressable>
            </View>
          </ImageBackground>
        </View>
        {/* List of Category */}
        <FlatList
          data={categories}
          renderItem={categoryItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={categoryItemSeparator}
          horizontal={true}
          contentContainerStyle={styles.categoryListContainer}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
        />
        {/* List of Menu */}
        <View style={styles.menuListContainer}>
          {[...Array(numRows)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.menuColumnContainer}>
              {menus
                .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                .map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
            </View>
          ))}
        </View>
        {/* Promotions & Information */}
        <View style={styles.promoInfoContainer}>
          <Text
            style={[
              styles.textLarge,
              styles.textShipGrayDark,
              { paddingHorizontal: 20 },
            ]}
          >
            Promo & Informasi
          </Text>
          <ImageSlider
            data={promotions}
            width={Dimensions.get("screen").width - 40}
            height={120}
            borderRadius={4}
            separatorWidth={20}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            indicator={true}
            indicatorActiveColor={COLORS.BLAZE_ORANGE}
            indicatorInActiveColor={COLORS.TUFT_BUSH}
            indicatorActiveWidth={40}
            indicatorInActiveWidth={14}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.TUFT_BUSH,
  },
  appBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  companyLogo: {
    height: 20,
    width: 69.05,
  },
  circleBadge: {
    position: "absolute",
    right: 0,
    top: 0,
    height: 8,
    width: 8,
  },
  helpButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    borderRadius: 16,
    backgroundColor: COLORS.SERENADE,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  textSmall: {
    fontSize: 11,
    lineHeight: 15.4,
  },
  textBlazeOrange: {
    color: COLORS.BLAZE_ORANGE,
  },
  profileContainer: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  avatar: {
    height: 40,
    width: 40,
  },
  textLarge: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  textShipGrayLight: {
    color: COLORS.SHIP_GRAY_MEDIUM,
  },
  textShipGrayDark: {
    color: COLORS.SHIP_GRAY_DARK,
  },
  accountContainer: {
    padding: 20,
  },
  accountType: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textMedium: {
    fontSize: 12,
    lineHeight: 16.8,
  },
  textWhite: {
    color: COLORS.WHITE,
  },
  accountBalance: {
    marginTop: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  textExtraLarge: {
    fontSize: 16,
    lineHeight: 22.4,
  },
  fontBold: {
    fontWeight: "bold",
  },
  accountNumberAndPoints: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  accountNumber: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  pointsButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    backgroundColor: COLORS.SERENADE,
    paddingHorizontal: 4,
    paddingVertical: 4.5,
  },
  pointsLogo: {
    height: 15,
    width: 32,
  },
  categoryListContainer: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoryItem: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  activeCategory: {
    borderColor: COLORS.TUFT_BUSH,
    backgroundColor: COLORS.TUFT_BUSH,
  },
  inActiveCategory: {
    borderColor: COLORS.SHIP_GRAY_LIGHT,
  },
  textShipGrayMedium: {
    color: COLORS.SHIP_GRAY_MEDIUM,
  },
  menuListContainer: {
    gap: 18,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 18,
  },
  menuColumnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuItem: {
    width: 50,
    alignItems: "center",
    gap: 8,
  },
  menuImage: {
    height: 50,
    width: 50,
  },
  textCenter: {
    textAlign: "center",
  },
  promoInfoContainer: {
    marginTop: 14,
    gap: 12,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 20,
  },
});

export default HomeScreen;
