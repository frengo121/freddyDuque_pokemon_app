import { Text } from "react-native";
import { useDebounce } from "./useDebounce";
import { render, act, waitFor } from "@testing-library/react-native";

jest.useFakeTimers();

function TestComponent({ value, delay }) {
  const debouncedValue = useDebounce(value, delay);
  return <Text testID="debouncedValue">{debouncedValue}</Text>;
}

describe("useDebounce", () => {
  it("should update debounced value after specified delay", async () => {
    const { getByTestId, rerender } = render(
      <TestComponent value="" delay={500} />
    );

    rerender(<TestComponent value="test" delay={500} />);
    expect(getByTestId("debouncedValue").props.children).toBe("");

    act(() => jest.advanceTimersByTime(500));

    await waitFor(() =>
      expect(getByTestId("debouncedValue").props.children).toBe("test")
    );
  });

  it("should only update debounced value once after rapid multiple value changes", async () => {
    const { getByTestId, rerender } = render(
      <TestComponent value="" delay={500} />
    );

    rerender(<TestComponent value="test1" delay={500} />);
    rerender(<TestComponent value="test2" delay={500} />);
    rerender(<TestComponent value="test3" delay={500} />);
    expect(getByTestId("debouncedValue").props.children).toBe("");

    act(() => jest.advanceTimersByTime(500));

    await waitFor(() =>
      expect(getByTestId("debouncedValue").props.children).toBe("test3")
    );
  });
});
