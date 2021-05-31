import { postTagResponse } from '../mocks/tags';
import { getTotalPages, parseError, parseSuccess } from '../config/result_parsers';
import db from '../config/db';

export const addTag = async (req, res) => {
  const body = req.body;
  if (!body.description) {
    return parseError(res, 400, 'Propriedade [description] não encontrada');
  }
  if (!body.name) {
    return parseError(res, 400, 'Propriedade [name] não encontrada');
  }

  try {
    await db.none('INSERT INTO tags(name, description) VALUES (${name}, ${description});', body);
    return res.status(200).json(postTagResponse);
  } catch (e) {
    throw e;
  }
};

export const getTags = async (req, res) => {
  const body = req.body;
  if (!body.qty_per_page) {
    return parseError(res, 400, 'Propriedade [qty_per_page] não encontrada');
  }
  if (!body.page) {
    return parseError(res, 400, 'Propriedade [page] não encontrada');
  }

  if (body.filter && body.tag_names) {
    return parseError(
      res,
      400,
      'Escolha apenas uma das seguintes propriedades [filter, tag_names]'
    );
  }

  try {
    let tags;
    let totalPages;
    let query;
    let countQuery;

    if (body.filter) {
      countQuery = 'SELECT count(*), REGEXP_MATCHES(name, ${filter}) FROM tags GROUP BY name;';
      query =
        'SELECT *, REGEXP_MATCHES(name, ${filter}) FROM tags LIMIT ${qty_per_page} OFFSET(${page} - 1) * ${qty_per_page};';
    } else if (body.tag_names) {
      countQuery = 'SELECT count(*) FROM tags WHERE name LIKE ANY (${tag_names});';
      query =
        'SELECT * FROM tags WHERE name LIKE ANY (${tag_names}) LIMIT ${qty_per_page} OFFSET(${page} - 1) * ${qty_per_page};';
    } else {
      countQuery = 'SELECT count(*) FROM tags;';
      query = 'SELECT * FROM tags LIMIT ${qty_per_page} OFFSET(${page} - 1) * ${qty_per_page};';
    }

    await db.tx(async (task) => {
      totalPages = await getTotalPages(task.one(countQuery, body), body.qty_per_page);
      tags = await db.manyOrNone(query, body);
    });

    return parseSuccess(res, {
      page: body.page,
      total_pages: totalPages,
      tags,
    });
  } catch (e) {
    throw e;
  }
};
