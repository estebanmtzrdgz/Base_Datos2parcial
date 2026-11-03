import { Request, Response } from "express";
import { productoRepository } from "../repository/ProductoRepository.js";

export const getProducto = async ( req:Request, resp:Response ) => {
  const producto = await productoRepository.findById(1);
  return resp.json({ 
    message: "Producto encontrado",
    status: 200,
    data: producto
  });
};

export const getProductos = async ( req:Request, resp:Response ) => {
  const productos = await productoRepository.findAll;  
    return resp.json({ 
    message: "Producto encontrado",
    status: 200,
    data: productos,
  });
}

export const createProducto = async ( req:Request, resp:Response ) => {
  const { nombre, precio, stock, categoriaId } = req.body;

  const producto = await productoRepository.create(
    { nombre, precio, stock, categoriaId }
  );

  return resp.json({
    message: "Producto creado",
    status: 201,
    data: producto,
  })
}