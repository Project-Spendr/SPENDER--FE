import { post, get } from './request';

export const goalCreate = (title, goalAmount, currentAmount, privateState, completed, dateCreated) => {
  return post(`/api/v1/goal`, ({ 
    "title": title,
     "goalAmount": goalAmount,
      "currentAmount": currentAmount,
       "privatestate": privateState,
        "completed": completed,
         "dateCreated": dateCreated
         }));
};

export const findGoals = (goals) => {
  return get(`/api/v1/goal`, ({
    "goals": goals
  }));
};

export const findUserGoals = (userGoals) => {
  return get(`/api/v1/userGoal`, ({
    "goals": userGoals
  }));
};