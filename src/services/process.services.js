import { getTotalPages, parseError, parseSuccess } from '../config/result_parsers';
import db from '../config/db';
import { TRACKING_STATUS } from '../config/constants';

export const getProcess = async (req, res) => {
  const body = req.body;
  if (!body.qty_per_page) {
    return parseError(res, 400, 'Propriedade [qty_per_page] não encontrada');
  }
  if (!body.page) {
    return parseError(res, 400, 'Propriedade [page] não encontrada');
  }
  if (!body.status) {
    return parseError(res, 400, 'Propriedade [status] não encontrada');
  }

  if (body.filter && body.process_names) {
    return parseError(
      res,
      400,
      'Escolha apenas uma das seguintes propriedades [filter, process_names]'
    );
  }

  try {
    let process;
    let totalPages;
    let query;
    let countQuery;

    if (body.filter) {
      countQuery =
        'SELECT count(*), REGEXP_MATCHES(name, ${filter}) FROM process WHERE status = ${status};';
      query =
        'SELECT *, REGEXP_MATCHES(name, ${filter}) FROM process LIMIT ${qty_per_page} OFFSET(${page} - 1) * ${qty_per_page};';
    } else if (body.process_names) {
      countQuery =
        'SELECT count(*) FROM process WHERE name LIKE ANY (${process_names}) AND status = ${status};';
      query =
        'SELECT * FROM process WHERE name LIKE ANY (${process_names}) AND status = ${status} LIMIT ${qty_per_page} OFFSET(${page} - 1) * ${qty_per_page};';
    } else {
      countQuery = 'SELECT count(*) FROM process WHERE status = ${status};';
      query =
        'SELECT * FROM process WHERE status = ${status} LIMIT ${qty_per_page} OFFSET(${page} - 1) * ${qty_per_page};';
    }

    await db.tx(async (task) => {
      totalPages = await getTotalPages(task.one(countQuery, body), body.qty_per_page);
      process = await db.manyOrNone(query, body);
    });

    return parseSuccess(res, {
      page: body.page,
      total_pages: totalPages,
      process,
    });
  } catch (e) {
    throw e;
  }
};

export const updateProcessTrackingStatus = async (req, res) => {
  const body = req.body;
  const params = req.params;

  if (!body.status) {
    return parseError(res, 400, 'Propriedade [status] não encontrada');
  }
  if (!params.process_name) {
    return parseError(res, 400, 'Parâmetro [process_name] não encontrado');
  }
  if (!TRACKING_STATUS.includes(body.status)) {
    return parseError(
      res,
      400,
      `Status inválido, utilize uma das opções: ${TRACKING_STATUS.toString()}`
    );
  }

  try {
    await db.tx(async (transaction) => {
      const selectedProcess = await transaction.oneOrNone(
        'SELECT * from process where name = ${process_name};',
        params
      );

      if (!selectedProcess) {
        return parseError(res, 400, `Processo não encontrado.`);
      }

      return transaction.batch([
        transaction.none('UPDATE process SET status = ${status} WHERE name = ${process_name};', {
          status: body.status,
          process_name: params.process_name,
        }),
      ]);
    });

    return parseSuccess(res, {
      message: 'Status do processo alterado com sucesso.',
    });
  } catch (e) {
    throw e;
  }
};
