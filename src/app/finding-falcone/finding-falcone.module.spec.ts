import { FindingFalconeModule } from './finding-falcone.module';

describe('FindingFalconeModule', () => {
  let findingFalconeModule: FindingFalconeModule;

  beforeEach(() => {
    findingFalconeModule = new FindingFalconeModule();
  });

  it('should create an instance', () => {
    expect(findingFalconeModule).toBeTruthy();
  });
});
