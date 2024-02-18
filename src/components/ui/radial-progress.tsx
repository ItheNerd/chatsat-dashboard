type Props = {};

const RadialProgress = (props: Props) => {
  return (
    <div
      className="radial-progress flex items-center justify-center bg-black bg-opacity-35 text-accent"
      role="progressbar"
      style={
        {
          "--value": "70",
          "--size": "7rem",
          "--thickness": "0.8rem",
        } as React.CSSProperties
      }
    >
      <div className="m-4 flex flex-col items-center justify-center p-4 text-lg">
        <span>4/7</span> <span className="font-medium text-white">Streak</span>
      </div>
    </div>
  );
};

export default RadialProgress;
