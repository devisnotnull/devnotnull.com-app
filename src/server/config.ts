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

const env = process.env.NODE_RUNTIME_ENV || 'development';
const offline = process.env.IS_OFFLINE || false;

const defaultConfig: Config = {
  common: {
    static: {
      path: 'http://localhost:9000/'
    }
  },
  development: {
    static: {
      path: 'https://fandanzle-assets-development.s3.eu-west-2.amazonaws.com'
    }
  },
  local: {
    static: {
      path: 'http://localhost:9000/'
    }
  },
  developmentLocal: {},
  stagingLocal: {},
  staging: {
    static: {
      path: 'https://fandanzle-assets-staging.s3.eu-west-2.amazonaws.com'
    }
  },
  productionLocal: {},
  production: {
    static: {
      path: 'https://fandanzle-assets-production.s3.eu-west-2.amazonaws.com'
    }
  }
};

const envKey = offline ? `${env}Local` : env;

console.log("!!!!!!!!!!!!!!!")
console.log("!!!!!!!!!!!!!!!")
console.log("!!!!!!!!!!!!!!!")
console.log("!!!!!!!!!!!!!!!")
console.log("!!!!!!!!!!!!!!!")
console.log("env, ", env) 
console.log("envKey, ", envKey) 
console.log("offline, ", offline) 

console.log("!!!!!!!!!!!")
console.log("!!!!!!!!!!!")
console.log("!!!!!!!!!!!")
console.log(process.env)


export const config: Partial<AppConfig> = {
  ...defaultConfig.common,
  ...defaultConfig[envKey]
};
