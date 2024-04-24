// import React, { useCallback, useMemo, useState } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
// import DateTimePicker from 'react-native-modal-datetime-picker';

// const TimePicker = ({ time, onTimeChange }) => {
//   const [showPicker, setShowPicker] = useState(false);
//   const [selectedTime, setSelectedTime] = useState(time);

//   const handlePress = () => {
//     setShowPicker(true);
//   };
//   const handleTimePicker = (event, selectedTime) => {
//     if (event.type === 'set') {
//       handleTimeChange(selectedTime);
//       setSelectedTime(selectedTime.toLocaleTimeString());
//     }
//     setShowTimePicker(false);
//   };

//   const handleConfirm = useCallback((event, newTime) => {
//     if (event.type === 'set') {
//       setSelectedTime(newTime);
//       onTimeChange(newTime);
//     }
//     setShowPicker(false);
//   }, [onTimeChange]);

//   const handleCancel = useCallback(() => {
//     setShowPicker(false);
//   }, []);

//   const styles = useMemo(() => StyleSheet.create({
//     container: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       paddingHorizontal: 10,
//       paddingVertical: 5,
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderRadius: 5,
//     ...Platform.select({
//         ios: {
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 2,
//           },
//           shadowOpacity: 0.25,
//           shadowRadius: 3.84,
//           elevation: 5,
//         },
//         android: {
//           elevation: 5,
//         },
//       }),
//     },
//     button: {
//       flex: 1,
//       alignItems: 'center',
//     },
//     text: {
//       fontSize: 16,
//       color: '#333',
//     },
//   }), []);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={handlePress}>
//         <Text style={styles.text}>{selectedTime.toLocaleTimeString()}</Text>
//       </TouchableOpacity>
//       {showPicker && (
//         <DateTimePicker
//           is24Hour={true}
//           mode="time"
//           display="default"
//           value={selectedTime}
//           onChange={handleConfirm}
//           onCancel={handleCancel}
//         />
//       )}
//     </View>
//   );
// };

// export default React.memo(TimePicker);