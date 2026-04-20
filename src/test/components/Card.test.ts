import { describe, it, expect } from "vitest";
import { render } from "@testing-library/svelte";
import Card from "../components/Card.astro";

describe("Card Component", () => {
  it("renders with correct props", () => {
    const props = {
      title: "Test Title",
      body: "Test Body",
      href: "https://example.com",
    };

    // Note: Astro components need special handling for testing
    // This is a basic structure - you may need to adjust based on your testing setup
    const { container } = render(Card, { props });

    expect(container).toBeTruthy();
    // Add more specific assertions based on your component structure
  });

  it("displays the title correctly", () => {
    const props = {
      title: "Documentation",
      body: "Learn how Astro works",
      href: "https://docs.astro.build",
    };

    const { getByText } = render(Card, { props });

    expect(getByText("Documentation")).toBeInTheDocument();
  });
});
