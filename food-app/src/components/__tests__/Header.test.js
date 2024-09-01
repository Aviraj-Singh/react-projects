import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("Should load header", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>);

    const loginButton = screen.getByRole("img");
    expect(loginButton).toBeInTheDocument();
});

it("Should render header component with Cart Items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>);

    const cartItems = screen.getByText("Cart (0 items)"); 
    // to test if cart item is there or not use Regex - const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

/* To test the click event action: Eg - onClick Response
it("Should change Login to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>);

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});
*/