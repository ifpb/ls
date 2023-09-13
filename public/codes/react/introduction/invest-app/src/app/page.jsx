import InvestmentCard from '@/components/InvestmentCard';
import Storage from '@/services/supabase';

async function getData() {
  return Storage.read('investments');
}

export default async function Home() {
  const investments = await getData();

  return (
    <>
      <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>

      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <InvestmentCard {...investment} key={investment.id} />
        ))}
      </div>
    </>
  );
}
