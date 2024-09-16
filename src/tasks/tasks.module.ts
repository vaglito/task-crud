import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrimsaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [PrimsaModule],
})
export class TasksModule {}
