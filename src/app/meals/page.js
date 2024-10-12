import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meals-grid";
import { getMeals } from "../../../http/meals";
import { Suspense } from "react";
import LoadingPage from "./loading";

const MealData = async () => {
  const meals = await getMeals();
  return (
    <>
      <MealGrid meals={meals} />;
    </>
  );
};
function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite receipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingPage />}>
          <MealData />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
