import React, { ReactElement } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import { mockPlan } from "./mockPlan";

type TExercise = {
  name: string;
  images: string[];
  description: string;
  additionalInfo: string;
};

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    backgroundColor: "#E4E4E4",
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",
  },
  section: {
    display: "flex",
    margin: 10,
    padding: 10,
  },
  innerSection: {
    display: "flex",
    margin: 10,
    padding: 10,
  },
  exercise: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    description: {
      fontSize: "14px",
    },
    additionalInfo: {
      fontSize: "16px",
    },
    imageStyles: {
      width: "50%",
      height: "auto",
    },
  },
  imagesWrapper: {
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
});

const pdfStyles = {
  width: "100%",
  height: "1200px",
};

const Exercise = ({
  name,
  description,
  additionalInfo,
  images,
  index,
}: TExercise & { index: number }) => (
  <View style={styles.exercise}>
    <Text>
      Ćwiczenie {index + 1}: <Text>{name}</Text>
    </Text>
    <Text style={styles.exercise.description}>{description}</Text>
    <View style={styles.imagesWrapper}>
      {images.map((image, index) => (
        <Image
          key={image + index}
          style={styles.exercise.imageStyles}
          src={image}
        />
      ))}
    </View>
    {additionalInfo && (
      <Text style={styles.exercise.additionalInfo}>
        Dodatkowe info:{" "}
        <Text style={styles.exercise.description}>{additionalInfo}</Text>
      </Text>
    )}
  </View>
);

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Plan treningowy Filip de Tillier</Text>
        <Text>Plan treningowy na 23.02.2023 - 07.02.2023</Text>
      </View>
      <View style={styles.section}>
        <Text style={{ fontFamily: "Roboto" }}>
          Waga:{" "}
          <Text style={{ fontSize: "16px", fontWeight: "bold" }}>90kg</Text>
        </Text>
        <Text style={{ fontFamily: "Roboto" }}>
          Wzrost:{" "}
          <Text style={{ fontSize: "16px", fontWeight: "bold" }}>186cm</Text>
        </Text>

        <Text>
          Budowa ciała:{" "}
          <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
            Endomorfik
          </Text>
        </Text>
        <Text>
          Cel:{" "}
          <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
            Redukcja tkanki tłuszczowej
          </Text>
        </Text>
      </View>
      <View style={styles.innerSection}>
        <Text>Dzień 1</Text>
        <Text>Rozgrzewka</Text>
        {mockPlan.warkUp.slice(0, 3).map((warmUp, index) => (
          <Exercise key={warmUp._id} {...warmUp} index={index} />
        ))}
        {mockPlan.exercises.map((exercise, index) => (
          <Exercise key={exercise._id} {...exercise} index={index} />
        ))}
      </View>
    </Page>
  </Document>
);

export const PdfGenerator = (): ReactElement => {
  return (
    <div>
      Generated
      <PDFViewer style={pdfStyles}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};
