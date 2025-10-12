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

  // Métodos de Validação e Estado:
  isExpired(): boolean {
    return new Date() >= new Date(this.expires_at);
  } // Verifica se o cupom já expirou
  isActive(): boolean {
    return this.active && !this.isExpired();
  }// Verifica se está ativo e pode ser usado
  isLimitReached(): boolean {
    if (this.max_uses === undefined) return false;
    return this.uses_count >= this.max_uses;
  } // Verifica se já atingiu o limite
  canUse(): boolean {
    return this.active && !this.isExpired() && !this.isLimitReached();
  } // Para return = true [Ativo, não expirado e não atingiu o limite]

  // Metódos de Aplicação
  use(): boolean {
    if (!this.canUse()) {
      this.active = false;
      console.log("O cupom não pode ser utilizado.")
      return false;
    }; // Verifica se pode usar, se não desativa
    this.uses_count++; // Se puder ser usado, incrementa +1 uso
    if (this.isLimitReached()) {
      this.active = false;
      console.log("O cupom atingiu o limite de usos, desativando cupom...");
    } else { // Caso atinja o limite, desativa o cupom
      console.log(`Cupom utilizado com sucesso. (${this.uses_count} uso${this.uses_count > 1 ? "s" : ""})`)
    } // Se não, aplica com sucesso.
    return true;
  }
  applyDiscount(total: number): number {
    if (this.type === "fixed") {
      const discounted = total - this.value;
      return Math.max(discounted, 0); // Impede o retorno negativo
    } else if (this.type === "percent") {
      const discounted = total * (1 - this.value / 100);
      return Math.max(discounted, 0) // Impede o retorno negativo
    }
    return total;
  }

  // Metodos para usos eventuais
  getRemainingUses(): number {
    if (this.max_uses === undefined) return -1 //Caso o limite não seja definido.
    return this.max_uses - this.uses_count;
  }
  private deactivationReason?: string; // Variavel para registrar o motivo do desativamento manual
  desactivate(reason?: string): void {
    this.active = false;
    this.deactivationReason = reason;
  }
  getDesactivateReason(): string | undefined {
    return this.deactivationReason;
  }
  toString(): string {
    return `Coupon ${this.code} (${this.type}: ${this.value})`;
  } // Metodo para Debug

}