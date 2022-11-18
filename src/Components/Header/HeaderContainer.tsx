import Header from "./Header";

const HeaderContainer = () => {
const [zip, setZip] = React.useState('');

const setValue = (e: any) => {
  setZip(e.target.value);
  console.log(zip);
}
  return <Header handleState={setValue} />;
};

export default HeaderContainer;
