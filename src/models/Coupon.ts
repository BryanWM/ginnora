interface CouponProps {
  code: string;
  type: "percent" | "fixed";
  value: number;
  expires_at: Date;
  active: boolean;
  uses_count?: number; // Caso queiramos colocar algum contador de usos para aplicar um limite
  max_uses?: number; // Limite de usos
}

export class Coupon {
  code: string;
  type: "percent" | "fixed";
  value: number;
  expires_at: Date;
  active: boolean;
  uses_count: number;
  max_uses?: number;

  constructor({ code, type, value, expires_at, active, uses_count = 0, max_uses = 10 }: CouponProps) {
    if (value < 0) throw new Error("O valor informado é inválido");
    if (uses_count >= max_uses) throw new Error("Limite de usos atingido.")

    this.code = code;
    this.type = type;
    this.value = value;
    this.expires_at = expires_at;
    this.active = active;
    this.uses_count = uses_count;
    this.max_uses = max_uses;

  }

}