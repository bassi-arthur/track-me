import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/routes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MapsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RoutesModule,
    PrismaModule,
  ],
})
export class AppModule {}
