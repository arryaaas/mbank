import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../utils/constants";

const LoginScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const menus = [
    {
      id: 1,
      source: require("../assets/menu-ewallet.png"),
      text: "E-Wallet",
    },
    {
      id: 2,
      source: require("../assets/menu-qris.png"),
      text: "QRIS",
    },
    {
      id: 3,
      source: require("../assets/menu-other.png"),
      text: "Lainnya",
    },
  ];

  const itemsPerRow = 3;
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <Modal transparent={true} visible={modalVisible}>
        {/* Modal Backdrop */}
        <View style={styles.modalBackdrop}>
          {/* Modal View */}
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text
                style={[
                  styles.textLarge,
                  styles.fontBold,
                  styles.textShipGrayDark,
                ]}
              >
                Selamat Datang Kembali
              </Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <MaterialIcons
                  name="close"
                  size={18}
                  color={COLORS.SHIP_GRAY_MEDIUM}
                />
              </Pressable>
            </View>
            {/* Modal Body */}
            <View style={styles.modalBody}>
              <TextInput style={styles.textField} placeholder="User ID" />
              <TextInput style={styles.textField} placeholder="MPIN" />
              {/* Checkbox */}
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Pressable onPress={() => setChecked(!checked)}>
                  <MaterialIcons
                    name={!checked ? "check-box-outline-blank" : "check-box"}
                    size={18}
                    color={
                      !checked ? COLORS.SHIP_GRAY_MEDIUM : COLORS.BLAZE_ORANGE
                    }
                  />
                </Pressable>
                <Text style={[styles.textMedium, styles.textShipGrayMedium]}>
                  Simpan User ID
                </Text>
              </View>
            </View>
            <View style={styles.modalFooter}>
              <View style={styles.forgotCredentialsContainer}>
                <Pressable>
                  <Text
                    style={[
                      styles.textMedium,
                      styles.textShipGrayMedium,
                      styles.underline,
                    ]}
                  >
                    Lupa User ID?
                  </Text>
                </Pressable>
                <Pressable>
                  <Text
                    style={[
                      styles.textMedium,
                      styles.textShipGrayMedium,
                      styles.underline,
                    ]}
                  >
                    Lupa MPIN?
                  </Text>
                </Pressable>
              </View>
              {/* Login Button */}
              <Pressable
                style={styles.loginButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.replace("Home");
                }}
              >
                <Text
                  style={[
                    styles.textMedium,
                    styles.loginText,
                    styles.textWhite,
                  ]}
                >
                  Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <ImageBackground
        style={styles.mainContainer}
        source={require("../assets/bg-wave.png")}
      >
        {/* Company Information */}
        <View style={styles.companyContainer}>
          <Image
            style={styles.companyLogo}
            source={require("../assets/logo-bni.png")}
          />
          <Text
            style={[styles.textMedium, styles.fontBold, styles.textBahamaBlue]}
          >
            Melayani Negeri Kebanggaan Bangsa
          </Text>
        </View>
        {/* Login Button with Icon */}
        <Pressable
          style={[styles.loginButton, { marginTop: 36, alignSelf: "stretch" }]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={[styles.textMedium, styles.loginText, styles.textWhite]}>
            Login
          </Text>
          <Image
            style={styles.faceIdIcon}
            source={require("../assets/ic-face-id.png")}
          />
        </Pressable>
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
        {/* Help Button */}
        <Pressable style={[styles.helpButton, { marginTop: "auto" }]}>
          <MaterialIcons name="headset" size={18} color={COLORS.BLAZE_ORANGE} />
          <Text style={[styles.textSmall, styles.textBlazeOrange]}>
            Bantuan
          </Text>
        </Pressable>
        {/* Application Version */}
        <Text
          style={[
            styles.textExtraSmall,
            styles.textShipGrayMedium,
            { marginTop: 24 },
          ]}
        >
          v5.11.1
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.MINE_SHAFT,
  },
  modalView: {
    marginHorizontal: 20,
    gap: 24,
    alignSelf: "stretch",
    borderRadius: 8,
    backgroundColor: COLORS.WHITE,
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textLarge: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  fontBold: {
    fontWeight: "bold",
  },
  textShipGrayDark: {
    color: COLORS.SHIP_GRAY_DARK,
  },
  modalBody: {
    gap: 12,
  },
  textField: {
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.SHIP_GRAY_LIGHT,
    paddingLeft: 12,
    paddingRight: 10,
  },
  textMedium: {
    fontSize: 12,
    lineHeight: 16.8,
  },
  textShipGrayMedium: {
    color: COLORS.SHIP_GRAY_MEDIUM,
  },
  modalFooter: {
    gap: 12,
  },
  forgotCredentialsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  underline: {
    textDecorationLine: "underline",
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 50,
    backgroundColor: COLORS.BLAZE_ORANGE,
    paddingVertical: 10,
  },
  loginText: {
    lineHeight: 18,
    letterSpacing: 0.46,
  },
  textWhite: {
    color: COLORS.WHITE,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 40,
    paddingBottom: 64,
    paddingTop: 160,
  },
  companyContainer: {
    alignItems: "center",
    gap: 16,
  },
  companyLogo: {
    height: 36,
    width: 124.29,
  },
  textBahamaBlue: {
    color: COLORS.BAHAMA_BLUE,
  },
  faceIdIcon: {
    height: 18,
    width: 18,
  },
  menuListContainer: {
    marginTop: 24,
    alignSelf: "stretch",
    paddingHorizontal: 26.5,
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
  textExtraSmall: {
    fontSize: 10,
    lineHeight: 14,
  },
});
