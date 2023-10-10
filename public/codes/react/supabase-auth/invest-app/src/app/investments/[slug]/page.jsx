import { formatCurrency, formatDate } from '@/lib/format';
import Storage from '@/services/storage';

export async function generateStaticParams() {
  const investments = await Storage.read('investments');

  return investments.map((investment) => ({
    slug: investment.id,
  }));
}

async function getData(slug) {
  const investment = await Storage.read('investments', { id: slug });

  return investment;
}

export default async function Investment({ params: { slug } }) {
  const [{ name, value, origin, category, interest, created_at }] =
    await getData(slug);

  return (
    <>
      <h1 className="text-center text-2xl my-12 font-bold">{name}</h1>
      <div className="w-64 m-auto">
        <p className="text-gray-600 flex justify-between p-1">
          <span className="font-bold mr-1">Valor:</span>
          <span className="investment-origin">{formatCurrency(value)}</span>
        </p>
        <p className="text-gray-600 flex justify-between p-1">
          <span className="font-bold mr-1">Origem:</span>
          <span className="investment-origin">{origin}</span>
        </p>
        <p className="text-gray-600 flex justify-between p-1">
          <span className="font-bold mr-1">Categoria:</span>
          <span className="investment-category">{category}</span>
        </p>
        <p className="text-gray-600 flex justify-between p-1">
          <span className="font-bold mr-1">Taxa:</span>
          <span className="investment-interest">{interest}</span>
        </p>
        <p className="text-gray-600 flex justify-between p-1">
          <span className="font-bold mr-1">Data:</span>
          <span className="investment-created_at">
            {formatDate(created_at)}
          </span>
        </p>
      </div>
    </>
  );
}
