import { DynamicModule } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enviroment } from 'src/common/enum/enviroment.enum';
import { ConnectionOptions } from 'tls';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const isDevelopmentEnv = config.get('NODE_ENV') !== Enviroment.production;
    const dbConfig = {
      type: 'postgres',
      host: config.get('DB_HOST'),
      port: config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_DB'),
      autoLoadEntities: true,
      synchronize: true,
      logging: config.get('DB_LOGGING'),
    } as ConnectionOptions;
    return dbConfig;
  },
});
