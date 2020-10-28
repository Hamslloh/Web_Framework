import { Client } from "https://deno.land/x/postgres/mod.ts";
import { QueryConfig, QueryResult } from "https://deno.land/x/postgres/query.ts";

const client = new Client({
  hostname : "localhost",
  port : 5432,
  user: "postgres",
  password: "hamham04",
  database:"db_blog"
});

export async function select(qry : QueryConfig | QueryConfig[]):Promise<any[]>{
  let tables : any = [];
  try{
      await client.connect();
      let hasil : QueryResult | QueryResult[];
      if(Array.isArray(qry)) {
          hasil = await client.multiQuery(qry);
          hasil.forEach((obj) => {
              tables.push(obj.rowsOfObjects() );
          });
      } else {
          hasil = await client.query(qry);
          tables = hasil.rowsOfObjects(); 
      }
      await client.end();
  }catch(error){
      console.log(error);
  }
  return tables;
}