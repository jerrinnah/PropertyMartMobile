import { StyleSheet } from 'react-native';

// Wallet Home Styles

export const Styles = StyleSheet.create({
  walletCont: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  walletBal: {
    height: 207,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },

  buttonsCont: {
    height: 50,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
  },

  btn: {
    height: 50,
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 15,
    left: 10,
  },
  bottom: {
    // alignItems:'center'
  },
  recieptCont: {
    height: '100%',
    width: '90%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    alignItems: 'center',
    top: 90,
    padding: 20,
  },
  reciept: {
    height: 81,
    width: 128,
    alignSelf: 'center',
  },
  smalltext: {
    textAlign: 'center',
    fontSize: 12,
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modalBox: {
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    top:650,
  },

  modalHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 100,
  },

  cardsCont: {
    height: 150,
    width: '100%',
    marginTop: 10,
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    // justifyContent: 'space-between',
    marginBottom: 30,
    marginLeft: 25,
    paddingTop: 20,
  },

  icon: {
    paddingRight: 15,
  },

  //   FUND WALLET STYLES

  fundWallet: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  amountCont: {
    height: 250,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  amount: {
    height: 100,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountValue: {
    fontSize: 49,
    fontFamily: 'BasierSemiBold',
    // lineHeight: 45,
    letterSpacing: 0.24,
    alignSelf: 'center',
  },
  method: {
    height: 100,
    width: '90%',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },

  select: {
    height: 56,
    width: 376,
    borderRadius: 10,
    borderWidth: 1,
    outlineColor: 'black',
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },










  //   ADD DEBIT CARD STYLES

  cardCont: {
    height: '100%',
  },

  frmLaout: {
    minHeight: 280,
    justifyContent: 'center',
    // backgroundColor:'green'
  },
  cardDt: {
    height: 442,
    width: 396,
    alignSelf: 'center',
    // paddingTop: 10,
    padding: 10,
    alignItems: 'center',
  },

  cardInfo: {
    paddingTop: 10,
  },

  bg: {
    flex:1,
    width: '100%',
    backgroundColor: 'black',
    opacity:0.7
  },

  inputCont: {
    height: 44,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 8,
    padding: 10,
  },

  name: {
    paddingBottom: 5,
    paddingTop: 5,
  },

  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },

  inputCt: {
    height: 45,
    width: '48%',
  },

  inputDate: {
    height: 44,
    width: '100%',
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 8,
    padding: 10,
  },

  imgContainer: {
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    // backgroundColor:'red'
  },

  img: {
    // width:100,
    // height:80,
  },

  // infoCont: {
  //   marginRight: 40,
  // marginLeft: 40,
  // marginTop: 10,
  // paddingTop: 20,
  // paddingBottom: 20,
  // backgroundColor: '#68a0cf',
  // borderRadius: 10,
  // borderWidth: 1,
  // // borderColor: 'blue',
  // },


  full: {
    top: 600,
    height: 355,
    backgroundColor: 'white',
    borderRadius: 20,
   padding:10,
    
  },

  textContent: {
    height: 90,
    width: '100%',
    borderRadius:20,
  },

  modalTitle: {
    paddingTop: 20,
    paddingLeft: 10,
    margin:10,
  },

  textPaystack: {
    height:150,
    width: '100%',
    // backgroundColor: 'red',
    padding:10,
  },

  insufBtn: {
    borderWidth: 1,
    borderColor: 'red',
    width: 133,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight:110,
    
  },

  balanceAlert: {
    flexDirection: 'row',
    justifyContent:'space-between'
  }





  // BANK TRANSFER

  
});
