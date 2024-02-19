import {render , fireEvent, screen} from "@testing-library/react-native"
import Todos from "../Todos"

describe("testing todos",()=>{
    const {getByTestId,getByPlaceholderText}=screen
    render(<Todos/>)
    it("textInput",()=>{
        render(<Todos/>)
        const {getByTestId,getByPlaceholderText}=screen

        const placeholder =getByPlaceholderText("Enter Text")
        // console.log("abc=====",placeholder.props);

        fireEvent.changeText(placeholder,"Arun")
        expect(placeholder.props.value).toBe("Arun")

        const moveToCounter=getByTestId("move to counter")
        fireEvent(moveToCounter,"press")

        const addBtn = getByTestId("add")
        fireEvent.press(addBtn)

        const delBtn = getByTestId("del")
        fireEvent.press(delBtn)

    })
})