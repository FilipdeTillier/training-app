import { Button } from "@common/Button";
import { Input } from "@common/Input";
import { TNullable } from "@common/interfaces";
import { Select } from "@common/Select";
import { SELECT_OPTION } from "@common/Select/Select";
import { capitalize } from "@helpers/index";
import { paths } from "@helpers/paths";
import { request } from "@helpers/request";
import { useFormik } from "formik";
import { useMemo } from "react";
import Router from "next/router";

export enum BodyType {
  ECTOMORPH = "ECTOMORPH",
  ENDOMORPH = "ENDOMORPH",
  MESOMORPH = "MESOMORPH",
}

export enum TrainingGoal {
  MUSCLES_GROW = "MUSCLES_GROW",
  LOSING_WEIGHT = "LOSING_WEIGHT",
  PERFORMANCE_AND_FITNESS = "PERFORMANCE_AND_FITNESS",
}

type TCreateTrainingForm = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  height: number;
  weight: number;
  bodyType: TNullable<BodyType>;
  goal: TNullable<TrainingGoal>;
};

export const CreateTraining = () => {
  const initialValues: TCreateTrainingForm = useMemo(
    () => ({
      firstName: "fdasfa",
      lastName: "fdasfas",
      email: "fas@fad.pl",
      age: 24,
      weight: 125,
      height: 125,
      bodyType: BodyType.ECTOMORPH,
      goal: TrainingGoal.MUSCLES_GROW,
    }),
    []
  );

  const bodyTypeOptions: SELECT_OPTION[] = useMemo(
    () =>
      Object.values(BodyType).map((bodyType) => ({
        value: bodyType,
        label: capitalize(bodyType),
      })),
    []
  );

  const goalOptions: SELECT_OPTION[] = useMemo(
    () =>
      Object.values(TrainingGoal).map((goal) => ({
        value: goal,
        label: capitalize(goal.replaceAll("_", " ")),
      })),
    []
  );

  const { handleSubmit, values, errors, handleChange, setFieldValue } =
    useFormik({
      initialValues,
      onSubmit: async (values) => {
        try {
          const { data } = await request.post<string>(
            paths.generatePlan,
            values
          );
          Router.push(`/create-training/training-result/${data}`);
        } catch (err) {
          console.error(err);
        }
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />
        <Input
          id="age"
          name="age"
          type="number"
          className="mb-5"
          placeholder="Age"
          max={99}
          min={12}
          onChange={handleChange}
          value={values.age}
        />
        <Input
          id="weight"
          name="weight"
          type="number"
          className="mb-5"
          placeholder="Weight"
          min={20}
          onChange={handleChange}
          value={values.weight}
        />
        <Input
          id="height"
          name="height"
          type="number"
          className="mb-5"
          placeholder="Height"
          min={20}
          onChange={handleChange}
          value={values.height}
        />
        <Select
          options={bodyTypeOptions}
          id="body-type-select"
          onChange={(val) => setFieldValue("bodyType", val)}
          name="bodyType"
          className="mb-5"
          value={values.bodyType || ""}
        />
        <Select
          options={goalOptions}
          id="body-type-select"
          onChange={(val) => setFieldValue("goal", val)}
          name="goal"
          className="mb-5"
          value={values.goal || ""}
        />
        <Button type="submit">Generuj Plan</Button>
      </form>
    </div>
  );
};
