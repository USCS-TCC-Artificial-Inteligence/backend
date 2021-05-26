import {
  bindProcessAndTagsResponse,
  getProcessAssociationsResponse,
  getSuggestionsResponse,
  getTagAssociationsResponse,
} from '../mocks/process_tags';

export const bindProcessAndTags = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(bindProcessAndTagsResponse);
};

export const getProcessAssociations = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(getProcessAssociationsResponse);
};

export const getTagAssociations = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(getTagAssociationsResponse);
};

export const getSuggestions = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(getSuggestionsResponse);
};
