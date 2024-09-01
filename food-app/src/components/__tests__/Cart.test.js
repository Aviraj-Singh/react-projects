// Test for the cart flow
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "../Menu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import { MOCK_DATA } from "../mocks/mockMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Load Restaurant Menu Component", async() => {
    await act(async () => render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <Menu/>
            <Cart/>
        </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("NEW CHICKEN ROLLS (15)");
    fireEvent.click(accordionHeader);
    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(15);

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

    const addButtons = screen.getAllByRole("button", {name: "Add +"});
    fireEvent.click(addButtons[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
    const cartItems = screen.getAllByTestId("foodItems");
    expect(cartItems.length).toBe(16); // 1 from the cart and rest from the Menu

    const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"});
    fireEvent.click(clearCartBtn);
    const newFoodItems = screen.getAllByTestId("foodItems")
    expect(newFoodItems.length).toBe(15);
})