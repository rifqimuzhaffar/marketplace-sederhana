const Tittle = (props) => {
  const { children } = props;
  return (
    <div className="mx-auto mt-[6rem]">
      <h2 className="text-4xl text-center">{children}</h2>
    </div>
  );
};

export default Tittle;
