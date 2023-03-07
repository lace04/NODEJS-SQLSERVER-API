import { slqConfig } from '../db.js';
import sql from 'mssql';

export const ping = async (req, res) => {
  try {
    await sql.connect(slqConfig);
    const result = await sql.query(`SELECT 1+1 AS Result`);
    res.json(result.recordset[0]);
  } catch (error) {
    console.log(error);
  }
};
