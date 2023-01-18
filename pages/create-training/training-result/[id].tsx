import { GetServerSidePropsContext, NextPage } from "next/types";
import dynamic from "next/dynamic";
import { PdfGenerator } from "@features/PdfGenerator";
import { paths } from "@helpers/paths";
import { request } from "@helpers/request";
import { TTrainingPlan } from "@features/PdfGenerator/PdfGenerator";

interface TrainingResultPageProps {
  plan: TTrainingPlan;
}

const TrainingResultPage: NextPage<TrainingResultPageProps> = ({ plan }) => {
  const PdfPage = dynamic(() => import("@features/PdfGenerator/PdfGenerator"), {
    ssr: false,
  });
  return <PdfPage plan={plan} />;
};

export async function getServerSideProps({
  params = {},
}: GetServerSidePropsContext) {
  let plan = null;
  try {
    const { data } = await request.get<TTrainingPlan[]>(
      `${paths.plans}/${params.id}`
    );
    console.log(data);
    plan = data;
  } catch (err) {
    return {
      redirect: {
        destination: "/notFound",
        permanent: false,
      },
    };
  }

  return {
    props: {
      plan,
    },
  };
}

export default TrainingResultPage;
