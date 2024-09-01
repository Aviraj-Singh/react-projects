import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { MOCK_DATA } from "../mocks/resCardMock";
import "@testing-library/jest-dom";

it("Should render restaurant card with props Data", () => {
    // Creating Mock Data
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Sandwich 2 Poha");

    expect(name).toBeInTheDocument();
}) 