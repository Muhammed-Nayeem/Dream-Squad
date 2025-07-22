const SelectedPlayers = ({ totalPlayers }) => {
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="container max-w-screen-xl mx-auto">
        <article className="mx-10 xl:mx-0">
          <h2 className="text-2xl text-gray-900 font-bold">
            Selected Players(0/{totalPlayers})
          </h2>
        </article>
      </div>
    </section>
  );
};

export default SelectedPlayers;
