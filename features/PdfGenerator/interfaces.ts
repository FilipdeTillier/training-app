import {
  BodyType,
  TrainingGoal,
} from "@features/CreateTraining/CreateTraining";

export type TExercise = {
  _id: string;
  name: string;
  images: string[];
  description: string;
  additionalInfo: string;
};

export type TTrainingPlan = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  weight: number;
  height: number;
  bodyType: BodyType;
  goal: TrainingGoal;
  exercises: TExercise[];
  warmUp: TExercise[];
};
