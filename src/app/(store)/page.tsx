export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main>
      <div>Hello world!</div>
    </main>
  );
}
