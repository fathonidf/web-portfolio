export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}