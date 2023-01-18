import React from "react";
import { PDFViewer, Font } from "@react-pdf/renderer";
import { useIntl } from "react-intl";
import { TTrainingPlan } from "./interfaces";
import { MyDocument } from "./MyDocument";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: "bold",
    },
  ],
});

const pdfStyles = {
  width: "100%",
  height: "1200px",
};

type PdfGeneratorProps = {
  plan: TTrainingPlan;
};

export const PdfGenerator = ({ plan }: PdfGeneratorProps) => {
  const { formatMessage } = useIntl();
  return (
    <div>
      <PDFViewer style={pdfStyles}>
        <MyDocument plan={plan} formatMessage={formatMessage} />
      </PDFViewer>
    </div>
  );
};

export default PdfGenerator;
