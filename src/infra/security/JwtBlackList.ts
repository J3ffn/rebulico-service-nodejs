class JwtBlackList {
  private revoked = new Set<string>();

  public revoke(token: string) {
    this.revoked.add(token);
  }

  public isRevoked(token: string) {
    return this.revoked.has(token);
  }
}

export const jwtBlackList = new JwtBlackList();
