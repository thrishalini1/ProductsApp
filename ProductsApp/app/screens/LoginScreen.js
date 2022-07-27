// import React from 'react';
// import { Image, StyleSheet } from 'react-native';

// import Screen from '../components/Screen'

// function LoginScreen(props) {
//     return (
//         <Screen>
//          <Image 
//             style={styles.logo}
//             source={require("../assets/logo-red.png")}/>   
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     }    
// })

// export default LoginScreen;


// 2nd
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';

// import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';

// function LoginScreen(props) {
//         return (
//         <Screen>
//          <Image 
//             style={styles.logo}
//             source={require("../assets/logo-red.png")}/> 

//         <AppTextInput
//             autoCapitalize="none" // First letter will not be capitalized
//             autoCorrect={false} // we dont want spelling correction
//             icon="email"
//             keyboardType="email-address"
//             placeholder="Email"
//             textContentType="emailAddress" // it only works on iOS. It will autofill from the key-chain.
//         /> 
//         <AppTextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="lock"
//           placeholder="Password"
//           secureTextEntry
//           textContentType="password"
//         />
//          <AppButton title="Login" />
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     }    
// })

// export default LoginScreen;

// 3rd
// import React, {useState} from 'react';
// import { Image, StyleSheet } from 'react-native';

// import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';

// function LoginScreen(props) {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//     return (
//         <Screen style={styles.container}>
//          <Image 
//             style={styles.logo}
//             source={require("../assets/logo-red.png")}/> 

//         <AppTextInput
//             autoCapitalize="none" // First letter will not be capitalized
//             autoCorrect={false} // we dont want spelling correction
//             icon="email"
//             keyboardType="email-address"
//             onChangeText={text => setEmail(text)}
//             placeholder="Email"
//             textContentType="emailAddress" // it only works on iOS. It will autofill from the key-chain.
//         /> 
//         <AppTextInput
//           autoCapitalize="none"
//           autoCorrect={false}
//           icon="lock"
//           onChangeText={text => setPassword(text)}
//           placeholder="Password"
//           secureTextEntry
//           textContentType="password"
//         />
//          <AppButton title="Login" onPress={() => console.log(email, password)} />
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     }    
// })

// export default LoginScreen;


// 4th
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';

// import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';

// function LoginScreen(props) {
//     return (
//         <Screen style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require("../assets/logo-red.png")} />
//             <Formik
//                 initialValues={{ email: '', password: '' }}
//                 onSubmit={values => console.log(values)}
//             >
//                 {({ handleChange, handleSubmit }) => (
//                     <>
//                         <AppTextInput
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="email"
//                             keyboardType="email-address"
//                             onChangeText={handleChange("email")}
//                             // onChangeText={text => setEmail(text)}
//                             placeholder="Email"
//                             textContentType="emailAddress" // it only works on iOS. It will autofill from the key-chain.
//                         />
//                         <AppTextInput
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="lock"
//                             onChangeText={handleChange("password")}
//                             //onChangeText={text => setPassword(text)}
//                             placeholder="Password"
//                             secureTextEntry
//                             textContentType="password"
//                         />
//                         <AppButton
//                             title="Login"
//                             //onPress={() => console.log(email, password)}
//                             onPress={handleSubmit}
//                         />
//                     </>
//                 )}
//             </Formik>
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     }
// })

// export default LoginScreen;


// 5th
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import Screen from '../components/Screen';
// import AppText from '../components/AppText';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen(props) {
//     return (
//         <Screen style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require("../assets/logo-red.png")} />
//             <Formik
//                 initialValues={{ email: '', password: '' }}
//                 onSubmit={values => console.log(values)}
//                 validationSchema={validationSchema}
//             >
//                 {({ handleChange, handleSubmit, errors }) => (
//                     <>
//                         <AppTextInput
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="email"
//                             keyboardType="email-address"
//                             onChangeText={handleChange("email")}
//                             placeholder="Email"
//                             textContentType="emailAddress"
//                         />
//                         <AppText style={{ color: 'red' }}>
//                             {errors.email}
//                         </AppText>
//                         <AppTextInput
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="lock"
//                             onChangeText={handleChange("password")}
//                             placeholder="Password"
//                             secureTextEntry
//                             textContentType="password"
//                         />
//                         <AppText style={{ color: 'red' }}>
//                             {errors.password}
//                         </AppText>
//                         <AppButton
//                             title="Login"
//                             onPress={handleSubmit}
//                         />
//                     </>
//                 )}
//             </Formik>
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     },
// });

