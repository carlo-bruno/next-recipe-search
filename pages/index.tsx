import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components/dist/tailwind";
import Accordion from "../components/Accordion";
import { Category } from "../types/types";
import { categoryData } from "../utils/categoryData";

const Home: NextPage = () => {
  const categoriesEl = categoryData.map((category: Category) => {
    return <Accordion key={category.id} category={category} />;
  });

  return (
    <>
      <Head>
        <title>Recipe Search | Home</title>
      </Head>

      {/* About the app section */}
      <section className="my-4">
        <h2>Home Page</h2>
        <p className="px-12 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptate repudiandae blanditiis similique laborum nisi
          ea itaque expedita error possimus! Cum facilis dolorem tenetur, earum
          vero dolores officia ut, doloribus error nostrum perspiciatis natus
          corrupti non, qui maxime odit. Itaque, unde deserunt mollitia iure
          incidunt vel sed voluptatem iusto aperiam, veniam tenetur quae.
          Voluptate, et. Maxime perferendis veniam sit natus suscipit nisi
          assumenda quas pariatur velit ut sequi minima dolorum voluptatum
          necessitatibus asperiores excepturi iure rem reiciendis dolor, esse
          architecto!
        </p>
      </section>

      <hr />

      {/* Display Accordion for each Category */}
      {categoriesEl}
    </>
  );
};

export default Home;
