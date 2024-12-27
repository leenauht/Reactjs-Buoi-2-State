export default function ShowGlass({ urlImg }) {
  return (
    <img
      src={urlImg}
      alt=""
      className="w-[110px] h-[40px] absolute top-[60px] opacity-60"
    />
  );
}
