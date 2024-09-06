import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './modules/expenses/expenses.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), 
            ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
