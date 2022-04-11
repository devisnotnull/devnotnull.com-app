export interface AppConfig {
  static: {
    path: string;
  };
}

export type Environment =
  | 'common'
  | 'local'
  | 'developmentLocal'
  | 'development'
  | 'stagingLocal'
  | 'staging'
  | 'productionLocal'
  | 'production';

type Config = {
  [key in Environment]: Partial<AppConfig>;
};

console.log(process.env)

const env = process.env.NODE_RUNTIME_ENV || 'development';
const bucket = process.env.CDN_BUCKET || 'development';
const offline = process.env.IS_OFFLINE || false;

const defaultConfig: Config = {
  common: {
    static: {
      path: 'http://localhost:9000/'
    }
  },
  local: {
    static: {
      path: 'http://localhost:9000/'
    }
  },
  development: {
    static: {
      path: `https://s3.eu-west-2.amazonaws.com/devnotnull-ui-${bucket}`
    }
  },
  developmentLocal: {},
  stagingLocal: {},
  staging: {
    static: {
      path: `https://s3.eu-west-2.amazonaws.com/devnotnull-ui-${bucket}`
    }
  },
  productionLocal: {},
  production: {
    static: {
      path: 'https://s3.eu-west-2.amazonaws.com/devnotnull-ui-production'
    }
  }
};

const envKey = offline ? `${env}Local` : env;

export const config: Partial<AppConfig> = {
  ...defaultConfig.common,
  ...defaultConfig[envKey]
};