// export default LoginScreen;

// 6th
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';
// import ErrorMessage from '../components/ErrorMessage';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen(props) {
//     return (
//         <Screen style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require("../assets/logo-red.png")} />
//             <Formik
//                 initialValues={{ email: '', password: '' }}
//                 onSubmit={values => console.log(values)}
//                 validationSchema={validationSchema}
//             >
//                 {({ handleChange, handleSubmit, errors }) => (
//                     <>
//                         <AppTextInput
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="email"
//                             keyboardType="email-address"
//                             onChangeText={handleChange("email")}
//                             placeholder="Email"
//                             textContentType="emailAddress"
//                         />
//                         <ErrorMessage error={errors.email} />
//                         <AppTextInput
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="lock"
//                             onChangeText={handleChange("password")}
//                             placeholder="Password"
//                             secureTextEntry
//                             textContentType="password"
//                         />
//                         <ErrorMessage error={errors.password} />
//                         <AppButton
//                             title="Login"
//                             onPress={handleSubmit}
//                         />
//                     </>
//                 )}
//             </Formik>
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     },
// });

// export default LoginScreen;


// 7th
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';
// import ErrorMessage from '../components/ErrorMessage';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen(props) {
//     return (
//         <Screen style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require("../assets/logo-red.png")} />
//             <Formik
//                 initialValues={{ email: '', password: '' }}
//                 onSubmit={values => console.log(values)}
//                 validationSchema={validationSchema}
//             >
//                 {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
//                     <>
//                         <AppTextInput
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="email"
//                             keyboardType="email-address"
//                             onBlur={() => setFieldTouched("email")}
//                             onChangeText={handleChange("email")}
//                             placeholder="Email"
//                             textContentType="emailAddress"
//                         />
//                         {/* <ErrorMessage error={errors.email} /> */}
//                         <ErrorMessage error={errors.email} visible={touched.email} />
//                         <AppTextInput
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="lock"
//                             onBlur={() => setFieldTouched("password")}
//                             onChangeText={handleChange("password")}
//                             placeholder="Password"
//                             secureTextEntry
//                             textContentType="password"
//                         />
//                         {/* <ErrorMessage error={errors.password} /> */}
//                         <ErrorMessage error={errors.password} visible={touched.password} />
//                         <AppButton
//                             title="Login"
//                             onPress={handleSubmit}
//                         />
//                     </>
//                 )}
//             </Formik>
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     },
// });

// export default LoginScreen;

