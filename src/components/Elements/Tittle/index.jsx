const Tittle = (props) => {
  const { children, textColor, textSize } = props;
  return (
    <div className="mx-auto mt-[6rem]">
      <h2
        className={`${textSize} lg:text-5xl font-extrabold underline text-center ${textColor}`}
      >
        {children}
      </h2>
    </div>
  );
};

export default Tittle;
