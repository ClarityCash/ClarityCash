import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './modules/expenses/expenses.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { IncomesModule } from './modules/incomes/incomes.module';
import { PaymentMethodsModule } from './modules/payment-methods/payment-methods.module';
import { AuthModule } from './modules/auth/auth.module';


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
            CategoriesModule,
            IncomesModule,
            PaymentMethodsModule,
            AuthModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
