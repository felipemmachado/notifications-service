import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Body } from '@nestjs/common/decorators';
import { CreateNotificationBody } from './create-notification-body';
import { ApiTags } from '@nestjs/swagger';

@Controller('notifications')
@ApiTags('Notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);

    /*
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma notificação de amizade',
        category: 'social',
        recipientId: randomUUID(),
      },
    }); */
  }
}
