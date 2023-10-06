import { Bars } from "react-loader-spinner";

const Spinner = () => {
  const myStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={myStyle}>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
