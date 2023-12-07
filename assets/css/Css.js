import { StyleSheet } from "react-native";




const css = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#74c156',
      alignItems: 'center',
      justifyContent: 'center',
    },

    container2: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#74c156',
      alignItems: 'center',
      justifyContent: 'center',
    },

    Button_Home: {
      marginRight: '50px'
    },

    darkbg: {
      backgroundColor: '#74c156'
    },

    login_img: {

    },

    login_msg:(text='none') =>({
      fontWeight: 'bold',
      color: 'red',
      fontSize: 22,
      marginTop: 10,
      marginBottom: 15,
      display: text

    }),

    login_form: {
      width: '80%'
    },

    login_input: {
      backgroundColor: '#d3d3d3',
      fontSize: 19,
      padding: 7,
      marginBottom: 15,
      borderRadius: 10,
    },

    login_btn: {
      backgroundColor: '#12a718',
      padding: 15,
      width: 100,
      borderRadius: 10,
      alignItems: 'center',
      // justifyContent: 'center',
      alignSelf: 'center'
    },

    login_btn_criar: {
      backgroundColor: '#add8ec',
      padding: 5,
      // width: 100,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 50,
      margin: 50
    }

  });

export{css};