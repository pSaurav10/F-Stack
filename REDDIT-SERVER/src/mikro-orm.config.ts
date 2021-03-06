import { password, username, __prod__ } from "./constants";
import { Post } from "./entities/Posts";
import { MikroORM } from "@mikro-orm/core";
import path from 'path';

export default {
  migrations:{
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "lireddit",
  type: "postgresql",
  user: username,
  password: password,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];


