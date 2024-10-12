import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // commenting, this is to show use of error.js file
  // throw new Error("something went wrong");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * from meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
