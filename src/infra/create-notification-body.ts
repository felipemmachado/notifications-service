import { IsEnum, IsNotEmpty, IsUUID, Length } from 'class-validator';

/*
export enum Category {
  SOCIAL = 0,
  AUTH = 1,
  SALES = 2,
} */

export class CreateNotificationBody {
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  // @IsEnum(Category)
  @IsNotEmpty()
  category: string;
}
