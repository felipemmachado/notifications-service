import { Controller, Post } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { Body } from '@nestjs/common/decorators';
import { CreateNotificationDTO } from '../dtos/create-notification-dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('notifications')
@ApiTags('Notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    console.log(body);
  }
}
