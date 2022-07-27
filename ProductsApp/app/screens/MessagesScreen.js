// import React from 'react';
// import { FlatList } from 'react-native';

// import ListItem from '../components/ListItem'

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} />
//             }/>
//     );
// }

// export default MessagesScreen;



// // 2ND
// import React from 'react';
// import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

// import ListItem from '../components/ListItem'

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <SafeAreaView style={styles.screen}>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} />
//             }/>
//     </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     screen: {
//         paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//     }
// })

// export default MessagesScreen;


// // 3rd
// import React from 'react';
// import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

// import  Constants  from 'expo-constants';
// // console.log(Constants)

// import ListItem from '../components/ListItem'

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <SafeAreaView style={styles.screen}>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} />
//             }/>
//     </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     screen: {
//         paddingTop: Constants.statusBarHeight
//     }
// })

// export default MessagesScreen;


// // 4th
// import React from 'react';
// import { FlatList, StyleSheet } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <Screen>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} />
//             }/>
//     </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;


// // 5th
// import React from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <Screen>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} />
//             }
//             ItemSeparatorComponent={() => <View 
//                 style={{width: "100%", height: 1, 
//                 backgroundColor: '#000'}}></View>
//             }     
//      />
//     </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;


// // 6th
// import React from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'
// import ListItemSeparator from '../components/ListItemSeparator';

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <Screen>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} />
//             }
//             ItemSeparatorComponent={ListItemSeparator}     
//      />
//     </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;


// // 6th
// import React from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'
// import ListItemSeparator from '../components/ListItemSeparator';

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <Screen>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} 
//                 onPress={() => console.log("Message selected", item)} />
//             }
//             ItemSeparatorComponent={ListItemSeparator}     
//      />
//     </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;


// // 7th
// import React from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'
// import ListItemSeparator from '../components/ListItemSeparator';

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <Screen>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} 
//                 onPress={() => console.log("Message selected", item)} 
//                 renderRightActions={() => (
//                     <View
//                         style={{
//                             backgroundColor: "red",
//                             width: 70,
//                         }}
//                     ></View>
//                 )}
//                 />
//             }
//             ItemSeparatorComponent={ListItemSeparator}     
//      />
//     </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;




// // 8th
// import React from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'
// import ListItemSeparator from '../components/ListItemSeparator';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <Screen>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} 
//                 onPress={() => console.log("Message selected", item)} 
//                 renderRightActions={ListItemDeleteAction}
//                 />
//             }
//             ItemSeparatorComponent={ListItemSeparator}     
//      />
//     </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;

// // 9th
// import React from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'
// import ListItemSeparator from '../components/ListItemSeparator';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';

// const messages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     return (
//     <Screen>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} 
//                 onPress={() => console.log("Message selected", item)} 
//                 renderRightActions={() => 
//                     (<ListItemDeleteAction onPress={() => console.log(item)}
//                 /> )
//                 }
//                 ItemSeparatorComponent={ListItemSeparator}     
//             />
//             }
//         />
//     </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;

// // 10th
// import React, { useState } from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'
// import ListItemSeparator from '../components/ListItemSeparator';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';

// const initialMessages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {

//     const[messages, setMessages] = useState(initialMessages);

//     const handleDelete = message => {
//         setMessages(messages.filter(m => m.id !== message.id));
//     }

//     return (
//     <Screen>
//       <FlatList
//         data={messages} 
//         keyExtractor={message => message.id.toString()}
//         renderItem={({item}) => 
//             <ListItem
//                 title={item.title}
//                 subTitle={item.description}
//                 image={item.image} 
//                 onPress={() => console.log("Message selected", item)} 
//                 renderRightActions={() => 
//                     (<ListItemDeleteAction onPress={() => handleDelete(item) }
//                 /> )
//                 }
//                 ItemSeparatorComponent={ListItemSeparator}     
//             />
//             }
//         />
//     </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;


// 11th
// import React, { useState } from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'
// import ListItemSeparator from '../components/ListItemSeparator';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';

// const initialMessages = [
//     {
//         id: 1,
//         title: 'T1',
//         description: 'D1',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     const [messages, setMessages] = useState(initialMessages);
//     const [refreshing, setRefreshing] = useState(false);

