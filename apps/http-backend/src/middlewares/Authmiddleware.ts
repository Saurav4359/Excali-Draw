import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const key = "jfkndjnvx";
export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(404).json({
      message: "Token not found",
    });
  }

  const decode = jwt.verify(token, key);
  if(!decode){ 
    return res.status(401).json({
        message : "Unauthorized"
    })
  }
//   req.id = decode.userId;
  next();
};
