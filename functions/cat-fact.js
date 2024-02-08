export async function onRequest(context) {
  const catFact = await fetch('https://catfact.ninja/fact').then((res) => res.json()).catch(err => console.error(err))
  return new Response(catFact?.fact);
}