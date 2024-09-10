import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './modules/expenses/expenses.module';

@Module({
  imports: [
            ConfigModule.forRoot({
              isGlobal: true,
            }),
            MongooseModule.forRootAsync({
              imports: [ConfigModule],
              useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGO_URI'),
              }),
              inject: [ConfigService],
            }),
            ExpensesModule,
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
