import { BUY_CAKE } from "./cakeTypes";

// Buy Cake Action Creatore
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
