import { slqConfig } from '../db.js';
import sql from 'mssql';

export const getEmployees = async (req, res) => {
  try {
    await sql.connect(slqConfig);
    const result = await sql.query(`SELECT * FROM Employees`);
    res.json(result.recordset);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener los empleados',
      error,
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    await sql.connect(slqConfig);
    const result = await sql.query(
      `SELECT * FROM Employees WHERE id = ${req.params.id}`
    );
    res.json(result.recordset[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al obtener el empleado',
      error,
    });
  }
};

export const createEmployee = async (req, res) => {
  try {
    await sql.connect(slqConfig);
    const result = await sql.query(
      `INSERT INTO Employees VALUES ('${req.body.name}', '${req.body.salary}')`
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al crear el empleado',
      error,
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    await sql.connect(slqConfig);
    const result = await sql.query(
      `UPDATE Employees SET name = '${req.body.name}', salary = '${req.body.salary}' WHERE id = ${req.params.id}`
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al actualizar el empleado',
      error,
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    await sql.connect(slqConfig);
    const result = await sql.query(
      `DELETE FROM Employees WHERE id = ${req.params.id}`
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: 'Error al eliminar el empleado',
      error,
    });
  }
};
