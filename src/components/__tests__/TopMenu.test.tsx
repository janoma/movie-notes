import { fireEvent, render, screen } from "@testing-library/react";

import TopMenu from "../TopMenu";

describe("TopMenu", () => {
  test("toolbar is rendered", () => {
    render(<TopMenu />);

    const topMenuElement = screen.getByRole("toolbar");
    expect(topMenuElement).toBeInTheDocument();
  });

  test("focus on search input when hotkey is pressed", () => {
    render(<TopMenu />);

    fireEvent.keyDown(document, { key: "k", metaKey: true });

    const searchInput = screen.getByLabelText("search");
    expect(document.activeElement).toBe(searchInput);
  });
});
