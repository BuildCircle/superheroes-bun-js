import getCharacters from "./getCharacters";

function startBunServer() {
  Bun.serve({
    port: 8080,
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === "/battle") {
        const characters = getCharacters()

        const hero = characters.items.find(e => e.name === heroName)
        const villain = characters.items.find(e => e.name === villainName)

        const winner = hero.score >= villain.score ? hero : villain

        return new Response(winner);
      }
      return new Response("404");
    },
  });
}

startBunServer()

export default startBunServer;