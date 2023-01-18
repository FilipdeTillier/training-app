import { NextPage } from "next/types";

import { CreateTraining } from "@features/CreateTraining";

const CreateTrainingPage: NextPage = () => {
  return (
    <div className="xl:w-2/4 m-auto md:w-3/4 xs:w-full">
      <h2 className="h2">Wypełnij formularz treningowy</h2>
      <CreateTraining />
    </div>
  );
};

export default CreateTrainingPage;
