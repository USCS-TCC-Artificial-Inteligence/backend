import {
  getProcessAssociationsResponse,
  getSuggestionsResponse,
  getTagAssociationsResponse,
} from '../mocks/process_tags';
import { parseError, parseSuccess } from '../config/result_parsers';
import db from '../config/db';

export const bindProcessAndTags = async (req, res) => {
  const body = req.body;

  if (!body.process_name) {
    return parseError(res, 400, 'Propriedade [process_name] não encontrada');
  }
  if (!body.tag_name) {
    return parseError(res, 400, 'Propriedade [tag_name] não encontrada');
  }

  try {
    await db.tx(async (transaction) => {
      const selectedProcess = await transaction.oneOrNone(
        'SELECT * from process where name = ${process_name};',
        body
      );
      if (!selectedProcess) {
        return parseError(res, 400, `Processo não encontrado.`);
      }

      const selectedTag = await transaction.oneOrNone(
        'SELECT * from tags where name = ${tag_name};',
        body
      );
      if (!selectedTag) {
        return parseError(res, 400, `Tag não encontrada.`);
      }

      return transaction.batch([
        transaction.none(
          'INSERT INTO process_tags(process_name, tag_name) VALUES (${process_name}, ${tag_name}) ON CONFLICT DO NOTHING;',
          body
        ),
      ]);
    });

    return parseSuccess(res, {
      message: 'Associação realizada com sucesso.',
    });
  } catch (e) {
    throw e;
  }
};

export const deleteProcessAssociation = async (req, res) => {
  const body = req.body;

  if (!body.process_name) {
    return parseError(res, 400, 'Propriedade [process_name] não encontrada');
  }
  if (!body.tag_name) {
    return parseError(res, 400, 'Propriedade [tag_name] não encontrada');
  }

  try {
    await db.tx(async (transaction) => {
      const selectedAssociation = await transaction.oneOrNone(
        'SELECT * FROM process_tags WHERE process_name = ${process_name} AND tag_name = ${tag_name};',
        body
      );
      if (!selectedAssociation) {
        return parseError(res, 400, `Associação não encontrada.`);
      }

      return transaction.batch([
        transaction.none(
          'DELETE FROM process_tags WHERE process_name = ${process_name} AND tag_name = ${tag_name};',
          body
        ),
      ]);
    });

    return parseSuccess(res, {
      message: 'Associação removida com sucesso.',
    });
  } catch (e) {
    throw e;
  }
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
