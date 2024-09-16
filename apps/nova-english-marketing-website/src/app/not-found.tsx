import NotFound from '@/features/NotFound/ui/NotFound.component';

const NotFoundPage = () => {
  return (
    <div className="pt-16 flex flex-col justify-center items-center gap-16">
      <h1 className="text-xl font-bold">
        К сожалению, страница, которую вы ищете, не существует или была перемещена
      </h1>
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
