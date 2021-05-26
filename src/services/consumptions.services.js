import { getConsumptionsResponse } from '../mocks/consumptions';

export const getConsumptions = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(getConsumptionsResponse);
};
