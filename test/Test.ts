import assert from "assert";
import { 
  TestHelpers,
  MetaMorpho_AccrueInterest
} from "generated";
const { MockDb, MetaMorpho } = TestHelpers;

describe("MetaMorpho contract AccrueInterest event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for MetaMorpho contract AccrueInterest event
  const event = MetaMorpho.AccrueInterest.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("MetaMorpho_AccrueInterest is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await MetaMorpho.AccrueInterest.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMetaMorphoAccrueInterest = mockDbUpdated.entities.MetaMorpho_AccrueInterest.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMetaMorphoAccrueInterest: MetaMorpho_AccrueInterest = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      newTotalAssets: event.params.newTotalAssets,
      feeShares: event.params.feeShares,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMetaMorphoAccrueInterest, expectedMetaMorphoAccrueInterest, "Actual MetaMorphoAccrueInterest should be the same as the expectedMetaMorphoAccrueInterest");
  });
});
