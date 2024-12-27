export default function ShowGlass({ glass }) {
  return (
    <>
      <div className="absolute w-[200px] right-auto left-auto">
        <img
          src={glass.url}
          alt=""
          className="w-[120px] h-[40px] my-[60px] mx-auto opacity-60"
        />
        <div className="w-full px-2 pb-2 bg-bg-opacity rounded-xl">
          <h3 className="font-medium text-blue-600 relative z-10">
            {glass.name}
          </h3>
          <p className="line-clamp-2 min-h-12">{glass.desc}</p>
        </div>
      </div>
    </>
  );
}
