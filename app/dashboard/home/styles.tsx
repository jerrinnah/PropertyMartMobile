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
    // borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
        alignItems:'center'
    },

    amountCont: {
        height: 250,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'
    },
    amount: {
        height: 190,
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    method: {
        height: 100,
        width: '90%',
        backgroundColor:'red'
    }

  
});
