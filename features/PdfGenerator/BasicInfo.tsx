import React, { PropsWithChildren, ReactElement } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import { TFormatMessage } from "@common/interfaces";
import { commonStyles } from "./commonStyles";
import { TTrainingPlan } from "./interfaces";

const styles = StyleSheet.create({
  leftSection: {
    width: "60%",
  },
  rightSection: {
    width: "40%",
  },
  informationText: {
    fontSize: "12px",
  },
  informationWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

const TextComponent = ({
  children,
  additionalStyles,
}: PropsWithChildren & {
  additionalStyles?: { [key: string]: string };
}): ReactElement => (
  <Text style={{ ...styles.informationText, ...additionalStyles }}>
    {children}
  </Text>
);

type TBasicInfoProps = {
  plan: TTrainingPlan;
  formatMessage: TFormatMessage;
};

export const BasicInfo = ({
  plan: { firstName, lastName, weight, bodyType, height, goal },
  formatMessage,
}: TBasicInfoProps) => {
  return (
    <View style={{}}>
      <Text style={commonStyles.mainHeader}>Plan treningowy</Text>
      <Text style={commonStyles.mediumHeader}>Podstawowe informacje:</Text>
      <View style={styles.informationWrapper}>
        <View style={styles.leftSection}>
          <TextComponent>
            <TextComponent additionalStyles={commonStyles.bold}>
              {formatMessage({
                id: "basicInformation.userName",
                defaultMessage: "First name last name",
              })}
            </TextComponent>
            : {`${firstName} ${lastName}`}
          </TextComponent>
          <TextComponent>
            <TextComponent additionalStyles={commonStyles.bold}>
              {formatMessage({
                id: "basicInformation.trainingPeriod",
                defaultMessage: "Time period",
              })}
            </TextComponent>
            : 23.02.2023 - 07.02.2023
          </TextComponent>
          <TextComponent>
            <TextComponent additionalStyles={commonStyles.bold}>
              {formatMessage({
                id: "basicInformation.weight",
                defaultMessage: "Weight",
              })}
            </TextComponent>
            : <TextComponent>{weight}</TextComponent>
          </TextComponent>
        </View>
        <View style={styles.rightSection}>
          <TextComponent>
            <TextComponent additionalStyles={commonStyles.bold}>
              {formatMessage({
                id: "basicInformation.height",
                defaultMessage: "Height",
              })}
            </TextComponent>
            : <TextComponent>{height}</TextComponent>
          </TextComponent>

          <TextComponent>
            <TextComponent additionalStyles={commonStyles.bold}>
              {formatMessage({
                id: "basicInformation.bodyType",
                defaultMessage: "Body type",
              })}
            </TextComponent>
            :{" "}
            <TextComponent>
              {formatMessage({ id: bodyType.toLowerCase() })}
            </TextComponent>
          </TextComponent>
          <TextComponent>
            <TextComponent additionalStyles={commonStyles.bold}>
              {formatMessage({
                id: "basicInformation.goal",
                defaultMessage: "Goal",
              })}
            </TextComponent>
            :{" "}
            <TextComponent>
              {formatMessage({ id: goal.toLowerCase() })}
            </TextComponent>
          </TextComponent>
        </View>
      </View>
    </View>
  );
};
