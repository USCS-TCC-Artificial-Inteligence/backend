export const parseError = (res, status, message) => {
  return res.status(status).json({
    success: false,
    data: { message },
  });
};

export const parseSuccess = (res, data) => {
  return res.status(200).json({
    success: true,
    data,
  });
};

export const getTotalPages = async (query, qtyPerPage) => {
  const totalRegisters = await query;
  return Math.ceil(Number(totalRegisters.count) / Number(qtyPerPage));
};
