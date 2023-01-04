import { Button } from "@common/Button";
import { Input } from "@common/Input";
import { TNullable } from "@common/interfaces";
import { useFormik } from "formik";
import Link from "next/link";
import { useMemo } from "react";

enum BodyType {
  ECTOMORPH = "ECTOMORPH",
  ENDOMORPH = "ENDOMORPH",
  MESOMORPH = "MESOMORPH",
}

enum TrainingGoal {
  MUSCLES_GROW = "MUSCLES_GROW",
  LOSING_WEIGHT = "LOSING_WEIGHT",
  PERFORMANCE_AND_FITNESS = "PERFORMANCE_AND_FITNESS",
}

type TCreateTrainingForm = {
  firstName: string;
  lastName: string;
  email: string;
  age: TNullable<number>;
  height: string;
  bodyType: TNullable<BodyType>;
  goal: TNullable<TrainingGoal>;
};

export const CreateTraining = () => {
  const initialValues: TCreateTrainingForm = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      age: null,
      height: "",
      bodyType: null,
      goal: null,
    }),
    []
  );

  const { handleSubmit, values, errors, handleChange } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      CreateTraining
      <form
        onSubmit={handleSubmit}
        className="xl:w-2/4 m-auto md:w-3/4 xs:w-full"
      >
        <Input
          id="firstName"
          name="firstName"
          className="mb-5"
          placeholder="First name"
          onChange={handleChange}
          value={values.firstName}
        />
        <Input
          id="lastName"
          name="lastName"
          className="mb-5"
          placeholder="Last name"
          onChange={handleChange}
          value={values.lastName}
        />
        <Input
          id="email"
          name="email"
          type="email"
          className="mb-5"
          onChange={handleChange}
          value={values.email}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
