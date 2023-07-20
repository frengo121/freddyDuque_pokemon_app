import { render, fireEvent } from "@testing-library/react-native";
import Searcher from ".";

describe("Searcher", () => {
  const handleChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call handleChange with input value when the text is changed", () => {
    const { getByTestId } = render(
      <Searcher searchTerm="" handleChange={handleChangeMock} />
    );
    const input = getByTestId("searchInput");

    fireEvent.changeText(input, "Test Search Term");

    expect(handleChangeMock).toHaveBeenCalledWith("Test Search Term");
  });

  it("should display the current search term", () => {
    const { getByTestId } = render(
      <Searcher
        searchTerm="Current Search Term"
        handleChange={handleChangeMock}
      />
    );
    const input = getByTestId("searchInput");

    expect(input.props.value).toBe("Current Search Term");
  });
});
