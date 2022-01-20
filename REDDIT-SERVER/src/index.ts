import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
  const orm = MikroORM.init({
    dbName: "",
    type: "postgresql",
    debug: !__prod__,
  });
};
