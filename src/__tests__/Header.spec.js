import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";

describe("<Header/>", () => {
  let describedComponent;
  describe("Changes active item with onclick", () => {
    beforeAll(() => {
      describedComponent = shallow(<Header activeItem="home" />);
    });
    it("clicks another menu item", () => {
      describedComponent.find('activeItem').simulate('click');
      expect(describedComponent.activeItem).to.equal('about')
    });
  });
});
