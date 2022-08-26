import { BaseObject, PageObject} from "../support/pageObjects"

const $BaseObject = new BaseObject();
const $PageObject = new PageObject();

describe("Live Dashboard Smoke Test", () => {
  beforeEach(() => {
    $BaseObject.sampleMethod();
  });

  it("001 - Sample Test", () => {
    $PageObject.sampleMethod()
  });

});
