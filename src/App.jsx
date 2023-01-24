import imgUno from './assets/images/uno.jpg';
import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruts from './components/fruts/ListFruts';
import ButtonState from './components/ButtonState';

const App = () => {
    const title = "Mi titulo desde una constante ";
    const classTitle= "text-center";
    const user = true;
    const fruts = [ "🍊" , "🍍", "🥭", "🍎", "🍓", "🍒", "🍑", "🍐", "🍏"]
    const fruts2 = [ "🍊" , "🍍", "🥭", "🍎"]
    return (
        <>
            <ButtonState/>
            <h1 className={classTitle}>{title}</h1>
            <img  src={imgUno} alt={`imagen-${title}`}></img>

            <MyButton text='botón 1'/>
            <MyButton text='botón 2'/>
            <MyButton text='botón 3'/>
            <MyButton text='botón 4'/>

            <WelcomeText user={user}/>

            <ListFruts fruts={fruts}/>
            <ListFruts fruts={fruts2}/>

            
        </>
    )
}


export default App;