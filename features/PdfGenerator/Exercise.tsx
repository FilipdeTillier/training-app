import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

type TExercise = {
  _id: string;
  name: string;
  images: string[];
  description: string;
  additionalInfo: string;
};

const styles = StyleSheet.create({
  exerciseWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 180,
  },
  exerciseTextWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: 400,
    marginRight: 20,
  },
  exerciseImagesWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 600,
  },
  exercise: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    description: {
      fontSize: "10px",
    },
    additionalInfo: {
      fontSize: "10px",
    },
    imageStyles: {
      width: 150,
      height: "auto",
      marginRight: 10,
    },
  },
  imagesWrapper: {},
});

export const Exercise = ({
  name,
  description,
  additionalInfo,
  images,
  index,
}: TExercise & { index: number }) => (
  <View style={styles.exerciseWrapper}>
    <View style={styles.exerciseTextWrapper}>
      <Text style={styles.exercise.description}>{description}</Text>
      {additionalInfo && (
        <Text style={styles.exercise.additionalInfo}>
          Dzień info:{" "}
          <Text style={styles.exercise.description}>{additionalInfo}</Text>
        </Text>
      )}
    </View>
    <View style={styles.exerciseImagesWrapper}>
      {images.slice(0, 2).map((image, index) => (
        <Image
          key={image + index}
          style={styles.exercise.imageStyles}
          src={image}
        />
      ))}
    </View>
  </View>
);
