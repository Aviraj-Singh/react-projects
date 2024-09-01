import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { MOCK_DATA } from "../mocks/mockResList";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Creating a mock fetch function
global.fetch =  jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the Body Component with Search and test the Search Functionality", async () => {
    await act(async () => render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>));

    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(8);

    const searchButton = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "Burger" }});
    fireEvent.click(searchButton);

    //Screen Should Load 1 Card as per current API
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
});

it("Should Filter the Top Restaurants Features", async () => {
    await act(async () => render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>));

    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardBeforeFilter.length).toBe(8);

    const filterButton = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(filterButton);

    //Screen Should Load 1 Card as per current API
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(4);
});