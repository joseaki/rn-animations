import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: 360,
    height: 400,
  },
  box: {
    marginHorizontal: 16,
    position: "absolute",
    height: 90,
    width: "100%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 6,
  },
  background1: {
    backgroundColor: "#f6d365"
  },
  background2: {
    backgroundColor: "#f093fb"
  },
  background3: {
    backgroundColor: "#5ee7df"
  },
  background4: {
    backgroundColor: "#c3cfe2"
  },
  text: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 24,
    paddingLeft: 32
  }
});

export default styles;
