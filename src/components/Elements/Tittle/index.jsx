const Tittle = (props) => {
  const { children, textColor } = props;
  return (
    <div className="mx-auto mt-[6rem]">
      <h2
        className={`text-3xl lg:text-5xl font-extrabold underline text-center ${textColor}`}
      >
        {children}
      </h2>
    </div>
  );
};

export default Tittle;
