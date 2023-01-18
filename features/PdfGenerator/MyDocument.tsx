import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { BasicInfo } from "./BasicInfo";
import { TFormatMessage } from "@common/interfaces";
import { TrainingDay } from "./TrainingDay";
import { TTrainingPlan } from "./interfaces";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
});

type TMyDocumentProps = {
  plan: TTrainingPlan;
  formatMessage: TFormatMessage;
};

export const MyDocument = ({ plan, formatMessage }: TMyDocumentProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <BasicInfo plan={plan} formatMessage={formatMessage} />
        <TrainingDay plan={plan} formatMessage={formatMessage} />
      </Page>
    </Document>
  );
};
