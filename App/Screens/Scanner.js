import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import Colors from "../../assets/Shared/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setMessage(`Item deducted from inventory: ${data}`);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setMessage("");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          style={styles.camera}
        />
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
      </View>


      <LinearGradient
        colors={["#003163", "#13072e"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.scanAgainButtonContainer}
      >
        
        <TouchableOpacity onPress={() => console.log("okay na boss")}>
  <Text style={styles.scanAgainButtonText}>Add to Inventory</Text>
</TouchableOpacity>
      </LinearGradient>

      <LinearGradient
        colors={["#003163", "#13072e"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.scanAgainButtonContainer}
      >
        <TouchableOpacity onPress={handleScanAgain}>
          <Text style={styles.scanAgainButtonText}>Scan Again</Text>
        </TouchableOpacity>

      </LinearGradient>

      


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8, // Make it square
    overflow: "hidden",
    borderRadius: 20,
  },
  camera: {
    flex: 1,
    aspectRatio: 1, // Maintain aspect ratio
  },
  messageContainer: {
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  messageText: {
    fontSize: 16,
    color: Colors.black,
  },
  scanAgainButtonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: Colors.cobaltblue,
    borderRadius: 20,
    marginTop: 20,
  },
  scanAgainButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
