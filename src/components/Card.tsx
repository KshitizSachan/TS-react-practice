import CardInterface from "../interfaces/CardInterface.ts";
const Card = (props: {id?: number, dataItem: CardInterface}) =>{
    const dataItem: CardInterface= props.dataItem;
    return (
        <div style={{border: "2px solid #000",padding: "5px", margin: "10px", borderRadius: "5px"}}>
            <h2>Title: {dataItem.title}</h2>
            <h3>Price: {dataItem.price}</h3>
            <h4>Category: {dataItem.category}</h4>
        </div>
    )
}
export default Card;