import { getXataClient } from "../../../xata";
import type { APIRoute } from "astro";

const client = getXataClient();

const usernames = ["Sarah", "Chris", "Yan", "Elian"];

export const GET: APIRoute = ({ params, request }) => {
  const id = params.id;

  // console.log({ params, request });

  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/",
    })
  );
};
