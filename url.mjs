import { URL } from "url";

// const tes = new URL("https://www.youtube.com/results?search_query=master+duel");
const tes = new URL("https://www.youtube.com/results?search_query=master+duel");
console.info(tes.toString());
console.info(tes.href);
console.info(tes.protocol);
console.info(tes.hostname);
console.info(tes.host);
console.info(tes.searchParams);
console.info(tes.pathname);


tes.searchParams.append("search_query", "master duel");

console.info(tes.href);

console.info(tes.href, tes.pathname, tes.searchParams.URLSearchParams);