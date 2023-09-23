// PDFCertificate.js

import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import styles from './pdfStyles'; // Import your styles module

const customStyles = StyleSheet.create({
  certificateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  leftSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  rightSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCenterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

const PDFCertificate = ({ carDetails, insuranceComp, imageURL }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* Background image */}
        <Image style={styles.image} src={imageURL} />

        {/* Certificate container */}
        <View style={customStyles.certificateContainer}>
          {/* Left section */}
          <View style={customStyles.leftSection}>
            <Text>{insuranceComp}</Text>
            <Text>Car No: {carDetails[carDetails.length - 1].carRegNo}</Text>
            <Text>Make: {carDetails[carDetails.length - 1].make}</Text>
            <Text>Color: {carDetails[carDetails.length - 1].color}</Text>
            <Text>Inception Date: {carDetails[carDetails.length - 1].createdAt}</Text>
            <Text>Expiry Date: {carDetails[carDetails.length - 1].createdAt}</Text>
            <Text>Sticker number: {stickerNumber()}</Text>
          </View>

          {/* Right section */}
          <View style={customStyles.rightSection}>
            <Image style={styles.image} src={imageURL} />
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFCertificate;
