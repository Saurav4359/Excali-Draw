import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SCERET } from "@repo/backend-common/config";
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

  const decode = jwt.verify(token, JWT_SCERET);
  if(!decode){ 
    return res.status(401).json({
        message : "Unauthorized"
    })
  }
//   req.id = decode.userId;
  next();
};
