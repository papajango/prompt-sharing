import { render, screen } from "@testing-library/react";
import Profile from "@components/Profile";

describe("Profile", () => {
  it("renders a section", () => {
    render(
      <Profile
        name="name"
        desc="desc"
        data={[]}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />,
    );

    const section = screen.getByTestId("profile");

    expect(section).toBeInTheDocument();
  });
});
