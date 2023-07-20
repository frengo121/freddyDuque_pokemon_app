import { render, fireEvent } from "@testing-library/react-native";
import Paginator from ".";

describe("Paginator", () => {
  const handlePageMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call handlePage with "back" when the back button is pressed', () => {
    const { getByTestId } = render(
      <Paginator handlePage={handlePageMock} page={2} isLastPage={false} />
    );
    const button = getByTestId("backButton");

    fireEvent.press(button);

    expect(handlePageMock).toHaveBeenCalledWith("back");
  });

  it('should call handlePage with "next" when the next button is pressed', () => {
    const { getByTestId } = render(
      <Paginator handlePage={handlePageMock} page={1} isLastPage={false} />
    );
    const button = getByTestId("nextButton");

    fireEvent.press(button);

    expect(handlePageMock).toHaveBeenCalledWith("next");
  });

  it("should disable the back button when on the first page", () => {
    const { getByTestId } = render(
      <Paginator handlePage={handlePageMock} page={1} isLastPage={false} />
    );
    const button = getByTestId("backButton");

    fireEvent.press(button);

    expect(handlePageMock).not.toHaveBeenCalled();
  });

  it("should disable the next button when on the last page", () => {
    const { getByTestId } = render(
      <Paginator handlePage={handlePageMock} page={1} isLastPage={true} />
    );
    const button = getByTestId("nextButton");

    fireEvent.press(button);

    expect(handlePageMock).not.toHaveBeenCalled();
  });
});
