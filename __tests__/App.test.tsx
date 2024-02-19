import {fireEvent, render, screen} from "@testing-library/react-native"
import App from "../App"
import Counter from "../src/screens/counter/Counter"

const counterProp={
    navigate:jest.fn()
}

describe("render App correctly",()=>{
    
    it("render App",()=>{
        render(<App/>)
    })

    it("render Counter",()=>{
        render(<Counter navigation={counterProp}/>)

        const {getByTestId,getByText} = screen
        const count =getByText("Count:7")
        let req=count.props.children[1]
        const inc=getByTestId("increment")
        const dec=getByTestId("decrement")
        const reset=getByTestId("reset")
        const moveToTodo=getByTestId("moveToTodo")
        
        // console.log(count.props.children[1]);

        fireEvent.press(inc)
        req=req+1

        expect(req).toBe(8)

        fireEvent.press(dec)
        expect(count.props.children[1]).toBe(7)

        fireEvent.press(reset)
        expect(count.props.children[1]).toBe(0)

        fireEvent.press(moveToTodo)
        expect(counterProp.navigate).toHaveBeenCalledWith("Todos")
    })

})