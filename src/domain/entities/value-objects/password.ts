import * as bcrypt from 'bcrypt';

export class Password {
  private readonly pass: string;

  get value() {
    return this.pass;
  }

  constructor(password: string) {
    const isValid = this.validateMinLength(password);

    if (!isValid) throw new Error('Password must be more than 5 characters.');

    this.pass = password;
  }

  async generateHash(): Promise<string> {
    return await bcrypt.hash(this.pass, 10);
  }

  async compare(hash: string): Promise<boolean> {
    return await bcrypt.compare(this.pass, hash);
  }

  private validateMinLength(password: string): boolean {
    return password.length <= 5;
  }
}
