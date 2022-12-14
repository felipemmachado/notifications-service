import { IsNotEmpty, IsUUID, Length } from 'class-validator';

/*
export enum Category {
  SOCIAL = 0,
  AUTH = 1,
  SALES = 2,
} */

export class CreateNotificationDTO {
  @IsUUID()
  @IsNotEmpty()
  public recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  public content: string;

  // @IsEnum(Category)
  @IsNotEmpty()
  public category: string;
}
