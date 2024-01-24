import Card from "./components/Card.tsx"
import {useEffect, useState} from "react";
import CardInterface from "./interfaces/CardInterface.ts";
import UserType from "./types/UserType.ts";
const App = () =>{

    //--------------------------------------Use state handling------------------------------------------------------
    const [data, setData] =useState<any>([]);
    const [user, setUser]= useState<UserType | null>(null)



    useEffect((): void =>{
        const getData = (): void =>{
            fetch("https://fakestoreapi.com/products")
                .then( async(response: Response): Promise<void> =>{
                    const tempData= await response.json();
                    console.log(tempData)
                    setData(tempData);
                })
        }
        getData();
    }, [])


    // -------------------------------------------Event handling------------------------------------
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void =>{
        e.preventDefault();
        console.log("Clicked");
    }

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        setUser((prevState: UserType | null | undefined) => ({...prevState, name: e.target.value}));
        console.log(user);
    }
    const handleAge = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        setUser((prevState: UserType | null | undefined) => ({...prevState, age: e.target.value}));
    }

    // As the state update is asyncronous so we wait for it to complete before logging it
    useEffect(() => {
        console.log(user)
    }, [user]);



 return (
     <>
         <input value={user?.name} onInput={handleUsername} placeholder={"Enter your name"}></input>
         <input value={user?.age} onInput={handleAge} placeholder={"Enter your age"}></input>

         <button style={{padding: "5px", margin: "10px"}} onClick={clickHandler}>Click Me!</button>
         {data.map((dataItem: CardInterface) => (
             <Card key={dataItem["id"]} dataItem={dataItem}/>
         ))}
     </>
 )
}
export default App;