// 8th
// import React, { useState } from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import Screen from '../components/Screen';
// import AppText from '../components/AppText';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';
// import ErrorMessage from '../components/ErrorMessage';
// import AppFormField from '../components/AppFormField';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen(props) {
//     return (
//         <Screen style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require("../assets/logo-red.png")} />
//             <Formik
//                 initialValues={{ email: '', password: '' }}
//                 onSubmit={values => console.log(values)}
//                 validationSchema={validationSchema}
//             >
//                 {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
//                     <>
//                         {/* <AppTextInput */}
//                         <AppFormField
//                             autoCapitalize="none" // First letter will not be capitalized
//                             autoCorrect={false} // we dont want corrent spelling
//                             icon="email"
//                             keyboardType="email-address"
//                             // onBlur={() => setFieldTouched("email")}
//                             // onChangeText={handleChange("email")}
//                             // onChangeText={text => setEmail(text)}
//                             name="email"
//                             placeholder="Email"
//                             textContentType="emailAddress" // it only works on iOS. It will autofill from the key-chain.
//                         />
//                         {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
//                         {/* {touched.email && <ErrorMessage error={errors.email} />} */}
//                         {/* <ErrorMessage error={errors.email} /> */}
//                         {/* <AppText style={{ color: 'red'}}> {errors.email} </AppText> */}
//                         {/* <AppTextInput */}
//                         <AppFormField
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="lock"
//                             name="password"
//                             //   onBlur={() => setFieldTouched("password")}
//                             //   onChangeText={handleChange("password")}
//                             //onChangeText={text => setPassword(text)}
//                             placeholder="Password"
//                             secureTextEntry
//                             textContentType="password"
//                         />
//                         {/* <AppText style={{ color: 'red'}}> {errors.password} </AppText> */}
//                         {/* <ErrorMessage error={errors.password} /> */}
//                         {/* <ErrorMessage error={errors.password} visible={touched.password} /> */}
//                         <AppButton
//                             title="Login"
//                             //onPress={() => console.log(email, password)}
//                             onPress={handleSubmit}
//                         />
//                     </>
//                 )}
//             </Formik>
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     },
// });

// export default LoginScreen;


// 9th
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import Screen from '../components/Screen';
// import SubmitButton from '../components/SubmitButton';
// import AppFormField from '../components/AppFormField';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen(props) {
//     return (
//         <Screen style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require("../assets/logo-red.png")} />
//             <Formik
//                 initialValues={{ email: '', password: '' }}
//                 onSubmit={values => console.log(values)}
//                 validationSchema={validationSchema}
//             >
//                 {(
//                     // { handleChange, handleSubmit, errors, setFieldTouched, touched }
//                     ) => (
//                     <>
//                         <AppFormField
//                             autoCapitalize="none" 
//                             autoCorrect={false} 
//                             icon="email"
//                             keyboardType="email-address"
//                             name="email"
//                             placeholder="Email"
//                             textContentType="emailAddress" 
//                         />
//                         <AppFormField
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="lock"
//                             name="password"
//                             placeholder="Password"
//                             secureTextEntry
//                             textContentType="password"
//                         />
//                         {/* <AppButton
//                             title="Login"
//                             onPress={handleSubmit}
//                         /> */}
//                         <SubmitButton title="Login" />
//                     </>
//                 )}
//             </Formik>
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {

//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     },
// });

// export default LoginScreen;


// 10th
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// import Screen from '../components/Screen';
// import SubmitButton from '../components/forms/SubmitButton';
// import AppFormField from '../components/forms/AppFormField';
// import AppForm from '../components/forms/AppForm';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().required().email().label("Email"),
//     password: Yup.string().required().min(4).label("Password"),
// });

// function LoginScreen(props) {
//     return (
//         <Screen style={styles.container}>
//             <Image
//                 style={styles.logo}
//                 source={require("../assets/logo-red.png")} />
//             {/* <Formik */}
//             <AppForm
//                 initialValues={{ email: '', password: '' }}
//                 onSubmit={values => console.log(values)}
//                 validationSchema={validationSchema}
//             >
//                 {/* {() => (
//                     <> */}
//                         <AppFormField
//                             autoCapitalize="none" 
//                             autoCorrect={false} 
//                             icon="email"
//                             keyboardType="email-address"
//                             name="email"
//                             placeholder="Email"
//                             textContentType="emailAddress" 
//                         />
//                         <AppFormField
//                             autoCapitalize="none"
//                             autoCorrect={false}
//                             icon="lock"
//                             name="password"
//                             placeholder="Password"
//                             secureTextEntry
//                             textContentType="password"
//                         />
//                         <SubmitButton title="Login" />
//                     {/* </>
//                 )}
//             </Formik> */}
//             </AppForm>
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//     },

//     logo: {

//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginTop: 50,
//         marginBottom: 20,
//     },
// });

// export default LoginScreen;


// 11th
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
// import SubmitButton from '../components/forms/SubmitButton';
// import AppFormField from '../components/forms/AppFormField';
// import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    logo: {

        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;

