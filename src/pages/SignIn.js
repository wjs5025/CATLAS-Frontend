import axios from "axios";

const array = [];

const SignIn = () => {
  axios.get("/api").then((res) => {
    for (let i = 0; i < 3; i++) {
      array.push(res.data[i]);
    }
    console.log(array[0].name + " -> axois\n");
  });

  return (
    <div>
      <p>SignIn</p>
      <form action="/Signin" method="POST">
        name <input type="text" name="name" />
        <br />
        email <input type="text" name="email" />
        <br />
        <button>보 안내기</button>
      </form>
      {id}
    </div>
  );
};
export default SignIn;

/*

  /*  const callApi = async () => {
      console.log("SI");
      axios.get("/api").then((res) => console.log(res.data));
  };
  
  useEffect(() => {
  callApi();
  },[]);
  

  
  return <div>test</div>;
  */
