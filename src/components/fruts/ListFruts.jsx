import ItemFrut from "./ItemFrut";

const ListFruts = ({fruts}) =>{
    return (
            <ul>
                {fruts.map(( frut, index ) => (
                    <ItemFrut key={index} fruta={ frut }/>
                ))}
            </ul>
    )
} 
export default ListFruts;