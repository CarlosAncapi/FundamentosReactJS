import imgUno from './assets/images/uno.jpg';
import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruts from './components/fruts/ListFruts';
import ButtonState from './components/ButtonState';

const App = () => {
    const title = "Mi titulo desde una constante ";
    const classTitle= "text-center";
    const user = true;
    const fruts = [ "๐" , "๐", "๐ฅญ", "๐", "๐", "๐", "๐", "๐", "๐"]
    const fruts2 = [ "๐" , "๐", "๐ฅญ", "๐"]
    return (
        <>
            <ButtonState/>
            <h1 className={classTitle}>{title}</h1>
            <img  src={imgUno} alt={`imagen-${title}`}></img>

            <MyButton text='botรณn 1'/>
            <MyButton text='botรณn 2'/>
            <MyButton text='botรณn 3'/>
            <MyButton text='botรณn 4'/>

            <WelcomeText user={user}/>

            <ListFruts fruts={fruts}/>
            <ListFruts fruts={fruts2}/>

            
        </>
    )
}


export default App;