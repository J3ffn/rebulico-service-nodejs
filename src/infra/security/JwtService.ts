import jwt from 'jsonwebtoken';

export class JwtService {
  private secret: string;

  constructor() {
    this.secret = process.env.JWT_SECRET || "Xz#8h^Lr2!mPf@e1Qv$BnTz7UwA6Kd#Y";
  }

  generateToken(payload: any) {
    return jwt.sign(payload, this.secret, { expiresIn: "7d" });
  }

  verifyToken(token: string) {
    return jwt.verify(token, this.secret);
  }
}
