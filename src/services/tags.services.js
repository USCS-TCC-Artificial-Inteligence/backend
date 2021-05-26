import { getTagResponse, postTagResponse } from '../mocks/tags';

export const addTag = (req, res) => {
  // Add Tag Code Here

  return res.status(200).json(postTagResponse);
};

export const getTags = async (req, res) => {
  return res.status(200).json(getTagResponse);
};
