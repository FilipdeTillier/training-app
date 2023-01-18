import { TFormatMessage } from "@common/interfaces";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { ReactElement } from "react";
import { Exercise } from "./Exercise";
import { TTrainingPlan } from "./interfaces";

type TTrainingDayProps = {
  plan: TTrainingPlan;
  formatMessage: TFormatMessage;
};

const styles = StyleSheet.create({
  header: {
    fontSize: "16px",
  },
  innerSection: {
    display: "flex",
  },
});

export const TrainingDay = ({
  plan,
  formatMessage,
}: TTrainingDayProps): ReactElement => {
  return (
    <View style={styles.innerSection}>
      <Text style={styles.header}>Plan treningowy:</Text>
      <Text>Trenign 1</Text>
      <Text>Rozgrzewka</Text>
      {plan.warmUp.slice(0, 3).map((warmUp, index) => (
        <Exercise key={warmUp._id} {...warmUp} index={index} />
      ))}
      {plan.exercises.map((exercise, index) => (
        <Exercise key={exercise._id} {...exercise} index={index} />
      ))}
    </View>
  );
};
