import { processGetResponse, updateProcessTrackingStatusResponse } from '../mocks/process';

export const getProcess = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(processGetResponse);
};

export const updateProcessTrackingStatus = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(updateProcessTrackingStatusResponse);
};