//     const handleDelete = message => {
//         setMessages(messages.filter(m => m.id !== message.id));
//     }

//     return (
//         <Screen>
//             <FlatList
//                 data={messages}
//                 keyExtractor={message => message.id.toString()}
//                 renderItem={({ item }) =>
//                     <ListItem
//                         title={item.title}
//                         subTitle={item.description}
//                         image={item.image}
//                         onPress={() => console.log("Message selected", item)}
//                         renderRightActions={() =>
//                         (<ListItemDeleteAction onPress={() => handleDelete(item)} />)
//                         }
//                         ItemSeparatorComponent={ListItemSeparator}
//                         refreshing={refreshing}
//                         // refreshing={this.state.refreshing}
//                         onRefresh={() => {
//                             this.setState({refreshing: true})
//                             setMessages([
//                                 {
//                                     id: 2,
//                                     title: 'T2',
//                                     description: 'D2',
//                                     image: require('../assets/picture.jpg')
//                                 },
//                             ]);
//                         }
//                         }
//                     />
//                 }
//             />
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;


// 12th
// import React, { useState } from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem'
// import ListItemSeparator from '../components/ListItemSeparator';
// import ListItemDeleteAction from '../components/ListItemDeleteAction';

// const initialMessages = [
//     {
//         id: 1,
//         title: 'Lorem Ipsum is simply dummy text of the printing and \
//                 typesetting industry. Lorem Ipsum has been the industrys \
//                 standard dummy text ever since the 1500s, when an unknown \
//                 printer took a galley of type and scrambled it to make a \
//                 type specimen book. It has survived not only five centuries,\
//                 but also the leap into electronic typesetting, remaining \
//                 essentially unchanged. It was popularised in the 1960s with \
//                 the release of Letraset sheets containing Lorem Ipsum \
//                 passages, and more recently with desktop publishing \
//                 software like Aldus PageMaker including versions of \
//                 Lorem Ipsum.',
//         description: 'Lorem Ipsum is simply dummy text of the printing and \
//         typesetting industry. Lorem Ipsum has been the industrys \
//         standard dummy text ever since the 1500s, when an unknown \
//         printer took a galley of type and scrambled it to make a \
//         type specimen book. It has survived not only five centuries,\
//         but also the leap into electronic typesetting, remaining \
//         essentially unchanged. It was popularised in the 1960s with \
//         the release of Letraset sheets containing Lorem Ipsum \
//         passages, and more recently with desktop publishing \
//         software like Aldus PageMaker including versions of \
//         Lorem Ipsum.',
//         image: require('../assets/picture.jpg')
//     },
//     {
//         id: 2,
//         title: 'T2',
//         description: 'D2',
//         image: require('../assets/picture.jpg')
//     }
// ]

// function MessagesScreen(props) {
//     const [messages, setMessages] = useState(initialMessages);
//     const [refreshing, setRefreshing] = useState(false);

//     const handleDelete = message => {
//         setMessages(messages.filter(m => m.id !== message.id));
//     }

//     return (
//         <Screen>
//             <FlatList
//                 data={messages}
//                 keyExtractor={message => message.id.toString()}
//                 renderItem={({ item }) =>
//                     <ListItem
//                         title={item.title}
//                         subTitle={item.description}
//                         image={item.image}
//                         onPress={() => console.log("Message selected", item)}
//                         renderRightActions={() =>
//                         (<ListItemDeleteAction onPress={() => handleDelete(item)} />)
//                         }
//                         ItemSeparatorComponent={ListItemSeparator}
//                         refreshing={refreshing}
//                         // refreshing={this.state.refreshing}
//                         onRefresh={() => {
//                             this.setState({refreshing: true})
//                             setMessages([
//                                 {
//                                     id: 2,
//                                     title: 'T2',
//                                     description: 'D2',
//                                     image: require('../assets/picture.jpg')
//                                 },
//                             ]);
//                         }
//                         }
//                     />
//                 }
//             />
//         </Screen>
//     );
// }

// const styles = StyleSheet.create({

// })

// export default MessagesScreen;


// 13th
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: "Dwaraknath",
    description: "Hey! Is this item still available?",
    image: require("../assets/picture.jpg"),
  },
  {
    id: 2,
    title: "Benchmark",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/picture.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/picture.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;





