import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

// We can individually write the test cases or put them inside describe()

describe("Test Cases for Contact Page", () => {
    test("Should load Contact component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    }); //we can give name as it or test for each block
    
    test("Should load button inside Contact component", () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        //another way to find button
        //const submit_button = screen.getByText("Send message")
        //expect(submit_button).toBeInTheDocument();
    
        expect(button).toBeInTheDocument();
    });
    
    test("Should test input inside Contact component", () => {
        render(<Contact/>);
    
        const input = screen.getByPlaceholderText("name@email.com")
    
        expect(input).toBeInTheDocument();
    });
    
    test("Should load 3 input boxes inside Contact component", () => {
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(3);
    });
})