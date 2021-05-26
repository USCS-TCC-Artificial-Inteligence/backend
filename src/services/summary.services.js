import {
  getGeneralSummaryResponse,
  getProcessSummaryResponse,
  getTagsSummaryResponse,
} from '../mocks/summary';

export const getGeneralSummary = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(getGeneralSummaryResponse);
};

export const getTagsSummary = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(getTagsSummaryResponse);
};

export const getProcessSummary = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(getProcessSummaryResponse);
};
