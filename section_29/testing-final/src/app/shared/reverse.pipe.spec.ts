import { ReversePipe } from "./reverse.pipe";

describe('ReversePipe test', () => {
  it('should run the pipe', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  })
});